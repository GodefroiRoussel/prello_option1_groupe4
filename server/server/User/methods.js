import { Meteor } from 'meteor/meteor';
import User from "./model";
import AccessToken from "../AccessToken/model";
import AuthorizationToken from '../AuthorizationToken/model'
import { Accounts } from "meteor/accounts-base";
import { createClient } from "ldapjs"
import List from "../List/model";
import Client from '../Client/model';

const URL_LDAP = Meteor.settings.URL_LDAP || process.env.URL_LDAP;
const CREDENTIALS = Meteor.settings.CREDENTIALS || process.env.CREDENTIALS;
const PASSWORD = Meteor.settings.PASSWORD || process.env.PASSWORD;
const BASE_PERMANENT_SEARCH = Meteor.settings.BASE_PERMANENT_SEARCH || process.env.BASE_PERMANENT_SEARCH;
const BASE_STUDENT_SEARCH = Meteor.settings.BASE_STUDENT_SEARCH || process.env.BASE_STUDENT_SEARCH;
const BASE_DN = Meteor.settings.BASE_DN || process.env.BASE_DN;


Accounts.emailTemplates.siteName = 'PRELLO - The best management tool for your projects';
Accounts.emailTemplates.from = 'PRELLO - The best management tool for your projects <contact@prello.com>';

Accounts.emailTemplates.enrollAccount.subject = (user) => {
    return `Welcome to Prello App , ${user.profile.name}`;
};

Accounts.emailTemplates.enrollAccount.text = (user, url) => {
    return 'You choosed to get your projects task easier to manage, wonderfull choice !'
        + ' To activate your account, simply click the link below:\n\n'
        + url;
};

Accounts.emailTemplates.resetPassword.from = () => {
    // Overrides the value set in `Accounts.emailTemplates.from` when resetting
    // passwords.
    return 'PRELLO - Password Reset <contact@prello.co>';
};
Accounts.emailTemplates.verifyEmail = {
    subject() {
        return "Activate your account now!";
    },
    text(user, url) {
        return `Hey ${user}! Verify your e-mail by following this link: ${url}`;
    }
}


Meteor.methods({
    addUser(data) {
        return Accounts.createUser({
            username: data.nickname,
            email: data.email,
            password: data.password,
            profile: {
                genderUser: data.gender,
                firstNameUser: data.firstName,
                lastNameUser: data.name,
                nickNameUser: data.nickname,
                mailUser: data.email,
                biographyUser: "",
                initialsUser: "",
                passwordUser: "",
                seedUser: "",
                avatarUser: "",
                languageUser: "",
                colourBlindUser: "",
                favoriteBoards: [],
                isAdminMember: 0
            }
        });
    },
    getUsers() {
        return Meteor.users.find().fetch();
    },
    getUser(id) {
        return Meteor.users.findOne(id);
    },
    getAllUsersReturnUsername() {
        const users = Meteor.users.find().fetch();
        var usernames = users.map(x => x.username);
        return usernames;
    },
    editUserProfile(data) {
        const userId = Meteor.userId()
        const user = Meteor.users.findOne(userId)
        const profile = user.profile
        var newProfile = {}
        Object.keys(profile).forEach((f) => {
            if (data[f]) {
                newProfile[f] = data[f]
            }
            else {
                if (profile[f]) {
                    newProfile[f] = profile[f]
                }
                else {
                    if (f == "favoriteBoards") {
                        newProfile[f] = []
                    } else {
                        newProfile[f] = "";
                    }
                }
            }
        })
        return Meteor.users.update(Meteor.userId(), { $set: { profile: newProfile } });
    },
    addFavoriteBoard(data) { // data = userId, boardId
        const userId = Meteor.userId()
        const user = Meteor.users.findOne(userId)
        const favBoards = user.profile.favoriteBoards
        favBoards.push(data.boardId)
        const d = { favoriteBoards: favBoards }
        Meteor.call("editUserProfile", d)
    },
    deleteFavoriteBoard(data) { // data = userId, boardId
        const userId = Meteor.userId();
        const user = Meteor.users.findOne(userId)
        const favBoards = user.profile.favoriteBoards
        const position = favBoards.indexOf(data.boardId)
        favBoards.splice(position, 1)
        const d = { favoriteBoards: favBoards }
        Meteor.call("editUserProfile", d)
    },
    getClientsAuthorizedByUser() {
        const userId = Meteor.userId();
        const listAccessToken = AccessToken.find({ "user.id": userId });
        const clients = Client.find().fetch();
        return clients;
    },
    removeAuthorization(idClient) {
        const userId = Meteor.userId();
        AuthorizationToken.remove({ "client.id": idClient, "user.id": userId });
        return AccessToken.remove({ "client.id": idClient, "user.id": userId });
    },
    async loginPolytech(user) {
        const username = user.username;
        const pwd = user.password;

        try {
            await authenticateUser(username, pwd)
            // Retrieve the user according to the username
            const user = Meteor.users.findOne({ username: username })

            const splitUsername = username.split('.');
            if (splitUsername.length == 1) {
                var firstName = '';
                var lastName = splitUsername[0];
                var email = username + '@umontpellier.fr'
            } else {
                var firstName = splitUsername[0];
                var lastName = splitUsername[1];
                var email = username + '@etu.umontpellier.fr'
            }

            const stampedToken = Accounts._generateStampedLoginToken();
            const hashStampedToken = Accounts._hashStampedToken(stampedToken);
            // If user then return user._id else create a new user in the Database
            if (user) {
                Meteor.users.update(user._id,
                    { $push: { 'services.resume.loginTokens': hashStampedToken } }
                );
                this.setUserId(user._id);

                return {
                    id: user._id,
                    token: stampedToken.token
                }
            } else {
                const newUserId = Accounts.createUser({
                    username: username,
                    email: email,
                    password: '',
                    profile: {
                        genderUser: 'N/A',
                        firstNameUser: firstName,
                        lastNameUser: lastName,
                        nickNameUser: username,
                        mailUser: email,
                        biographyUser: "",
                        initialsUser: "",
                        passwordUser: "",
                        seedUser: "",
                        avatarUser: "",
                        languageUser: "",
                        favoriteBoards: [],
                        colourBlindUser: ""
                    }
                });
                Meteor.users.update(newUserId,
                    { $push: { 'services.resume.loginTokens': hashStampedToken } }
                );
                this.setUserId(newUserId);

                return {
                    id: newUserId,
                    token: stampedToken.token
                }
            }
        }
        catch (err) {
            return err
        }
    }
})

authenticateUser = (username, pwd) => {
    const ldap = createClient({ url: URL_LDAP })
    const cred = CREDENTIALS;
    const password = PASSWORD;

    return new Promise((resolve, reject) => {
        // Enter in the ldap through a good user to be able to do a research
        ldap.bind(cred, password, function (err) {
            if (err)
                return reject(err);
            else {
                var opts = {
                    filter: '(CN=' + username + ')',
                    scope: 'sub',
                    attributes: []
                };

                // A permanent user has a username with only its name and the student has a username with firstname.lastname
                if (username.split('.').length == 1)
                    var search = BASE_PERMANENT_SEARCH;
                else
                    var search = BASE_STUDENT_SEARCH;

                // Search the CN of the user to check if the password is right to this account
                ldap.search(search + "," + BASE_DN, opts, function (err, res) {
                    if (err)
                        return reject(err);
                    else {
                        res.on('searchEntry', function (entry) {
                            ldap.bind(entry.objectName, pwd, function (err) {
                                if (err)
                                    return reject(err);
                                else
                                    return resolve();
                            });
                        });
                    }
                });
            }
        })
    });
}

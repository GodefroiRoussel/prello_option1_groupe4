import { Meteor } from 'meteor/meteor';
import User from "./model";
import { Accounts } from "meteor/accounts-base";
import { createClient } from "ldapjs"

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
                colourBlindUser: ""
            }
        });
    },
    getUsers() {
        return Meteor.users.find().fetch();
    },
    getUser(id) {
        return Meteor.users.findOne(id);
    },
    editUserProfile(data) {
        return Meteor.users.update(Meteor.userId(), { $set: { profile: data } });
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
            console.log("ERR")
            console.log(err)
            return err
        }
    }
})

authenticateUser = (username, pwd) => {
    const ldap = createClient({ url: Meteor.settings.URL_LDAP })
    const cred = Meteor.settings.CREDENTIALS;
    const password = Meteor.settings.PASSWORD;

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
                    var search = Meteor.settings.BASE_PERMANENT_SEARCH;
                else
                    var search = Meteor.settings.BASE_STUDENT_SEARCH;

                // Search the CN of the user to check if the password is right to this account
                ldap.search(search + "," + Meteor.settings.BASE_DN, opts, function (err, res) {
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

import {Meteor} from 'meteor/meteor';
import User from "./model";
import {Accounts} from "meteor/accounts-base";

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
    addUser(data){
        console.log("Data add User function :")
        console.log(data);
        console.log(Meteor.users.find().fetch());
        return Accounts.createUser({
            username:data.nickname,
            email:data.email,
            password:data.password,
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
        return User.find().fetch();
    },
    getUser(id) {
        return users.findOne(id);
    },
})
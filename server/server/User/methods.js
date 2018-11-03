import {Meteor} from 'meteor/meteor';
import User from "./model";
import {Accounts} from "meteor/accounts-base";

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
                firstNameUser: data.firstName,
                lastNameUser: data.name,
                nickNameUser: data.nickname,
                mailUser: data.email,
                biographyUser: "",
                initialsUser: "",
                passwordUser: "",
                seedUser: "",
                genderUser: "",
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
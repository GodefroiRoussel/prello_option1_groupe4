import {Meteor} from 'meteor/meteor';
import User from './publications';
import List from "../List/publications";

Meteor.methods({
    addUser(gender,nickname, firstName, name, email, password){
        return User.insert({genderUser: gender,nickNameUser: nickname,firstNameUser: firstName,nameUser: name,emailUser: email,passwordUser: password});
    },
    getUsers() {
        return User.find().fetch();
    },
    getUser(id) {
        return User.findOne(id);
    },
})
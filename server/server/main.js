// import core tools
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { check } from 'meteor/check'
import { HTTP } from 'meteor/http'

import './List/index';
import './Team/index';
import './Board/index';
import './User/index';
import './Card/index';
import './Work/index';
import './CheckList/index';
import './Item/index';
import './Comment/index';
import './Label/index';
import './Client/index';
import './Todo/index';
import './OtherWork/index';

// declare MongoDB collection here
//
// Read more: http://guide.meteor.com/collections.html

// We can publish some data (here all)
// we will be able to subscribe to the data later in the client app
// remember that this is not secured, all can subscribe to all data from the client side, just demo purposes
//
// Read more: http://guide.meteor.com/data-loading.html


Meteor.publish('user', function () {
    return Meteor.users.find({ _id: this.userId });
});

JsonRoutes.setResponseHeaders({
    "Cache-Control": "no-store",
    "Pragma": "no-cache",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
});

// We can also use server side methods and call them from our client app
// here we just fetch all documents from the collection
// again, remember that this is not secured, all can call it from the client side, just demo purposes
//
// Read more: http://guide.meteor.com/methods.html
Meteor.methods({
    'user.register' (data) {
        Accounts.createUser({
            email: data.username,
            password: data.password
        });
    },
});



// Deny all client-side updates on the Lists collection
// Read more about security stuff: http://guide.meteor.com/security.html
/*Todo.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});*/

// Example user - just a simple example without validation etc.
// Read more at: https://guide.meteor.com/accounts.html
Meteor.startup(() => {
    const theOnlyUser = Meteor.users.find().fetch();
    /*
    if (!theOnlyUser.length) {
        Accounts.createUser({
            username: 'admin',
            password: 'pass'
        });
    }*/
});

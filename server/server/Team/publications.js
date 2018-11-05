import {Meteor} from 'meteor/meteor';
import Team from './model';

Meteor.publish('team', function() {
    return Team.find();
})
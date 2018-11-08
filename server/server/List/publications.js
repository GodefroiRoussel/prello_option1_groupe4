import {Meteor} from 'meteor/meteor';
import List from './model';


Meteor.publish('list', function() {
    return List.find();
});

export default List;
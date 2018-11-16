import { createClass } from 'asteroid';
import { setLoggedUser, unsetLoggedUser } from '../objects/Login/LoginActions';
import { addTodo, removeTodo, editTodo } from '../objects/Todo/TodoActions';
import { addList, removeList, editList } from '../objects/List/ListActions';
import { addTeam, editTeam } from '../objects/Team/TeamActions';
import { addBoard, editBoard } from '../objects/Board/BoardActions';
import { addUser } from '../objects/User/UserActions';
import { addCard, editCard } from '../objects/Card/CardActions';
import { addClient, removeClient } from '../objects/Client/ClientActions';
import store from '../store';

const Asteroid = createClass();
// Connect to a Meteor backend
const asteroid = new Asteroid({
    endpoint: 'ws://localhost:9000/websocket',
});

// if you want realitme updates in all connected clients
// subscribe to the publication

asteroid.subscribe('list');
asteroid.subscribe('todo');
asteroid.subscribe('user');
asteroid.subscribe('board');
asteroid.subscribe('team');
asteroid.subscribe('card');
asteroid.subscribe('client');


asteroid.ddp.on('added', (doc) => {
    // we need proper document object format here
    if (doc.collection === 'board') {
        const docObj = Object.assign({}, doc.fields, { _id: doc.id });
        store.dispatch(addBoard(docObj));
    }
    if (doc.collection === 'todo') {
        const docObj = Object.assign({}, doc.fields, { _id: doc.id });
        store.dispatch(addTodo(docObj));
    }
    if (doc.collection === 'list') {
        const docObj = Object.assign({}, doc.fields, { _id: doc.id });
        store.dispatch(addList(docObj));
    }
    if (doc.collection === 'team') {
        const docObj = Object.assign({}, doc.fields, { _id: doc.id });
        store.dispatch(addTeam(docObj));
    }
    if (doc.collection === 'user') {
        const docObj = Object.assign({}, doc.fields, { _id: doc.id });
        store.dispatch(addUser(docObj));
    }
    if (doc.collection === 'users') {
        store.dispatch(setLoggedUser(doc.fields));
    }
    if (doc.collection === 'card') {
        const docObj = Object.assign({}, doc.fields, { _id: doc.id });
        store.dispatch(addCard(docObj));
    }
    if (doc.collection === 'clients') {
        const docObj = Object.assign({}, doc.fields, { _id: doc.id });
        store.dispatch(addClient(docObj));
    }
});

asteroid.ddp.on('removed', (removedDoc) => {
    if (removedDoc.collection === 'todo') {
        store.dispatch(removeTodo(removedDoc.id));
    }
    if (removedDoc.collection === 'list') {
        store.dispatch(removeList(removedDoc.id));
    }
    if (removedDoc.collection === 'users') {
        store.dispatch(unsetLoggedUser());
    }
    if (removedDoc.collection === 'clients') {
        store.dispatch(removeClient(removedDoc.id));
    }
});

asteroid.ddp.on('changed', (updatedDoc) => {
    if (updatedDoc.collection === 'todo') {
        store.dispatch(editTodo(updatedDoc.id, updatedDoc.fields));
    }
    if (updatedDoc.collection === 'team') {
        store.dispatch(editTeam(updatedDoc.id, updatedDoc.fields));
    }
    if (updatedDoc.collection === 'card') {
        store.dispatch(editCard(updatedDoc.id, updatedDoc.fields));
    }
    if (updatedDoc.collection === 'list') {
        store.dispatch(editList(updatedDoc.id, updatedDoc.fields));
    }
    if (updatedDoc.collection === 'board') {
        store.dispatch(editBoard(updatedDoc.id, updatedDoc.fields));
    }
});

/*asteroid.ddp.on('get', (getdDoc) => {
    if (getdDoc.collection === 'board') {
        store.dispatch(getBoard(getDoc.id));
    }
});*/

export default asteroid;

import { createClass } from 'asteroid';
import { setLoggedUser, unsetLoggedUser } from '../components/Login/LoginActions';
import { addTodo, removeTodo, editTodo } from '../components/Todo/TodoActions';
import { addList, removeList } from '../components/List/ListActions';
import { addTeam } from '../components/Team/TeamActions';
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
asteroid.subscribe('team');

asteroid.ddp.on('added', (doc) => {
  // we need proper document object format here
  if (doc.collection === 'todo') {
    const docObj = Object.assign({}, doc.fields, { _id: doc.id });
    store.dispatch(addTodo(docObj));
  }
  if (doc.collection === 'list') {
    const docObj = Object.assign({}, doc.fields, { _id: doc.id });
    store.dispatch(addList(docObj));
  }
  if(doc.collection === 'team'){
    const docObj = Object.assign({}, doc.fields, { _id: doc.id });
    store.dispatch(addTeam(docObj));
  }
  if (doc.collection === 'users') {
    store.dispatch(setLoggedUser(doc.fields));
  }
});

asteroid.ddp.on('removed', (removedDoc) => {
  if (removedDoc.collection === 'todo') {
    store.dispatch(removeTodo(removedDoc.id));
  }
  if (removedDoc.collection === 'list'){
    store.dispatch(removeList(removedDoc.id));
  }
  if (removedDoc.collection === 'users') {
    store.dispatch(unsetLoggedUser());
  }
});

asteroid.ddp.on('changed', (updatedDoc) => {
  if (updatedDoc.collection === 'todo') {
    store.dispatch(editTodo(updatedDoc.id, updatedDoc.fields.finished));
  }
});

export default asteroid;

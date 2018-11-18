import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { callRemoveTodo, callEditTodo } from '../../objects/Todo/TodoAsyncActions';
import style from './todo.styl';

import {
    Tab,
    Card,
    Image,
    List,
    Button,
    Form,
    TextArea,
    Grid,
    Segment,
    Progress,
    Modal,
    Header,
    Divider,
    Icon, Input,
    Dropdown,
    Checkbox
} from 'semantic-ui-react';

const Todo = (props) => {
  const { id, finished, message, dispatchCallRemoveTodo, dispatchCallEditTodo} = props;
  const handleRemove = () => {
    dispatchCallRemoveTodo(id);
  };
  const handleEdit = () => {
    dispatchCallEditTodo(id, !finished);
  };
  const finishedClass = () => {
    if (finished) {
      return 'todo-item todo-finished';
    }
    return 'todo-item';
  };
  return (
      <List divided verticalAlign='middle'>
          <List.Item>
              <List.Content floated='right'>
                  <Button onClick={handleRemove}>Delete</Button>
              </List.Content>

              <List.Content floated='left' styleName={finishedClass()}>
                  <Checkbox label={message} checked={finished} onChange={handleEdit}/>

              </List.Content>
          </List.Item>
      </List>
  );
};


const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  dispatchCallRemoveTodo: _id => dispatch(callRemoveTodo(_id)),
  dispatchCallEditTodo: (_id, finished) => dispatch(callEditTodo(_id, finished)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  cssModules(Todo, style, { allowMultiple: true }));
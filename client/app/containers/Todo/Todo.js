import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { callRemoveTodo, callEditTodo } from '../../objects/Todo/TodoAsyncActions';
import style from './todo.styl';
import PropTypes from 'prop-types';

const Todo = (props) => {
  const { id, finished, message, dispatchCallRemoveTodo, dispatchCallEditTodo } = props;
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
    <div styleName={finishedClass()}>
      <input type="checkbox" checked={finished || false} onChange={handleEdit} />
      {message}
      <button type="button" onClick={handleRemove}>
        <i className="fa fa-times" />
      </button>
    </div>
  );
};

Todo.propTypes = {
  /* James : Je met en commentaire car erreur avec react 16
  message: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,*/
  finished: PropTypes.bool,
  dispatchCallRemoveTodo: PropTypes.func.isRequired,
  dispatchCallEditTodo: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  dispatchCallRemoveTodo: _id => dispatch(callRemoveTodo(_id)),
  dispatchCallEditTodo: (_id, finished) => dispatch(callEditTodo(_id, finished)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  cssModules(Todo, style, { allowMultiple: true }));

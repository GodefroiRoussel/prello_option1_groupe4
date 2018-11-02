import React from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import style from './home.styl';
import Todo from '../Todo/Todo';
import List from '../List/List';
import Login from '../Login/Login';
import asteroid from '../../common/asteroid';
import { Link, browserHistory } from 'react-router';
import { Button, Input } from 'semantic-ui-react';
import { callAddTeam } from '../Team/TeamAsyncActions';
import { callAddTodo } from '../../components/Todo/TodoAsyncActions';
import { callAddList } from '../List/ListAsyncActions';

const Home = (props) => {
  const {teams, lists, todos, dispatchCallAddTodo, dispatchCallAddList, dispatchCallAddTeam, user } = props;

  const handleAddTeam = (e) => {
    if (e.key === 'Enter') {
      const elem = e.target;
      e.preventDefault();
      if (elem.value) {
        dispatchCallAddTeam(elem.value);
        elem.value = '';
      }
    }
  }

  const handleAddTodo = (e) => {
    if (e.key === 'Enter') {
      const elem = e.target;
      e.preventDefault();
      if (elem.value) {
        dispatchCallAddTodo(elem.value);
        elem.value = '';
      }
    }
  };
  const handleLogout = () => {
    asteroid.logout();
  };
  const handleAddList = () => {
    dispatchCallAddList("hello");
  }
  const home = () => {
    if (user && user.username) {
      return (
        <div>
          <div styleName="logout">
            Logged user: {user.username}
            <button onClick={handleLogout} styleName="logout-button">Logout</button>
          </div>
          <div>
              {
                teams.map(m =>
                  <div key={m._id}> 
                    <Button onClick={() => browserHistory.push('/team')}>{m.name}</Button>
                    </div>
                  )
              }
            </div>
          <div>
            <Input type='text' onKeyPress={handleAddTeam} icon='users' iconPosition='left' placeholder='Add Team' />
          </div>
          <div>
            <Button onClick={handleAddList}>Click Here</Button>
          </div>
          <div>
          {
              lists.map((l, i) =>
                <List id={l._id} key={l._id} message={l.message}/>
              )
          }
          </div>
          <div>
            <input
              type="text"
              styleName="add-todo-input"
              placeholder="Add todo item ..."
              onKeyPress={handleAddTodo}
            />
          </div>
          <div>
            {todos.map((t, i) =>
              <Todo id={t._id} message={t.message} finished={t.finished} key={t._id} />)}
          </div>
        </div>
      );
    }
    return <Login />;
  };
  return <div>{home()}</div>;
};

Home.propTypes = {
  teams: React.PropTypes.array.isRequired,
  lists: React.PropTypes.array.isRequired,
  todos: React.PropTypes.array.isRequired,
  dispatchCallAddTeam: React.PropTypes.func.isRequired,
  dispatchCallAddTodo: React.PropTypes.func.isRequired,
  dispatchCallAddList: React.PropTypes.func.isRequired,
  user: React.PropTypes.object,
};

const mapStateToProps = state => ({
  teams: state.teams,
  lists: state.lists,
  todos: state.todos,
  user: state.user,
});
const mapDispatchToProps = dispatch => ({
  dispatchCallAddTeam: data => dispatch(callAddTeam(data)),
  dispatchCallAddList: data => dispatch(callAddList(data)),
  dispatchCallAddTodo: data => dispatch(callAddTodo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Home, style));

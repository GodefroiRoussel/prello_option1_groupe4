import React from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import style from './home.styl';
import Todo from '../Todo/Todo';
import List from '../List/List';
import Login from '../Login/Login';
import asteroid from '../../common/asteroid';
import { browserHistory } from 'react-router';
import { Button, Input , Card} from 'semantic-ui-react';

import { callAddTodo } from '../../objects/Todo/TodoAsyncActions';
import { callAddList } from '../../objects/List/ListAsyncActions';
import { callAddTeam } from '../../objects/Team/TeamAsyncActions';
import { callEditBoard} from '../../objects/Board/BoardAsyncActions';
import CardTeamsComponent from '../../components/CardTeams.component';
import CardBoards from '../../components/CardBoards/CardBoards.component';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        asteroid.subscribe('team');
    }

    componentWillUnmount(){
        asteroid.unsubscribe('team');
        setTimeout(500);
        console.log("hello")
    }


    handleAddTeam = (e) => {
        if (e.key === 'Enter') {
            const elem = e.target;
            e.preventDefault();
            if (elem.value) {
                this.props.dispatchCallAddTeam({name: elem.value, user: this.props.user.username});
                elem.value = '';
            }
        }
    }

    handleLogout = () => {
        asteroid.logout();
    };

    render() {
        if(this.props.user && this.props.user.username){
            if(!this.props.teams || !this.props.boards){
                return <div/>
            }
            else{
                return(<div>
                    <h1>Boards</h1>
                    <CardBoards boards={this.props.boards}></CardBoards>
                    <h1>Teams</h1>
                    <Input type='text' onKeyPress={this.handleAddTeam} action='Add' placeholder='Add a Team'></Input>
                    {this.isTeamsFilled(this.props.teams)}
                </div>)
            }
        }
        else{
            return <Login/>
        }
    }

    isTeamsFilled = (teams) =>{
        if(teams.length>0){
            return(<CardTeamsComponent teams={teams}></CardTeamsComponent>)
        }
        else{return(<div></div>)}
    }

    
}

Home.propTypes = {
    teams: React.PropTypes.array.isRequired,
    dispatchCallAddTeam: React.PropTypes.func.isRequired,
    user: React.PropTypes.object,
};

function mapStateToProps(state, ownProps){
    return{
        teams: state.teams,
        user: state.user,
        boards: state.boards,
    }
};

function mapDispatchToProps(dispatch){
    return{
        dispatchCallAddTeam: data => dispatch(callAddTeam(data)),
        dispatchCallAddBoard: data => dispatch(callEditBoard(data)),
    }
};

/*const Home = (props) => {
    const {teams, lists, todos, dispatchCallAddTodo, dispatchCallAddList, dispatchCallAddTeam, user } = props;

    const home = () => {
        if (user && user.username) {
            return (
                <div styleName="todo-wrapper">

                    <div>
                        {
                            teams.map(team =>
                                <div key={team._id}>
                                    <Button onClick={() => browserHistory.push({pathname: '/team', state: {team: team._id}})}>{team.nameTeam}</Button>
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
        return <Login/>;
    };
    return <div>{home()}</div>;
};

// Vérifier le type des varible
Home.
*/

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Home, style));
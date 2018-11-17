import React from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from '../Login/Login';
import asteroid from '../../common/asteroid';
import { browserHistory } from 'react-router';
import {Button, Input, Card, Grid, Divider} from 'semantic-ui-react';
import { callAddTeam } from '../../objects/Team/TeamAsyncActions';
import { callAddBoard} from '../../objects/Board/BoardAsyncActions';
import CardTeamsComponent from '../../components/CardTeams/CardTeams.component';
import CardBoards from '../../components/CardBoards/CardBoards.component';
import defaultStyle from "../../styles/settings.styl";
import style from './home.styl';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    handleAddTeam = (e) => {
        if (e.key === 'Enter') {
            const elem = e.target;
            e.preventDefault();
            if (elem.value) {
                this.props.dispatchCallAddTeam({nameTeam: elem.value, user: this.props.user.username});
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
                    <Grid centered style={style.root}>
                        <Grid.Row className={style.firstRowHome}>
                            <Grid.Column mobile={15} tablet={13} computer={10}>
                                <h2 className={defaultStyle.textColor4}>Welcome back {this.props.user.username}</h2>
                                <Divider />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className={style.secondRowHome}>
                            <Grid.Column mobile={15} tablet={13} computer={10}>

                                <h3 className={defaultStyle.textColor4}>Your boards favorites (to implement)</h3>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column mobile={15} tablet={13} computer={10}>
                                <CardBoards boards={this.props.boards} user={this.props.user.username} dispatchFunc={this.props.dispatchCallAddBoard}></CardBoards>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className={style.secondRowHome}>
                            <Grid.Column mobile={15} tablet={13} computer={10}>

                                <h3 className={defaultStyle.textColor4}>Your created Boards</h3>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column mobile={15} tablet={13} computer={10}>
                                <CardBoards boards={this.props.boards} user={this.props.user.username} dispatchFunc={this.props.dispatchCallAddBoard}></CardBoards>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className={style.thirdRowHome}>
                            <Grid.Column mobile={15} tablet={13} computer={10}>
                                <h3 className={defaultStyle.textColor4}>Your Teams</h3>
                                <Input type='text' onKeyPress={this.handleAddTeam} action='Add' placeholder='Add a Team'></Input>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column mobile={15} tablet={13} computer={10}>
                                {this.isTeamsFilled(this.props.teams)}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className={style.secondRowHome}>
                            <Grid.Column mobile={15} tablet={13} computer={10}>

                                <h3 className={defaultStyle.textColor4}>All your Boards (to implement)</h3>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column mobile={15} tablet={13} computer={10}>
                                <CardBoards boards={this.props.boards} user={this.props.user.username} dispatchFunc={this.props.dispatchCallAddBoard}></CardBoards>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </div>)
            }
        }
        else{
            return <Login/>
        }
    }

    isTeamsFilled = (teams) =>{
        if(teams.length>0){
            return(<CardTeamsComponent teams={teams}/>)
        }
        else{return(<div></div>)}
    }

    
}

Home.propTypes = {
    dispatchCallAddTeam: PropTypes.func.isRequired,
    boards: PropTypes.array.isRequired,
    user: PropTypes.object,
    teams: PropTypes.array.isRequired,
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
        dispatchCallAddBoard: data => dispatch(callAddBoard(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Home, style));
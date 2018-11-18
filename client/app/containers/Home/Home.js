import React from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../Login/Login';
import asteroid from '../../common/asteroid';
import {Input, Grid, Divider, Form, Button} from 'semantic-ui-react';
import { callAddTeam } from '../../objects/Team/TeamAsyncActions';
import { callAddBoard} from '../../objects/Board/BoardAsyncActions';
import CardTeamsComponent from '../../components/CardTeams/CardTeams.component';
import CardBoards from '../../components/CardBoards/CardBoards.component';
import {callAddFavoriteBoard, callDeleteFavoriteBoard} from '../../objects/User/UserAsyncActions';
import defaultStyle from "../../styles/settings.styl";
import style from './home.styl';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            nameTeam: "",
            nameBoard: "",
        }
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
        if(e.type=="submit"){
            this.props.dispatchCallAddTeam({nameTeam: this.state.nameTeam, user: this.props.user.username});
        }
    }

    changeNameBoard = (name) => {
        this.setState({nameBoard: name.target.value})
    }

    handleAddBoardOnClick = () => {
        this.props.dispatchCallAddBoard({titleBoard: this.state.nameBoard, user: this.props.user.username})
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
                const userBoard=this.props.boards.filter(x => x.teams == undefined && !this.props.user.profile.favoriteBoards.includes(x._id))
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
                            {this.callCardBoard(this.props.favoriteBoards)}
                        </Grid.Row>
                        <Grid.Row className={style.secondRowHome}>
                            <Grid.Column mobile={15} tablet={13} computer={10}>

                                <h3 className={defaultStyle.textColor4}>Your created Boards</h3>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            {this.callCardBoard(userBoard)}
                        </Grid.Row>
                        <Grid.Row className={style.thirdRowHome}>
                            <Grid.Column mobile={15} tablet={13} computer={10}>
                                <h3 className={defaultStyle.textColor4}>Your Teams</h3>
                                <Form onSubmit={this.handleAddTeam}>
                                    <Form.Group inline>
                                        <Form.Field>
                                            <Input type='text' onKeyPress={this.handleAddTeam} onChange={(name)=> this.setState({nameTeam: name.target.value})} placeholder='Add a Team'></Input>                                        </Form.Field>
                                        <Form.Field>
                                            <Button type="submit">Add</Button>
                                        </Form.Field>
                                    </Form.Group>
                                </Form>
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
                            {this.callCardBoard(this.props.boards)}
                        </Grid.Row>
                    </Grid>

                </div>)
            }
        }
        else{
            return <Login/>
        }
    }

    callCardBoard = (boards) => {
        return(
            <Grid.Column mobile={15} tablet={13} computer={10}>
                <CardBoards boards={boards} 
                user={this.props.user.username} 
                dispatchFunc={this.props.dispatchCallAddBoard} 
                changeNameBoard={this.changeNameBoard}
                handleAddBoardOnClick={this.handleAddBoardOnClick}
                userFavoriteBoard={this.props.user.profile.favoriteBoards}
                handleAddFavoriteBoard={this.props.dispatchCallAddFavoriteBoard}
                handleDeleteFavoriteBoard={this.props.dispatchCallDeleteFavoriteBoard}></CardBoards>
            </Grid.Column>
        )
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
        favoriteBoards: state.boards.filter(x => {
            if(state.user){
                return state.user.profile.favoriteBoards.includes(x._id)
            }
        }),
    }
};

function mapDispatchToProps(dispatch){
    return{
        dispatchCallAddTeam: data => dispatch(callAddTeam(data)),
        dispatchCallAddBoard: data => dispatch(callAddBoard(data)),
        dispatchCallEditUser: data => dispatch(callEditUserProfile(data)),
        dispatchCallAddFavoriteBoard: data => dispatch(callAddFavoriteBoard(data)),
        dispatchCallDeleteFavoriteBoard: data => dispatch(callDeleteFavoriteBoard(data)),
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Home, style));
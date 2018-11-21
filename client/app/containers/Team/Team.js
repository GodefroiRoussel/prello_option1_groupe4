import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { Tab, Card, Image, List, Button ,Form, Grid, Segment,Select, Input} from 'semantic-ui-react';
import ListMember from '../../components/ListMember/ListMember.component';
import CardBoards from '../../components/CardBoards/CardBoards.component';
import { callAddMember, callRemoveTeam, callUpdateVisibilityTeam, callDeleteMembers} from '../../objects/Team/TeamAsyncActions';
import {callAddBoard} from '../../objects/Board/BoardAsyncActions';
import { browserHistory } from 'react-router';
import style from './team.styl';
import defaultStyle from "../../styles/settings.styl";


import classNames from 'classnames'

const options = [
    {key:'0', text: 'private', value: "false"},
    {key:'1', text: 'public', value: "true"},
]


class Team extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            team: "",
            privacy: "false",
            membersName: "",
            nameBoard: "",
        };
    }

    membersNameFromInput = (e) => {
        this.setState({
            membersName: e
        })
    }

    addMembersFromButton = () => {
        this.props.DispatchCallAddMember({_id: this.props.team._id, member: this.state.membersName})
    }

    callAddMember = (e) =>{
        if (e.key === 'Enter') {
            this.props.DispatchCallAddMember({_id: this.props.team._id, member: e.target.value})
            e.target.value = "";
        }
    }

    callDelete = (member) => {
        this.props.DispatchCallDeleteMembers({member : member, _id: this.props.team._id})
    }

    changePrivacyValue=(e, {value})=>{
        var v = true;
        if(value=="false"){
            v=false
        }
        this.props.DispatchCallUpdateVisibilityTeam({visibilityTeam:v, _id: this.props.team._id});
        this.setState({
            privacy: value
        });
    }

    componentWillReceiveProps(nextProps) {
            if(nextProps.team){
                if(nextProps.team.visibilityTeam)
                {
                    this.setState({
                        privacy: nextProps.team.visibilityTeam
                    });
                }
        if(this.props != nextProps) {
            }
        }
    }

    changeNameBoard = (name) => {
        this.setState({nameBoard: name.target.value})
    }

    handleAddBoardOnClick = () => {
        this.props.DispatchCallAddBoard({titleBoard: this.state.nameBoard, user: this.props.user.username, team: this.props.team._id})
    }

    render() {
        if(!this.props.team || !this.props.user){
            return <div/>
        }
        else{
            this.state.team = this.props.team;
            return (
                <Grid centered style={style.root}>
                    <Grid.Column mobile={16} tablet={8} computer={6}>
                        <h1 className={defaultStyle.textColor4}>{this.props.team.nameTeam}</h1>
                    </Grid.Column>
                    <Grid.Column mobile={15} tablet={12} computer={12}>
                        <div className={style.teamBox}>
                            <Tab className={style.tabTeam} panes={this.panes} />
                        </div>
                    </Grid.Column>
                </Grid>
            )
        }
    }

    panes = [
        { menuItem: {key: 'boards',  content: 'Boards'}, render: () => <Tab.Pane><CardBoards boards={this.props.boardsTeam} 
                                                                                dispatchFunc={this.props.DispatchCallAddBoard}
                                                                                team={this.props.team._id} 
                                                                                user={this.props.user.username}
                                                                                changeNameBoard={this.changeNameBoard}
                                                                                handleAddBoardOnClick={this.handleAddBoardOnClick}
                                                                                userFavoriteBoard={this.props.user.profile.favoriteBoards}
                                                                                             addable={true}/></Tab.Pane> },
        { menuItem: {key: 'users', content: 'Members'}, render: () => <Tab.Pane>{this.users()}</Tab.Pane>},
        { menuItem: {key: 'setting',  content: 'Settings'}, render: () => <Tab.Pane>{this.settings()}</Tab.Pane> },
    ]

    users = () => {
        if(!this.props.team){
            return <div/>
        }
        else{
            return(
                <div>
                    <Input list='members' placeholder='Choose members to add...' onKeyPress={this.callAddMember} onChange={(nameMember) => this.setState({membersName: nameMember.target.value})}/>
                    <Button onClick={this.addMembersFromButton} >ADD</Button>
                    <ListMember id={this.props.team._id} ownerTeam={this.props.team.ownerTeam} members={this.props.team.members} callDelete={this.callDelete}/>
                </div>
            )
        }
    }

    settings = () => {
        if(!this.props.team){
            return <div/>
        }
            return(<div>
                <h3 className={defaultStyle.textColor1}>Team visibility</h3>
                <Form.Group inline>
                    <label className={defaultStyle.textColor4}>This team is {this.isVisibleTeam(this.props.team.visibilityTeam)} set it </label>
                    <Select
                        onChange={this.changePrivacyValue.bind(this)}
                        options={options}
                        name="privacy"
                        className={style.privacySelect}
                    >
                    </Select>


                </Form.Group>

                <h3  className={defaultStyle.textColor1}>Actions</h3>

                <Button onClick={this.handleDeleteTeam.bind(this)}>Delete the team</Button>
            </div>
            )
        }
    isVisibleTeam = (teamVisibility) => {
        if(teamVisibility==true){
            return "public"
        }
        else{
            return "private"
        }
    }

    handleDeleteTeam(){
        this.props.DispatchCallRemoveTeam({id: this.props.team._id});
        browserHistory.push({pathname: '/'});
    }

};

function mapStateToProps(state, ownProps){
    const boardsTeam= state.boards.filter(el => el.teams!=undefined)
    return{
        team: state.teams.find(el => el._id === ownProps.location.state.team),
        teams: state.teams,
        user: state.user,
        boards: state.boards,
        boardsTeam: boardsTeam
    }
};

const mapDispatchToProps = (dispatch)=> ({
    DispatchCallAddBoard: data=> dispatch(callAddBoard(data)),
    DispatchCallAddMember: data => dispatch(callAddMember(data)),
    DispatchCallRemoveTeam: data => dispatch(callRemoveTeam(data)),
    DispatchCallUpdateVisibilityTeam: data => dispatch(callUpdateVisibilityTeam(data)),
    DispatchCallDeleteMembers: data => dispatch(callDeleteMembers(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Team, style));
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Menu, Segment, Dropdown, Tab,  Card, Image, Grid, Header, Button, Modal, Icon} from 'semantic-ui-react';
import CommentsParametersBoard from '../../components/BoardParameters/CommentsParameters.component';
import InvitationParametersBoard from '../../components/BoardParameters/InvitationParameters.component';
import JoinParametersBoard from '../../components/BoardParameters/JoinBoardParameters.component';
import TeamsParametersBoard from '../../components/BoardParameters/TeamsParameters.component';
import LabelsParameters from './LabelsParameters';
import ArchievedElements from './ArchievedElements';
import HistoryBoard from './HistoryBoard';
import OtherParameters from './OtherParameters';
import defaultStyle from "../../styles/settings.styl";
import style from './boardParameters.styl';
import BackgroundParameters from "./BackgroundParameters";
import BoardMenu from "../Board/BoardMenu";
import {callUpdateCanComment, callUpdateInvitationsOpenedBoard, callUpdateTeamBoard} from '../../objects/Board/BoardAsyncActions';

class BoardParameters extends Component {

    constructor(props) {
        super(props)
        this.state ={}
    }

    panes = [
        { menuItem: 'General', render: () => <Tab.Pane><CommentsParametersBoard _id={this.props.board._id} canComment={this.props.board.canComment} callUpdateCanComment={this.props.DispatchCallUpdateCanComment}/>
                                            <InvitationParametersBoard _id={this.props.board._id} invitationsOpenedBoard={this.props.board.invitationsOpenedBoard} callUpdateInvitationsOpenedBoard={this.props.DispatchCallInvitationsOpenedBoard}/>
                                            <JoinParametersBoard _id={this.props.board._id} />
                                            </Tab.Pane> },
        { menuItem: 'Background', render: () => <Tab.Pane><BackgroundParameters/></Tab.Pane> },
        { menuItem: 'Teams', render: () => <Tab.Pane><TeamsParametersBoard _id={this.props.board._id} teams={this.props.teams} teamsSelected={this.props.board.teams} callUpdateTeam={this.props.DispatchCallUpdateTeamBoard}/></Tab.Pane> },
        { menuItem: 'Labels', render: () => <Tab.Pane><LabelsParameters/></Tab.Pane> },
        { menuItem: 'Archived elements', render: () => <Tab.Pane><ArchievedElements/></Tab.Pane> },
        { menuItem: 'History', render: () => <Tab.Pane><HistoryBoard/></Tab.Pane> },
        { menuItem: 'Others', render: () => <Tab.Pane><OtherParameters/></Tab.Pane> },
    ];

    MenuParams = () => <Tab className={style.tabTeam} panes={this.panes} />

    render(){
        if(!this.props.board || !this.props.teams){
            return <div/>
        }
        console.log(this.props.board)
        return (
            <div className={style.generalBoardRendering}>
                <BoardMenu board={this.props.board}/>
                <Grid centered>
                    <Grid.Column mobile={14} tablet={14} computer={14} className={style.SettingsBoard}>
                        {this.MenuParams()}
                    </Grid.Column>
                </Grid>
            </div>)
    }

};

function mapStateToProps(state, ownProps){
    return{
        board : state.boards.find(el => el._id === ownProps.location.state._id),
        boards: state.boards,
        teams: state.teams,
    }
}

function mapDispatchToProps(dispatch){
    return{
        DispatchCallUpdateCanComment: data => dispatch(callUpdateCanComment(data)),
        DispatchCallInvitationsOpenedBoard: data => dispatch(callUpdateInvitationsOpenedBoard(data)),
        DispatchCallUpdateTeamBoard: data => dispatch(callUpdateTeamBoard(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardParameters);

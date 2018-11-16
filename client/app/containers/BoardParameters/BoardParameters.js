import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Menu, Segment, Dropdown, Tab,  Card, Image, Grid, Header, Button, Modal, Icon} from 'semantic-ui-react';
import CommentsParameters from './CommentsParameters';
import InvitationParameters from './InvitationParameters';
import JoinBoardParameters from './JoinBoardParameters';
import TeamsParameters from './TeamsParameters';
import LabelsParameters from './LabelsParameters';
import ArchievedElements from './ArchievedElements';
import HistoryBoard from './HistoryBoard';
import OtherParameters from './OtherParameters';
import defaultStyle from "../../styles/settings.styl";
import style from './boardParameters.styl';
import BackgroundParameters from "./BackgroundParameters";
import BoardMenu from "../Board/BoardMenu";

class BoardParameters extends Component {

    constructor(props) {
        super(props)
        this.state ={}
    }

    panes = [
        { menuItem: 'General', render: () => <Tab.Pane><CommentsParameters/><InvitationParameters/><JoinBoardParameters/></Tab.Pane> },
        { menuItem: 'Background', render: () => <Tab.Pane><BackgroundParameters/></Tab.Pane> },
        { menuItem: 'Teams', render: () => <Tab.Pane><TeamsParameters/></Tab.Pane> },
        { menuItem: 'Labels', render: () => <Tab.Pane><LabelsParameters/></Tab.Pane> },
        { menuItem: 'Archived elements', render: () => <Tab.Pane><ArchievedElements/></Tab.Pane> },
        { menuItem: 'History', render: () => <Tab.Pane><HistoryBoard/></Tab.Pane> },
        { menuItem: 'Others', render: () => <Tab.Pane><OtherParameters/></Tab.Pane> },
    ];

    MenuParams = () => <Tab className={style.tabTeam} panes={this.panes} />

    render(){
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
    }
}

function mapDispatchToProps(dispatch){
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardParameters);

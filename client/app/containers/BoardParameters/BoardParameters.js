import React from 'react';
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

const BoardParameters = () => {


    const panes = [
        { menuItem: 'General', render: () => <Tab.Pane><CommentsParameters/><InvitationParameters/><JoinBoardParameters/></Tab.Pane> },
        { menuItem: 'Background', render: () => <Tab.Pane><BackgroundParameters/></Tab.Pane> },
        { menuItem: 'Teams', render: () => <Tab.Pane><TeamsParameters/></Tab.Pane> },
        { menuItem: 'Labels', render: () => <Tab.Pane><LabelsParameters/></Tab.Pane> },
        { menuItem: 'Archived elements', render: () => <Tab.Pane><ArchievedElements/></Tab.Pane> },
        { menuItem: 'History', render: () => <Tab.Pane><HistoryBoard/></Tab.Pane> },
        { menuItem: 'Others', render: () => <Tab.Pane><OtherParameters/></Tab.Pane> },
    ];

    const MenuParams = () => <Tab className={style.tabTeam} panes={panes} />

    return (
        <div className={style.generalBoardRendering}>
            <BoardMenu visibilityBoard={'All'} titleBoard={'Title of the board'}/>
            <Grid centered>
                <Grid.Column mobile={14} tablet={14} computer={14} className={style.SettingsBoard}>
                    {MenuParams()}
                </Grid.Column>

            </Grid>
        </div>)

};

export default (BoardParameters);

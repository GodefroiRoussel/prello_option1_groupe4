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

const BoardParameters = () => {


    const panes = [
        { menuItem: 'General', render: () => <Tab.Pane><CommentsParameters/><InvitationParameters/><JoinBoardParameters/></Tab.Pane> },
        { menuItem: 'Background', render: () => <Tab.Pane>background</Tab.Pane> },
        { menuItem: 'Teams', render: () => <Tab.Pane><TeamsParameters/></Tab.Pane> },
        { menuItem: 'Labels', render: () => <Tab.Pane>labels</Tab.Pane> },
        { menuItem: 'Archived elements', render: () => <Tab.Pane><ArchievedElements/></Tab.Pane> },
        { menuItem: 'History', render: () => <Tab.Pane><HistoryBoard/></Tab.Pane> },
        { menuItem: 'Others', render: () => <Tab.Pane><OtherParameters/></Tab.Pane> },
    ];

    const MenuParams = () => <Tab panes={panes} />

    return (<Grid centered>
        <Grid.Column mobile={12} tablet={12} computer={12}>{MenuParams()}
        </Grid.Column>

    </Grid>)

};

export default (BoardParameters);

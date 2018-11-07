import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { Tab, Card, Image, List, Button , Grid} from 'semantic-ui-react';
import ListMember from '../../components/ListMember/ListMember.component';
import CardBoards from '../../components/CardBoards/CardBoards.component';
import { callAddMember, callRemoveTeam } from '../../objects/Team/TeamAsyncActions';
import {callGetAllUser} from '../../objects/User/UserAsyncActions';
import { browserHistory } from 'react-router';
import style from './team.styl';
import defaultStyle from "../../styles/settings.styl";

import classNames from 'classnames'



class Team extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            team: ""
        };
    }

    render() {
        if(!this.props.team){
            return <div/>
        }
        else{
            this.state.team = this.props.team;
            return (
                <Grid centered style={style.root}>
                    <Grid.Column mobile={12} tablet={8} computer={6}>
                        <h1 className={defaultStyle.textColor4}>{this.props.team.nameTeam}</h1>
                    </Grid.Column>
                    <Grid.Column mobile={12} tablet={12} computer={12}>
                        <div className={style.teamBox}>
                            <Tab className={style.tabTeam} panes={this.panes} />
                        </div>
                    </Grid.Column>
                </Grid>
            )
        }
    }

    panes = [
        { menuItem: {key: 'boards',  content: 'Boards'}, render: () => <Tab.Pane><CardBoards boards={this.props.team.idBoards}/></Tab.Pane> },
        { menuItem: {key: 'users', content: 'Members'}, render: () => <Tab.Pane><ListMember id={this.props.team._id} members={this.props.team.members} addMembers={this.props.DispatchCallAddMember}/></Tab.Pane>},
        { menuItem: {key: 'setting',  content: 'Settings'}, render: () => <Tab.Pane>{this.settings}</Tab.Pane> },
    ]

    settings = (
        <div>
            <h3>Team visibility</h3>
            <p><strong>Private</strong> This team is </p>
            <span>
                    visibility of the team is
            </span>
            <h3>Restrictions</h3>
            <h3>Creating board Restrictions</h3>
            <Button onClick={this.handleDeleteTeam.bind(this)}>delete</Button>
        </div>
    )

    handleDeleteTeam(){
        this.props.DispatchCallRemoveTeam({id: this.props.team._id});
        browserHistory.push({pathname: '/'});
    }

};

function mapStateToProps(state, ownProps){
    return{
        team: state.teams.find(el => el._id == ownProps.location.state.team),
        teams: state.teams,
    }
};

const mapDispatchToProps = (dispatch)=> ({
    DispatchCallAddMember: data => dispatch(callAddMember(data)),
    DispatchCallRemoveTeam: data => dispatch(callRemoveTeam(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Team, style));
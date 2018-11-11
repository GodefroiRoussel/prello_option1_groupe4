import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { Tab, Card, Image, List, Button ,Form, Grid, Segment,Select} from 'semantic-ui-react';
import ListMember from '../../components/ListMember/ListMember.component';
import CardBoards from '../../components/CardBoards/CardBoards.component';
import { callAddMember, callRemoveTeam } from '../../objects/Team/TeamAsyncActions';
import {callGetAllUser} from '../../objects/User/UserAsyncActions';
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
            privacy: "false"
        };
    }

    changePrivacyValue=(e, {value})=>{
        this.setState({
            privacy: value
        });
    }

    componentWillReceiveProps(nextProps) {
        if(this.props != nextProps) {
            if(nextProps.team.visibilityTeam)
            {
                this.setState({
                    privacy: nextProps.team.visibilityTeam
                });
            }

        }
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
        { menuItem: {key: 'boards',  content: 'Boards'}, render: () => <Tab.Pane><CardBoards boards={this.props.boards} dispatchFunc={this.props.DispatchCallAddBoard} team={this.props.team._id} user={this.props.user.username}/></Tab.Pane> },
        { menuItem: {key: 'users', content: 'Members'}, render: () => <Tab.Pane><ListMember id={this.props.team._id} ownerTeam={this.props.ownerTeam} members={this.props.team.members} addMembers={this.props.DispatchCallAddMember}/></Tab.Pane>},
        { menuItem: {key: 'setting',  content: 'Settings'}, render: () => <Tab.Pane>{this.settings}</Tab.Pane> },
    ]

    settings = (
        <div>
            <h3 className={defaultStyle.textColor1}>Team visibility</h3>
            <Form.Group inline>
                <label className={defaultStyle.textColor4}>This team is </label>
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

    handleDeleteTeam(){
        this.props.DispatchCallRemoveTeam({id: this.props.team._id});
        browserHistory.push({pathname: '/'});
    }

};

function mapStateToProps(state, ownProps){
    return{
        team: state.teams.find(el => el._id === ownProps.location.state.team),
        teams: state.teams,
        user: state.user,
        boards: state.boards
    }
};

const mapDispatchToProps = (dispatch)=> ({
    DispatchCallAddBoard: data=> dispatch(callAddBoard(data)),
    DispatchCallAddMember: data => dispatch(callAddMember(data)),
    DispatchCallRemoveTeam: data => dispatch(callRemoveTeam(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Team, style));
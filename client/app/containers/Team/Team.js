import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { Tab, Card, Image, List, Button , Header, Input, Loader, Dropdown} from 'semantic-ui-react';
import ListMember from '../../components/ListMember.component';
import CardBoards from '../../components/CardBoards.component';
import { callAddMember, callRemoveTeam } from '../../objects/Team/TeamAsyncActions';
import { setActiveIndex } from '../../objects/Team/TeamActions';
import { browserHistory } from 'react-router';


class Team extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(!this.props.team){
            return <div/>
        }
        else{
            return (
                <div>
                    <h1>{this.props.team.nameTeam}</h1>
                    <div>
                        <Tab panes={this.panes}/>
                    </div>
                </div>
            )
        }
    }

    panes = [
        { menuItem: {key: 'boards', icon: 'table', content: 'Tableaux'}, render: () => <Tab.Pane><CardBoards boards={this.props.team.idBoards}/></Tab.Pane> },
        { menuItem: {key: 'users', icon: 'users', content: 'Membres'}, render: () => <Tab.Pane><ListMember id={this.props.team._id} members={this.props.team.members} addMembers={this.props.DispatchCallAddMember}/></Tab.Pane> },
        { menuItem: {key: 'setting', icon: 'setting', content: 'Paramètres'}, render: () => <Tab.Pane>{this.settings}</Tab.Pane> },
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
        steam: state.teams,
      }
  };

  const mapDispatchToProps = (dispatch)=> ({
      DispatchCallAddMember: data => dispatch(callAddMember(data)),
      DispatchCallRemoveTeam: data => dispatch(callRemoveTeam(data)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Team);
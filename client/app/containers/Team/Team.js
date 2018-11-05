import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { Tab, Card, Image, List, Button , Header, Input, Loader, Dropdown} from 'semantic-ui-react';
import ListMember from '../../components/ListMember';

class Team extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
    }

    render() {
        return (
            <div>
                <h2>Membres de l'équipe ({this.props.location.state.team.members.length})</h2>
                <p>Les membres d'équipes peuvent consulter et rejoindre tous les tableaux visibles par les membres d'une équipe et peuvent créer de nouveaux tableaux au sein de l'équipe.</p>
                <ListMember members = {["Cat", "Julie", "FF"]}/> 
            </div>
        )
    }


    handleSetVisibility = () => {

    }

    /*
    const panes = [
        { menuItem: {key: 'boards', icon: 'table', content: 'Tableaux'}, render: () => <Tab.Pane>{CardExampleGroups()}</Tab.Pane> },
        { menuItem: {key: 'users', icon: 'users', content: 'Membres'}, render: () => <Tab.Pane>{members()}</Tab.Pane> },
        { menuItem: {key: 'setting', icon: 'setting', content: 'Paramètres'}, render: () => <Tab.Pane>{settings()}</Tab.Pane> },
      ]

      const settings = () => (
          <div>
              <h3>Team visibility</h3>
              <p><strong>Private</strong> This team is {valueDropdown}</p>
              <span>
                    visibility of the team is {' '}
                    <Dropdown inline onChange={handleSetVisibility} selection value={valueDropdown} options={friendOptions} defaultValue={friendOptions[0].value} />
                </span>
              <h3>Restrictions</h3>
              <h3>Creating board Restrictions</h3>
          </div>
      )

      const friendOptions = [
           {
             text: 'privé',
             value: false,
           },
           {
             text: 'public',
             value: true,
           }
        ]

      const listMembers = () => (
          
      )

    const CardExampleGroups = () => {
        if(t !== undefined){
            console.log(t.idBoards);
            return(
                <Card.Group>
                    {
                        t.idBoards.map(x => {
                            console.log("helo");
                            return (
                            <Card key={x}>
                                <Card.Content>
                                <Card.Header>{x}</Card.Header>
                                </Card.Content>
                            </Card>)
                        })
                    }
                  <Card>
                    <Card.Content>
                      <Card.Header>Add a board</Card.Header>
                    </Card.Content>
                  </Card>
                </Card.Group>
                );
        }
        else{
            <Loader active inline='centered' />
        }
        
    }

    const team = () => {
        if(t && user){
            if(open){
                console.log(open);
                return (
                    <div>
                        <h1>{t.name}</h1>
                        <Tab panes={panes} />
                        <Button onClick={open=true}>modal</Button>
                        <Modal></Modal>
                    </div>
                )
            }
            else{
                return (
                    <div>
                        <h1>{t.name}</h1>
                        <Tab panes={panes} />
                        <Button onClick={() => {open=true}}>modal</Button>
                    </div>
                )
            }
            
        } 
        else{
            <Loader active inline='centered' />
        }
    };*/
};


  function mapStateToProps(state){
      return{
        user: state.user,
        modal: state.modal,
      }
  };

  const mapDispatchToProps = ()=> ({});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Team);
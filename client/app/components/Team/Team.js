import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { Tab, Card, Image, List, Button , Header, Input, Loader, Dropdown} from 'semantic-ui-react';
import Modal from './ModalTeam/ModalContainer';


const Team = (props) => {
    const {valueDropdown, user, dispatchCallHandleSetVisibility} = props;
    let open =false;
    const t = props.location.state.team

    const handleSetVisibility = () => {
        console.log(valueDropdown)
    }

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
          <div>
            <Input icon={{ name: 'search', circular: true, link: true }} placeholder='Search...' />
        <List animated verticalAlign='middle'>
          <List.Item>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
            <List.Content>
              <List.Header>Helen</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
            <List.Content>
              <List.Header>Christian</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
            <List.Content>
              <List.Header>Daniel</List.Header>
            </List.Content>
          </List.Item>
        </List>
          </div>
      )
    
    const members = () =>{
        return (
            <div>
                <h2>Membres de l'équipe ({t.members.length})</h2>
                <p>Les membres d'équipes peuvent consulter et rejoindre tous les tableaux visibles par les membres d'une équipe et peuvent créer de nouveaux tableaux au sein de l'équipe.</p>
                {listMembers()}
            </div>
        )
    }

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
    };
    return <div>{team()}</div>;
};

Team.propTypes = {
    user: React.PropTypes.object,
    t: React.PropTypes.object,
};

  const mapStateToProps = (state) => ({
    user: state.user,
    modal: state.modal,
  });

  const mapDispatchToProps = ()=> ({});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Team);
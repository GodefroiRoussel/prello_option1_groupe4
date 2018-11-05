import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { Tab, Card, Image, List, Modal, Button , Header, Input} from 'semantic-ui-react';


const Team = (props) => {
    const {user} = props;
    let open =false;
    const t = props.location.state.team

    const panes = [
        { menuItem: {key: 'boards', icon: 'table', content: 'Tableaux'}, render: () => <Tab.Pane><Card.Group items={listBoards()} /></Tab.Pane> },
        { menuItem: {key: 'users', icon: 'users', content: 'Membres'}, render: () => <Tab.Pane>{members()}</Tab.Pane> },
        { menuItem: {key: 'setting', icon: 'setting', content: 'Paramètres'}, render: () => <Tab.Pane>{settings()}</Tab.Pane> },
      ]

      const settings = () => (
          <div>
              <h3>Team visibility</h3>
              <p><strong>Private</strong> This team is private</p>
              <h3>Restrictions</h3>
              <h3>Creating board Restrictions</h3>
          </div>
      )

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
        console.log(user.username);
        return (
            <div>
                <h2>Membres de l'équipe ({t.members.length})</h2>
                <p>Les membres d'équipes peuvent consulter et rejoindre tous les tableaux visibles par les membres d'une équipe et peuvent créer de nouveaux tableaux au sein de l'équipe.</p>
                {listMembers()}
            </div>
        )
    }
    const ModalModalExample = () => {
        return(
        <Modal trigger={<Button>Show Modal</Button>}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        );
    }

    const modalBoard = () => {
        open = !open;
    }

    const close = () => {
        open = false;
    }



    const listBoards = () => {
        let list = [];
        try{
            if(t.idBoards.length > 0){
                t.idBoards.forEach(element => {
                    list.push({href: '#ddd',
                                header: element})
                });
            }
        }
        catch(e){
            console.log(e);
        }
        list.push({
            href:'#card-example-link-card',
            header: 'Create a board',
        });
        return list;
    }

    const team = () => {
        return (
            <div>
                <h1>{t.name}</h1>
                <Tab panes={panes} />
                <div>
                    {ModalModalExample}
                </div>
                
            </div>
        )
    };
    return <div>{team()}</div>;
};

Team.propTypes = {
    user: React.PropTypes.object,
};

  const mapStateToProps = (state) => ({
    user: state.user,
  });

  const mapDispatchToProps = ()=> ({});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Team);
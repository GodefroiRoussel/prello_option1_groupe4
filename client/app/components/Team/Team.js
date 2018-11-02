import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { Tab, Card, Image, List } from 'semantic-ui-react';


const Team = (props) => {

    const t = props.location.state.team

    const panes = [
        { menuItem: {key: 'boards', icon: 'table', content: 'Tableaux'}, render: () => <Tab.Pane><Card.Group items={listBoards} /></Tab.Pane> },
        { menuItem: {key: 'users', icon: 'users', content: 'Membres'}, render: () => <Tab.Pane>{members()}</Tab.Pane> },
        { menuItem: {key: 'setting', icon: 'setting', content: 'Paramètres'}, render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
      ]
      const listMembers = () => (
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

    const listBoards = [
    {
        href:'#card-example-link-card',
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
    },
    {
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%',
    },
    {
        header: 'Project Report - June',
        description:
        'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
        meta: 'ROI: 27%',
    },
    ]

    const team = () => {
        return (
            <div>
                <h1>{t.name}</h1>
                <Tab panes={panes} />
            </div>
        )
    };
    return <div>{team()}</div>;
};

Team.propTypes = {
};

  const mapStateToProps = () => ({
  });

  const mapDispatchToProps = ()=> ({});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Team);
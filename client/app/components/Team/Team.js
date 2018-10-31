import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { Button, Icon, Menu, Segment, Input } from 'semantic-ui-react';

const Team = (props) => {

    const {teams} = props;

    const name = teams.map(x => {
        if(x._id === props.location.state.id){
            return x.name;
        }
    });

    const team = () => {
        return (
           <h1>{name}</h1>
        )
    };
    return <div>{team()}</div>;
};

Team.propTypes = {
    teams: React.PropTypes.array.isRequired,
};

  const mapStateToProps = state => ({
      teams: state.teams,
  });

  const mapDispatchToProps = ()=> ({});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Team);
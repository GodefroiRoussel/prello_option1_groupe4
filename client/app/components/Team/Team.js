import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { Button, Icon, Menu, Segment, Input } from 'semantic-ui-react';
import { setActiveItem } from './TeamActions';

const Team = (props) => {

    const {id, name, activeItem, } = (props);


    const team = () => {
        return (
           <h1>{name}</h1>
        )
    };
    return <div>{team()}</div>;
};



Team.propTypes ={
    id: React.PropTypes.string.isRequired,
    activeItem: React.PropTypes.string.isRequired,
    dispatchSetActiveItem: React.PropTypes.func.isRequired,
};

  const mapStateToProps = () => ({});
  const mapDispatchToProps = ()=> ({});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Team);
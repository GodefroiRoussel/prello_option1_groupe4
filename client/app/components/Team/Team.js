import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { Button, Icon } from 'semantic-ui-react';

const Team = (props) => {

    const {id} = (props);

    const team = () => {
        return (
            <Button/>
        );
    };
    return <div>{team()}</div>;
};

Team.propTypes ={
    id: React.PropTypes.string.isRequired,
};

  const mapStateToProps = () => ({});
  const mapDispatchToProps = () => ({});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Team);
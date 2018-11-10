import React from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import asteroid from '../../common/asteroid';
import { browserHistory } from 'react-router';
import { Button, Input, Card, Grid, Divider } from 'semantic-ui-react';
import { callAddTeam } from '../../objects/Team/TeamAsyncActions';
import { callAddBoard } from '../../objects/Board/BoardAsyncActions';
import CardTeamsComponent from '../../components/CardTeams/CardTeams.component';
import CardOAuthApps from '../../components/CardOAuthApps/CardOAuthApps.component';
import defaultStyle from "../../styles/settings.styl";
import style from './client.styl';

class Client extends React.Component {
    constructor(props) {
        super(props)
        console.log("PROPS")
        console.log(props)
    }

    handleLogout = () => {
        asteroid.logout();
    };

    render() {
        return (<div>
            <Grid centered style={style.root}>
                <Grid.Row className={style.firstRowClient}>
                    <Grid.Column mobile={15} tablet={13} computer={10}>
                        <h2 className={defaultStyle.textColor4}>OAuth Applications</h2>
                        <Divider />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={15} tablet={13} computer={10}>
                        <CardOAuthApps clients={this.props.clients} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <div className={style.loginBox}>
                        <Button fluid animated='fade' onClick={() => browserHistory.push('/oauth/clients/registration')} >
                            <Button.Content hidden>Add application</Button.Content>
                            <Button.Content visible>
                                Add a new application ?
                                </Button.Content>
                        </Button>
                    </div>
                </Grid.Row>
            </Grid>
        </div>)
    }
}

Client.propTypes = {
    clients: PropTypes.array.isRequired,
    user: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    console.log("STATE")
    console.log(state)
    return {
        user: state.user,
        clients: state.clients
    }
};

function mapDispatchToProps(dispatch) {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Client, style));
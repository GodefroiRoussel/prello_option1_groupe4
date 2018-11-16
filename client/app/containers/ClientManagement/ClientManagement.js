import React from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import asteroid from '../../common/asteroid';
import { browserHistory } from 'react-router';
import { Button, Input, Card, Grid, Divider } from 'semantic-ui-react';
import { callRemoveClient } from '../../objects/Client/ClientAsyncActions';
import CardTeamsComponent from '../../components/CardTeams/CardTeams.component';
import CardOAuthApps from '../../components/CardOAuthApps/CardOAuthApps.component';
import defaultStyle from "../../styles/settings.styl";
import style from './clientManagement.styl';

class ClientManagement extends React.Component {
    constructor() {
        super();
        this.state = {
            _id: "",
            nameClient: "",
            descriptionClient: "",
            websiteClient: "",
            redirectUris: [],
            grants: [],
            id: "",
            clientSecret: ""
        }
    }

    componentDidMount() {
        const id = this.props.params.id;
        asteroid.call('getClientById', id)
            .then(client => {
                this.setState({
                    _id: client._id,
                    nameClient: client.nameClient,
                    descriptionClient: client.descriptionClient,
                    websiteClient: client.websiteClient,
                    redirectUris: client.redirectUris,
                    grants: client.grants,
                    id: client.id,
                    clientSecret: client.clientSecret
                })
            });
    }

    componentDidUpdate() {
        const id = this.props.params.id;
        asteroid.call('getClientById', id)
            .then(client => {
                this.setState({
                    _id: client._id,
                    nameClient: client.nameClient,
                    descriptionClient: client.descriptionClient,
                    websiteClient: client.websiteClient,
                    redirectUris: client.redirectUris,
                    grants: client.grants,
                    id: client.id,
                    clientSecret: client.clientSecret
                })
            });
    }

    handleDeleteClient() {
        this.props.DispatchCallRemoveClient({ id: this.state._id });
        browserHistory.push({ pathname: '/oauth/clients' });
    }

    render() {
        return (<div>
            <Grid centered style={style.root}>
                <Grid.Row className={style.firstRowClientManagement}>
                    <Grid.Column mobile={15} tablet={13} computer={10}>
                        <h2 className={defaultStyle.textColor4}>APPLICATION</h2>
                        <Divider />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={15} tablet={13} computer={10}>
                        <h3>Name of the application</h3>
                        <span className={defaultStyle.textColor4}>{this.state.nameClient}</span>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={15} tablet={13} computer={10}>
                        <h3>Description </h3>
                        <span className={defaultStyle.textColor4}>{this.state.descriptionClient}</span>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={15} tablet={13} computer={10}>
                        <h3>Homepage of the application </h3>
                        <span className={defaultStyle.textColor4}>{this.state.websiteClient}</span>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={15} tablet={13} computer={10}>
                        <h3>Redirect URI</h3>
                        <span className={defaultStyle.textColor4}>{this.state.redirectUris[0]}</span>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={15} tablet={13} computer={10}>
                        <h3>Grants</h3>
                        <span className={defaultStyle.textColor4}>{this.state.grants.join(', ')}</span>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={15} tablet={13} computer={10}>
                        <h3>Application ID</h3>
                        <span className={defaultStyle.textColor4}>{this.state.id}</span>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={15} tablet={13} computer={10}>
                        <h3>Application Secret</h3>
                        <span className={defaultStyle.textColor4}>{this.state.clientSecret}</span>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <div className={style.loginBox}>
                        <Button fluid animated='fade' onClick={() => this.handleDeleteClient()} >
                            <Button.Content hidden>Delete application</Button.Content>
                            <Button.Content visible>
                                Delete the application
                            </Button.Content>
                        </Button>
                    </div>
                </Grid.Row>


            </Grid>
        </div>)
    }
}

ClientManagement.propTypes = {
    client: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps')
    console.log(ownProps.params.id)

    console.log('STATE')
    console.log(state)

    return ({
        client: state.clients.find(client => client._id == ownProps.params.id),
    })
}

const mapDispatchToProps = (dispatch) => ({
    DispatchCallRemoveClient: data => dispatch(callRemoveClient(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(ClientManagement, style));
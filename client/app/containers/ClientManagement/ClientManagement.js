import React from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import asteroid from '../../common/asteroid';
import { browserHistory } from 'react-router';
import {Button, Input, Card, Grid, Divider, Form, Icon} from 'semantic-ui-react';
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
                <Grid.Row>
                    <Grid.Column mobile={15} tablet={9} computer={7}>
                        <div className={style.clientManagmentBox}>
                            <h2 className={style.titleManagementBox}>APPLICATION</h2>
                            <Form>
                                <Form.Field>
                                    <label>Name of the application</label>
                                    <input type="text" defaultValue={this.state.nameClient} name="nameClient"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Client description</label>
                                    <input type="text" defaultValue={this.state.descriptionClient} name="descriptionClient"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Homepage of the application</label>
                                    <input type="text" defaultValue={this.state.websiteClient} name="websiteClient"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Redirect URI</label>
                                    <input type="text" defaultValue={this.state.redirectUris[0]} name="redirectURI"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Grants</label>
                                    <input type="text" disabled defaultValue={this.state.grants.join(', ')}
                                           name="nickname"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Application ID</label>
                                    <input type="text" disabled defaultValue={this.state.id}
                                           name="nickname"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Application Secret</label>
                                    <input type="text" disabled defaultValue={this.state.clientSecret}
                                           name="nickname"/>
                                </Form.Field>
                                <Form.Field>
                                    <Button fluid animated='fade'>
                                        <Button.Content hidden>Save parameters</Button.Content>
                                        <Button.Content visible>
                                            <Icon name='arrow right'/>
                                        </Button.Content>
                                    </Button>
                                </Form.Field>
                                <Form.Field>
                                    <Button fluid animated='fade' onClick={() => this.handleDeleteClient()} >
                                        <Button.Content hidden>Delete application</Button.Content>
                                        <Button.Content visible>
                                            Delete
                                        </Button.Content>
                                    </Button>

                                </Form.Field>


                            </Form>
                        </div>
                    </Grid.Column>
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
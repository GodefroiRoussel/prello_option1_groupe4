import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import asteroid from '../../common/asteroid';
import { Link, browserHistory } from 'react-router'

import { Grid, Form, Button, Icon, Dropdown, Image, Select } from 'semantic-ui-react';
import defaultStyle from '../../styles/settings.styl'
import style from '../Registration/registration.styl';

import { callAddClient } from "../../objects/Client/ClientAsyncActions";
import PropTypes from 'prop-types';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]


class ClientRegistration extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nameClient: '',
            websiteClient: '',
            descriptionClient: '',
            redirectUris: '',
            grants: [],
            logoClient: ''
        };
    }

    handleClientRegistration = (e) => {
        e.preventDefault();

        this.props.dispatchCallAddClient({
            nameClient: this.state.nameClient,
            websiteClient: this.state.websiteClient,
            descriptionClient: this.state.descriptionClient,
            redirectUris: this.state.redirectUris,
            grants: ['refresh_token', 'implicit', 'authorization_code'],
            logoClient: ''
        }).catch((error) => {
            Alert.error(error.message);
        });
        browserHistory.push('/oauth/clients');
    };

    updateNameClient = (nameClient) => {
        this.setState({ nameClient: nameClient });
    }

    updateWebsiteClient = (websiteClient) => {
        this.setState({ websiteClient: websiteClient });
    }

    updateDescClient = (descClient) => {
        this.setState({ descriptionClient: descClient });
    }

    updateRedirectUris = (redirectUris) => {
        this.setState({ redirectUris: redirectUris });
    }

    render() {
        return (
            <Grid centered style={style.root}>
                <Grid.Column mobile={12} tablet={6} computer={4}>
                    <div className={style.registrationBox}>
                        <h2 className={style.titleClientRegistrationBox}>Client Registration</h2>
                        <Form onSubmit={this.handleClientRegistration}>
                            <Form.Field >
                                <label>Client Name* </label>
                                <input type="text" onChange={(nameClient) => { this.updateNameClient(nameClient.target.value) }} placeholder="Type your client name" name="nameClient" />
                                <label>Something users will recognize and trust </label>
                            </Form.Field>
                            <Form.Field>
                                <label>Homepage URL*</label>
                                <input type="text" onChange={(websiteClient) => { this.updateWebsiteClient(websiteClient.target.value) }} placeholder="Type your homepage url" name="websiteClient" />
                                <label>The full URL to your application homepage </label>
                            </Form.Field>
                            <Form.Field>
                                <label>Application description</label>
                                <input type="text" onChange={(descClient) => { this.updateDescClient(descClient.target.value) }} placeholder="Type your description" name="descriptionClient" />
                                <label>This is displayed to all users of your application</label>
                            </Form.Field>
                            <Form.Field>
                                <label>Authorization callback URL*</label>
                                <input type="text" onChange={(redirectUris) => { this.updateRedirectUris(redirectUris.target.value) }} placeholder="Type your nickname" name="nickname" />
                                <label>Your application’s callback URL. Read our OAuth documentation for more information.</label>
                            </Form.Field>
                            <Form.Field>
                                <label>LOGO CLIENT TODO LATER</label>
                            </Form.Field>
                            <Form.Field>
                                <label>Grants*</label>
                                <input type="email" placeholder="Type your email again" name="emailVerification" />
                            </Form.Field>
                            <Form.Field>
                                <Button onClick={this.handleClientRegistration} fluid animated='fade'>
                                    <Button.Content hidden>Register Client</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Button>
                            </Form.Field>
                        </Form>
                    </div>
                </Grid.Column>
            </Grid>
        )
    }
};

ClientRegistration.propType = {
    dispatchCallAddClient: PropTypes.func.isRequired
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    dispatchCallAddClient: data => dispatch(callAddClient(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(ClientRegistration, style));
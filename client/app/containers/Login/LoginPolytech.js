import React from 'react';
import cssModules from 'react-css-modules';
import Alert from 'react-s-alert';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router'

import { Grid, Form, Button, Icon, Image } from 'semantic-ui-react';
import defaultStyle from '../../styles/settings.styl';
import PropTypes from 'prop-types';
import style from './login.styl';
import { callLoginPolytech } from "../../objects/Login/LoginAsyncActions";

class LoginPolytech extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }


    handleLogin = (e) => {
        e.preventDefault();
        this.props.dispatchCallLoginPolytech({
            username: this.state.username,
            password: this.state.password
        })
        browserHistory.push('/')
    };

    updateUsername = (username) => {
        this.setState({ username: username });
    }

    updatePassword = (password) => {
        this.setState({ password: password });
    }

    render() {
        return (
            <div>
                <Grid centered style={style.root}>
                    <Grid.Column mobile={12} tablet={6} computer={4}>
                        <div className={style.loginBox}>
                            <h2 className={style.titleLoginBox}>Login Polytech</h2>
                            <Form onSubmit={this.handleLogin}>
                                <Form.Field>
                                    <label>Username</label>
                                    <input onChange={(username) => { this.updateUsername(username.target.value) }} name="username" type="text" placeholder="Type your username" />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password</label>
                                    <input onChange={(password) => { this.updatePassword(password.target.value) }} name="password" type="password" placeholder="Your password" />
                                </Form.Field>
                                <Form.Field>
                                    <Button fluid animated='fade' onClick={() => this.handleLogin}>
                                        <Button.Content hidden>Login Polytech</Button.Content>
                                        <Button.Content visible>
                                            <Icon name='arrow right' />
                                        </Button.Content>
                                    </Button>
                                </Form.Field>
                            </Form>
                        </div>
                        <div className={style.loginBox}>
                            <Button fluid animated='fade' onClick={() => browserHistory.push('/')} >
                                <Button.Content hidden>Normal Login</Button.Content>
                                <Button.Content visible>
                                    Not a Polytech account ?
                                </Button.Content>
                            </Button></div>
                    </Grid.Column>
                </Grid>
            </div >
        )
    }
}

LoginPolytech.propType = {
    dispatchCallLoginPolytech: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    dispatchCallLoginPolytech: data => dispatch(callLoginPolytech(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(LoginPolytech, style));

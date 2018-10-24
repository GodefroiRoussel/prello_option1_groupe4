import React from 'react';
import cssModules from 'react-css-modules';
import Alert from 'react-s-alert';
import asteroid from '../../common/asteroid';
import { Link, browserHistory } from 'react-router'

import {Grid, Form, Button, Icon, Image} from 'semantic-ui-react';
import defaultStyle from '../../styles/settings.styl'
import style from './registration.styl';

import logo from './../../styles/assets/logo.png'

const Registration = () => {
    const handleRegistration = (e) => {
        e.preventDefault();
        asteroid.Registration({
            username: e.target.username.value,
            password: e.target.password.value,
        })
            .catch((error) => {
                Alert.error(error.message);
            });
    };
    const form = () => (
        <Grid centered style={style.root}>
            <Grid.Column mobile={12} tablet={8} computer={6}>
                <Image className={style.logo} src={logo} size='small' />
                <div className={style.registrationBox}>
                    <h2 className={style.titleRegistrationBox}>Registration</h2>
                    <Form onSubmit={handleRegistration}>
                        <Form.Field>
                            <label>First Name</label>
                            <input type="text" placeholder="Type your first name"/>
                        </Form.Field>
                        <Form.Field>
                            <label>Name</label>
                            <input type="text" placeholder="Type your name"/>
                        </Form.Field>
                        <Form.Field>
                            <label>Nickname</label>
                            <input type="text" placeholder="Type your nickname"/>
                        </Form.Field>
                        <Form.Field>
                            <label>email</label>
                            <input type="email" placeholder="Type your email"/>
                        </Form.Field>
                        <Form.Field>
                            <label>email</label>
                            <input type="email" placeholder="Type your email again"/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder="Your password"/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder="Your password confirmation"/>
                        </Form.Field>
                        <Form.Field>
                            <Button fluid animated='fade'>
                                <Button.Content hidden>Register</Button.Content>
                                <Button.Content visible>
                                    <Icon name='arrow right' />
                                </Button.Content>
                            </Button>
                        </Form.Field>
                    </Form>
                </div>

                <div className={style.registrationBox}>
                    <Button fluid animated='fade' onClick={() => browserHistory.push('/login')} >
                        <Button.Content hidden>Login</Button.Content>
                        <Button.Content visible>
                            Already have an account
                        </Button.Content>
                    </Button>
                </div>
            </Grid.Column>
        </Grid>

    );
    return <div>{form()}</div>;
};

export default cssModules(Registration, style);
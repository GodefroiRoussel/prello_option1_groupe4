import React from 'react';
import cssModules from 'react-css-modules';
import Alert from 'react-s-alert';
import asteroid from '../../common/asteroid';
import { Link, browserHistory } from 'react-router'

import {Grid, Form, Button, Icon, Image} from 'semantic-ui-react';
import defaultStyle from '../../styles/settings.styl'
import style from './login.styl';

import logo from './../../styles/assets/logo.png'


const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    asteroid.loginWithPassword({
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
              <div className={style.loginBox}>
                  <h2 className={style.titleLoginBox}>Login</h2>
                  <Form onSubmit={handleLogin}>
                      <Form.Field>
                          <label>Nickname</label>
                          <input name="username" type="text" placeholder="Type your nickname"/>
                      </Form.Field>
                      <Form.Field>
                          <label>Password</label>
                          <input name="password" type="password" placeholder="Your password"/>
                      </Form.Field>
                      <Form.Field>
                          <Button fluid animated='fade'>
                              <Button.Content hidden>Login</Button.Content>
                              <Button.Content visible>
                                  <Icon name='arrow right' />
                              </Button.Content>
                          </Button>
                      </Form.Field>
                  </Form>
              </div>
              <div className={style.loginBox}>
                  <Button fluid animated='fade' onClick={() => browserHistory.push('/registration')} >
                      <Button.Content hidden>Register</Button.Content>
                      <Button.Content visible>
                          Need an account ?
                      </Button.Content>
                  </Button>
              </div>

          </Grid.Column>
      </Grid>

  );
  return <div>{form()}</div>;
};

export default cssModules(Login, style);

import React from 'react';
import cssModules from 'react-css-modules';
import Alert from 'react-s-alert';
import asteroid from '../../common/asteroid';
import style from './login.styl';
import {Grid, Form, Button, Icon} from 'semantic-ui-react';

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
          <Grid.Column mobile={16} tablet={8} computer={4}>
              <Form onSubmit={handleLogin} >
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
                          <Button.Content hidden>Connexion</Button.Content>
                          <Button.Content visible>
                              <Icon name='arrow right' />
                          </Button.Content>
                      </Button>
                  </Form.Field>
              </Form>
          </Grid.Column>
      </Grid>

  );
  return <div>{form()}</div>;
};

export default cssModules(Login, style);

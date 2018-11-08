import React from 'react';
import cssModules from 'react-css-modules';
import Alert from 'react-s-alert';
import asteroid from '../../common/asteroid';
import { Link, browserHistory } from 'react-router'

import {Grid, Form, Button, Icon, Image} from 'semantic-ui-react';
import defaultStyle from '../../styles/settings.styl'
import style from './login.styl';
import store from '../../store';



class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }


    handleLogin = (e) => {
        e.preventDefault();
        asteroid.loginWithPassword({
          username: this.state.username,
          password: this.state.password,
        })
          .catch((error) => {
            Alert.error(error.message);
          });
      };

      updateUsername = (username) => {
          this.setState({username: username});
      }

      updatePassword = (password) => {
        this.setState({password: password});
    }

      render() {
          return (
    <div>
            <Grid centered style={style.root}>
            <Grid.Column mobile={12} tablet={6} computer={4}>
                <div className={style.loginBox}>
                    <h2 className={style.titleLoginBox}>Login</h2>
                    <Form onSubmit={this.handleLogin}>
                        <Form.Field>
                            <label>Nickname</label>
                            <input onChange={(username) => {this.updateUsername(username.target.value)}} name="username" type="text" placeholder="Type your nickname"/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input onChange={(password) => {this.updatePassword(password.target.value)}} name="password" type="password" placeholder="Your password"/>
                        </Form.Field>
                        <Form.Field>
                            <Button fluid animated='fade' onClick={() => browserHistory.push('/')}>
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
      </div>
          )}

    
}

export default cssModules(Login, style);

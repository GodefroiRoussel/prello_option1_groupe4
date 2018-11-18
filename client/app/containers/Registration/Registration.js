import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import asteroid from '../../common/asteroid';
import { Link, browserHistory } from 'react-router'

import {Grid, Form, Button, Icon, Dropdown,Image, Select} from 'semantic-ui-react';
import defaultStyle from '../../styles/settings.styl'
import style from './registration.styl';

import {callAddUser} from "../../objects/User/UserAsyncActions";
import PropTypes from 'prop-types';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]


class Registration extends Component {

    constructor(props) {
        super(props)
        this.state = {
            genderValue: 'NA'
        };
        this.handleGenderChange = this.handleGenderChange.bind(this);
    }


    handleGenderChange(e) {
        this.setState({ genderValue: e.target.value });
    }

    handleRegistration  = (e) =>  {
        e.preventDefault();
        this.props.dispatchCallAddUser({
            gender: this.state.genderValue,
            firstName: e.target.firstName.value,
            name: e.target.name.value,
            nickname: e.target.nickname.value,
            email: e.target.email.value,
            emailVerification: e.target.emailVerification.value,
            password: e.target.password.value,
            passwordConfirmation: e.target.passwordConfirmation.value
        }).catch((error) => {
            Alert.error(error.message);
        });
        browserHistory.push('/login');
    };

    changeGenderSelect(e, {value}){
            this.setState({
                genderValue: value
            });
    }



    render(){
        return(
        <Grid centered style={style.root}>
            <Grid.Column mobile={12} tablet={6} computer={4}>
                <div className={style.registrationBox}>
                    <h2 className={style.titleRegistrationBox}>Registration</h2>
                    <Form onSubmit={this.handleRegistration}>
                        <Form.Field>
                            <label>Gender</label>
                            <Select placeholder="Select gender"
                                    selected={this.state.genderValue}
                                    onChange={this.changeGenderSelect.bind(this)}
                                    options={options}
                                    name="gender"
                            >
                            </Select>
                        </Form.Field>
                        <Form.Field>
                            <label>First Name</label>
                            <input type="text" placeholder="Type your first name" name="firstName"/>
                        </Form.Field>
                        <Form.Field>
                            <label>Name</label>
                            <input type="text" placeholder="Type your name" name={"name"}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Nickname</label>
                            <input type="text" placeholder="Type your nickname" name="nickname"/>
                        </Form.Field>
                        <Form.Field>
                            <label>email</label>
                            <input type="email" placeholder="Type your email" name="email"/>
                        </Form.Field>
                        <Form.Field>
                            <label>email verification</label>
                            <input type="email" placeholder="Type your email again" name="emailVerification"/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder="Your password" name="password"/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" placeholder="Your password confirmation" name="passwordConfirmation"/>
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
        )
    }
};

Registration.propType = {
    dispatchCallAddUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    dispatchCallAddUser: data => dispatch(callAddUser(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(cssModules(Registration, style));
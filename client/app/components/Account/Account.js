import React from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import asteroid from '../../common/asteroid';
import { Link, browserHistory } from 'react-router'
import {User} from '../User/User'

import {Grid, Form, Button, Icon, Image} from 'semantic-ui-react';
import defaultStyle from '../../styles/settings.styl'
import style from './account.styl';

import {callAddUser} from "../User/UserAsyncActions";

import logo from './../../styles/assets/logo.png'
import Login from "../Login/Login";


const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

const Account = (props) => {

    const {dispatchCallUpdateUserProfile, dispatchCallUpdateUserPassword, user} = props;

    const updateProfile = (e) => {
        e.preventDefault();
        dispatchCallUpdateUserProfile({
            gender: e.target.gender.value,
            firstName: e.target.firstName.value,
            name: e.target.name.value,
            email: e.target.email.value,
        }).catch((error) => {
            Alert.error(error.message);
        });
        browserHistory.push('/account');
    };

    const updatePassword = (e) => {
        e.preventDefault();
        dispatchCallUpdateUserPassword({
            id: 123,
            oldPassword: e.target.oldPassword.value,
            newPassword: e.target.newPassword.value
        }).catch((error) => {
            Alert.error(error.message);
        });
        browserHistory.push('/account');
    };


    const form = () => {
        if (user && user.username) {
            return(
            <Grid centered style={style.root}>
                <Grid.Column mobile={12} tablet={12} computer={12}>
                    <h1 className={defaultStyle.textColor4}>Account informations</h1>
                </Grid.Column>
                <Grid.Column mobile={12} tablet={8} computer={6}>
                    <div className={style.AccountBox}>
                        <h2 className={style.titleAccountBox}>Profile</h2>
                        <Form onSubmit={updateProfile}>
                            <Form.Field>
                                <Form.Select fluid label='Gender' options={options} defaultValue={user.profile.genderUser} placeholder='Gender'/>
                            </Form.Field>
                            <Form.Field>
                                <label>First Name</label>
                                <input type="text" defaultValue={user.profile.firstNameUser} name="firstName"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Name</label>
                                <input type="text" defaultValue={user.profile.lastNameUser} name={"name"}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Nickname</label>
                                <input type="text" disabled defaultValue={user.profile.nickNameUser} name="nickname"/>
                            </Form.Field>
                            <Form.Field>
                                <label>email</label>
                                <input type="email" defaultValue={user.profile.mailUser} name="email"/>
                            </Form.Field>
                            <Form.Field>
                                <Button fluid animated='fade'>
                                    <Button.Content hidden>Save profile</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='arrow right'/>
                                    </Button.Content>
                                </Button>
                            </Form.Field>
                        </Form>
                    </div>

                </Grid.Column>

                <Grid.Column mobile={12} tablet={8} computer={6}>
                    <div className={style.AccountBox}>
                        <h2 className={style.titleAccountBox}>Change password</h2>
                        <Form onSubmit={updatePassword}>
                            <Form.Field>
                                <label>Password</label>
                                <input type="password" placeholder="Your current password" name="oldPassword"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input type="password" placeholder="Your new password" name="newPassword"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input type="password" placeholder="Your new password confirmation"
                                       name="newPasswordConfirmation"/>
                            </Form.Field>
                            <Form.Field>
                                <Button fluid animated='fade'>
                                    <Button.Content hidden>Save</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='arrow right'/>
                                    </Button.Content>
                                </Button>
                            </Form.Field>
                        </Form>
                    </div>

                </Grid.Column>
            </Grid>
            );
        }
        return <Login/>;

    };
    return <div>{form()}</div>;
};

Account.propType = {
    dispatchCallUpdateUserProfile: React.PropTypes.func.isRequired,
    dispatchCallUpdateUserPassword: React.PropTypes.func.isRequired,
    user: React.PropTypes.object
};

const mapStateToProps = state => ({
    user: state.user

});

const mapDispatchToProps = dispatch => ({
    dispatchCallUpdateUserProfile: data => dispatch(callUpdateUserProfile(data)),
    dispatchCallUpdateUserPassword: data => dispatch(callUpdateUserPassword(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(cssModules(Account, style));
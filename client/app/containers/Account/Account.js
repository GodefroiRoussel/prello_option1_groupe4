import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import asteroid from '../../common/asteroid';
import { Link, browserHistory } from 'react-router'
import PropTypes from 'prop-types';

import {Grid, Form, Button, Icon, Image, Select} from 'semantic-ui-react';
import defaultStyle from '../../styles/settings.styl'
import style from './account.styl';

import {callEditUserPassword, callEditUserProfile} from "../../objects/User/UserAsyncActions";

import logo from './../../styles/assets/logo.png'
import Login from "../Login/Login";

const options = [
    {key:'m', text: 'Male', value: 'male'},
    {key:'f', text: 'Female', value: 'female'},
]


class Account extends Component {

    constructor(props) {
        super(props)
        this.state = {
            genderValue: "",
            selected: []
        };

    }

    updateProfile (e) {
        e.preventDefault();

        this.props.dispatchCallUpdateUserProfile({
            genderUser: this.state.genderValue,
            firstNameUser: e.target.firstName.value,
            lastNameUser: e.target.name.value,
            mailUser: e.target.email.value,
        }).catch((error) => {
            Alert.error(error.message);
        });
        Alert.success("Profile updated")
    };

    updatePassword (e) {
        e.preventDefault();
        dispatchCallUpdateUserPassword({
            id: 123,
            oldPassword: e.target.oldPassword.value,
            newPassword: e.target.newPassword.value
        }).catch((error) => {
            Alert.error(error.message);
        });
        Alert.success("Password updated")
    };

    changeGenderSelect=(e, {value})=>{
        this.setState({
            genderValue: value
        });
    }


    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
            this.setState({
                genderValue: nextProps.user.profile.genderUser
            });
        }
        this.setState({
            selected: nextProps.user.profile.genderUser
        });

        console.log(nextProps.user.profile.genderUser)
        console.log(this.state.selected)
    }



    render() {

        if (this.props.user && this.props.user.username) {

            return (
                <Grid centered style={style.root}>
                    <Grid.Column mobile={12} tablet={12} computer={12}>
                        <h1 className={defaultStyle.textColor4}>Account informations</h1>
                    </Grid.Column>
                    <Grid.Column mobile={12} tablet={8} computer={6}>
                        <div className={style.AccountBox}>
                            <h2 className={style.titleAccountBox}>Profile</h2>
                            <Form onSubmit={this.updateProfile.bind(this)}>
                                <Form.Field>
                                    <Select
                                            onChange={this.changeGenderSelect.bind(this)}
                                            options={options}
                                            defaultValue={this.state.selected}
                                            name="gender">
                                    </Select>
                                </Form.Field>
                                <Form.Field>
                                    <label>First Name</label>
                                    <input type="text" defaultValue={this.props.user.profile.firstNameUser} name="firstName"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Name</label>
                                    <input type="text" defaultValue={this.props.user.profile.lastNameUser} name={"name"}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Nickname</label>
                                    <input type="text" disabled defaultValue={this.props.user.username}
                                           name="nickname"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>email</label>
                                    <input type="email" defaultValue={this.props.user.profile.mailUser} name="email"/>
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
                            <Form onSubmit={this.updatePassword}>
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
    }
};

Account.propType = {
    dispatchCallUpdateUserProfile: PropTypes.func.isRequired,
    dispatchCallUpdateUserPassword: PropTypes.func.isRequired,
    user: PropTypes.object
};


function mapStateToProps(state,ownProps){
    return{
        user: state.user,
    }

};


const mapDispatchToProps = dispatch => ({
    dispatchCallUpdateUserProfile: data => dispatch(callEditUserProfile(data)),
    dispatchCallUpdateUserPassword: data => dispatch(callEditUserPassword(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(cssModules(Account, style));
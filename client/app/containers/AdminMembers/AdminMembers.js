import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import asteroid from '../../common/asteroid';
import { Link, browserHistory } from 'react-router'
import PropTypes from 'prop-types';

import {Grid, Form, Button, Icon, Image, Select, List} from 'semantic-ui-react';
import defaultStyle from '../../styles/settings.styl'
import style from './adminMembers.styl';

import {callEditUserPassword, callEditUserProfile} from "../../objects/User/UserAsyncActions";

import logo from './../../styles/assets/logo.png';
import Login from './../Login/Login';


class AdminMembers extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        if (this.props.user && this.props.user.username) {
            if(!this.props.users){
                return (
                    <Grid centered style={style.root}>
                        <Grid.Column mobile={12} tablet={12} computer={12}>
                            <h1 className={defaultStyle.textColor4}>Admin Members</h1>
                        </Grid.Column>
                        <Grid.Column mobile={12} tablet={12} computer={12}>
                            <p>No members in the app</p>
                        </Grid.Column>
                    </Grid>
                );
            }
            else {
                return (
                    <Grid centered style={style.root}>
                        <Grid.Column mobile={12} tablet={12} computer={12}>
                            <h1 className={defaultStyle.textColor4}>Admin Members</h1>
                        </Grid.Column>
                        <Grid.Column mobile={12} tablet={12} computer={12}>
                            <List divided verticalAlign='middle'>
                                /**
                                {props.users.map(x=>{return(
                                    <List.Item>
                                        <List.Content floated='right'>
                                            <Button className={defaultStyle.backgroundColorSuccess}>open account</Button>
                                            <Button className={defaultStyle.backgroundColorAlert}>close account</Button>
                                        </List.Content>
                                        <List.Content className={defaultStyle.textColor1}>
                                            {x.profile.firstNameUser} {x.profile.lastNameUser} - {x.username}
                                        </List.Content>
                                    </List.Item>
                                )})}**/


                            </List>
                        </Grid.Column>

                    </Grid>
                );
            }
        }
        return <Login/>;
    }
};

AdminMembers.propType = {
    user: PropTypes.object,
    users: PropTypes.array.isRequired
};


function mapStateToProps(state,ownProps){
    return{
        user: state.user,
        users: state.users
    }

};


const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(cssModules(AdminMembers, style));
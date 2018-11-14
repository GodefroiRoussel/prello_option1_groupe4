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

import { getAllUser } from "../../objects/User/UserActions";


class AdminMembers extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            members:[]
        }
        var members;

    }

    componentDidMount() {
        asteroid.call("getUsers")
            .then(result => {
                this.setState({members:result})
            })
    }


    render() {

        if (this.props.user && this.props.user.username) {

            if (!this.state.members) {
                return <div>No members</div>;
            }


            return (

                    <Grid centered style={style.root}>
                        <Grid.Column mobile={12} tablet={12} computer={12}>
                            <h1 className={defaultStyle.textColor4}>Admin Members</h1>
                        </Grid.Column>
                        {this.state.members.map(x =>
                            <Grid.Column mobile={12} tablet={12} computer={12}>
                                <List divided verticalAlign='middle'>
                                    <List.Item>
                                        <List.Content floated='right'>
                                            <Button className={defaultStyle.backgroundColorSuccess}>open account</Button>
                                            <Button className={defaultStyle.backgroundColorAlert}>close account</Button>
                                        </List.Content>
                                        <List.Content className={defaultStyle.textColor1}>
                                            {x.profile.firstNameUser} {x.profile.lastNameUser} - {x.username}
                                        </List.Content>
                                    </List.Item>

                                </List>
                            </Grid.Column>
                        )}

                    </Grid>


            );
        }
        return <Login/>;
    }
}


AdminMembers.propType = {
    user: PropTypes.object,
};


const mapStateToProps = state => ({
    user: state.user

});


const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(cssModules(AdminMembers, style));
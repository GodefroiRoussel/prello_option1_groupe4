import _ from 'lodash'
import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux';
import asteroid from '../../common/asteroid';
import {resetTeam} from '../../objects/Team/TeamActions';
import PropTypes from 'prop-types';

import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    Button,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'

import logo from '../../styles/assets/logo_polytech.png'
import defaultStyle from '../../styles/settings.styl'
import style from './navbar.styl';
import {browserHistory} from "react-router";
import cssModules from "react-css-modules";


const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '0',
    marginTop: '0',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
    paddingLeft: '1em',
    paddingRight: '1em'
}

const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const dropdowMenu = {
    color: 'white'
}

class Navbar extends Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    state = {
        menuFixed: false,
        overlayFixed: false,
    }

    stickTopMenu = () => this.setState({ menuFixed: true })


    unStickTopMenu = () => this.setState({ menuFixed: false })

    handleLogout = () => {
        asteroid.logout();
        this.props.dispatchCallResetTeam();
        
    };

    render() {
        const { menuFixed} = this.state

        if (this.props.user) {
            return (
                <div>
                    <Visibility onBottomPassed={this.stickTopMenu} onBottomVisible={this.unStickTopMenu} once={false}>
                        <Menu borderless fixed={menuFixed && 'top'} style={menuFixed ? fixedMenuStyle : menuStyle} className={defaultStyle.backgroundColor4}>

                            <Menu.Item>
                                <Image size='mini' src={logo} onClick={() => browserHistory.push('/')}/>
                            </Menu.Item>
                            <Menu.Item header className={defaultStyle.textColor3} onClick={() => browserHistory.push('/')}>Prello</Menu.Item>

                            <Menu.Menu position='right'>

                                <Dropdown style={dropdowMenu} text={this.props.user.username} pointing className='link item'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => browserHistory.push('/account')}>Settings</Dropdown.Item>
                                        <Dropdown.Item>API acces</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={this.handleLogout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Menu>

                        </Menu>
                    </Visibility>
                </div>
            )
        }else{
            return (
                <div>
                    <Visibility onBottomPassed={this.stickTopMenu} onBottomVisible={this.unStickTopMenu} once={false}>
                        <Menu borderless fixed={menuFixed && 'top'} style={menuFixed ? fixedMenuStyle : menuStyle} className={defaultStyle.backgroundColor4}>

                            <Menu.Item>
                                <Image size='mini' src={logo} onClick={() => browserHistory.push('/')}/>
                            </Menu.Item>
                            <Menu.Item header className={defaultStyle.textColor3} onClick={() => browserHistory.push('/')}>Prello</Menu.Item>

                            <Menu.Menu position='right'>
                                <Menu.Item>
                                    <Button className={classNames(defaultStyle.backgroundColor3,defaultStyle.textColor4)} onClick={() => browserHistory.push('/login')}>Log-in</Button>
                                </Menu.Item>

                            </Menu.Menu>

                        </Menu>
                    </Visibility>
                </div>
            )
        }



    }
}

Navbar.propTypes = {
    user: PropTypes.object,
};

const mapStateToProps = state => ({
    user: state.user,
});

function mapDispatchToProps(dispatch){
    return{
        dispatchCallResetTeam: () => dispatch(resetTeam()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Navbar, style));

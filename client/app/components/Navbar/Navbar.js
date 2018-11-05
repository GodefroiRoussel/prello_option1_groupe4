import _ from 'lodash'
import React, { Component } from 'react'
import classNames from 'classnames'

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

import logo from '../../styles/assets/logo.png'
import defaultStyle from '../../styles/settings.styl'
import style from './navbar.styl';

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



const loginButton = {

}


export default class Navbar extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
    }

    stickTopMenu = () => this.setState({ menuFixed: true })


    unStickTopMenu = () => this.setState({ menuFixed: false })

    render() {
        const { menuFixed, overlayFixed, overlayRect } = this.state

        return (
            <div>
                <Visibility onBottomPassed={this.stickTopMenu} onBottomVisible={this.unStickTopMenu} once={false}>
                    <Menu borderless fixed={menuFixed && 'top'} style={menuFixed ? fixedMenuStyle : menuStyle} className={defaultStyle.backgroundColor4}>

                            <Menu.Item>
                                <Image size='mini' src={logo}/>
                            </Menu.Item>
                            <Menu.Item header className={defaultStyle.textColor3}>Prello</Menu.Item>

                            <Menu.Menu position='right'>
                                <Menu.Item>
                                    <Button className={classNames(defaultStyle.backgroundColor3,defaultStyle.textColor4)} style={loginButton}>Log-in</Button>
                                </Menu.Item>
                                <Dropdown style={dropdowMenu} text='jt159' pointing className='link item'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Settings</Dropdown.Item>
                                        <Dropdown.Item>API acces</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Menu>

                    </Menu>
                </Visibility>
            </div>
        )
    }
}

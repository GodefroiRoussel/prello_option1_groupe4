import style from "./boardMenu.styl";
import defaultStyle from "../../styles/settings.styl";
import {Icon, Input,Menu} from "semantic-ui-react";
import React, { Component } from 'react';
import bo from '../../common/dataTest'
//import BoardParameters from '../BoardParameters/BoardParameters'
import { Link, browserHistory } from 'react-router'

export default class BoardMenu extends Component {

    state = {
        board: bo,
        activeItem:'',
        displayParams: false
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    displayParams = (e, {name}) => {
        if (name === 'parameters') {
        }
        this.handleItemClick(e, {name});
    }

    render() {
        const { activeItem } = this.state
        const {displayParams} = this.state

        return(
            <Menu borderless className={style.menuCustom}>
                <Menu.Item>
                    <Icon className={defaultStyle.textColor3}/>
                </Menu.Item>
                <Menu.Item>
                    <Input className='icon' icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item
                    className={style.titleBoard}
                    borderless={'true'}
                    name={this.props.titleBoard}>
                </Menu.Item>

                <Menu.Item
                    className={defaultStyle.textColor3}
                    position='right'
                    name='parameters'
                    onClick={() => browserHistory.push('/test')}
                >
                </Menu.Item>
            </Menu>
        )}
}

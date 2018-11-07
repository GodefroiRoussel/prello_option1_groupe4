import {Menu} from "semantic-ui-react";
//import style from "./Board.styl";
import {Icon} from "semantic-ui-react";
import React, { Component } from 'react';
import bo from '../../common/dataTest'
//import BoardParameters from '../BoardParameters/BoardParameters'

export default class BoardMenu extends Component {

    state = {
        board: bo,
        activeItem:'',
        displayParams: false
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    displayParams = (e, {name}) => {
        if (name === 'parameters') {
            console.log('hey hey');
        }
        this.handleItemClick(e, {name});
    }

    render() {
        const { activeItem } = this.state
        const {displayParams} = this.state

        return(
            <Menu>
                <Menu.Item
                    name={this.props.titleBoard}>
                </Menu.Item>
                <Menu.Item>
                    <Icon name='star outline'/>
                </Menu.Item>

                <Menu.Item
                    name={'visbile for ' + this.props.visibilityBoard}
                    active={activeItem === 'visibility'}
                    onClick={this.handleItemClick}
                >
                </Menu.Item>

                <Menu.Item
                    position='right'
                    name='parameters'
                    onClick={this.displayParams}
                >
                </Menu.Item>
            </Menu>
        )}
}

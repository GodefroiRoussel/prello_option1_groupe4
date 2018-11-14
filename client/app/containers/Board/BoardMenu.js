import style from "./boardMenu.styl";
import defaultStyle from "../../styles/settings.styl";
import {Card, Icon, Input, Menu,Field} from "semantic-ui-react";
import React, { Component } from 'react';
import bo from '../../common/dataTest'
//import BoardParameters from '../BoardParameters/BoardParameters'
import { Link, browserHistory } from 'react-router'
import {Form} from "semantic-ui-react/dist/commonjs/collections/Form/Form";

export default class BoardMenu extends Component {

    state = {
        board: bo,
        activeItem:'',
        displayParams: false,
        editBoardTitle: false,
        boardTitle: this.props.titleBoard
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    displayParams = (e, {name}) => {
        if (name === 'parameters') {
        }
        this.handleItemClick(e, {name});
    }

    toggleEditBoardTitle = () => {
        this.setState({ editListTitle: !this.state.editListTitle })
    }

    editBoardTitle = (e) => {
        if (e.key === 'Enter') {
            /*
            this.setState({titleList: e.target.value}, () =>
                this.props.dispatchCallEditListTitle({titleList: this.state.titleList, _id: this.props.list._id})
            )*/
            this.toggleEditBoardTitle();
        }
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
                {this.titleBoardMode()}


                <Menu.Item
                    className={defaultStyle.textColor3}
                    position='right'
                    name='parameters'
                    onClick={() => browserHistory.push('/test')}
                >
                </Menu.Item>
            </Menu>
        )}

    titleBoardMode = () => {
        if(!this.state.editListTitle){
            return(
                <Menu.Item onClick={this.toggleEditBoardTitle}
                    className={style.titleBoard}
                    borderless={'true'}
                    name={this.props.titleBoard}>
                </Menu.Item>
            );
        }
        else{
            return (
                <Menu.Item>

                    <label>Change board title</label>
                    <Input onKeyPress={this.editBoardTitle} name="titleList" type="text" value={this.boardTitle}/>

                </Menu.Item>

            );
        }
    }
}

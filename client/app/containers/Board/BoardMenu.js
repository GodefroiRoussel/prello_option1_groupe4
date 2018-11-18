import style from "./boardMenu.styl";
import defaultStyle from "../../styles/settings.styl";
import {Card, Icon, Input, Menu, Field, Button} from "semantic-ui-react";
import React, { Component } from 'react';
//import BoardParameters from '../BoardParameters/BoardParameters'
import { Link, browserHistory } from 'react-router'
import {Form} from "semantic-ui-react/dist/commonjs/collections/Form/Form";
import {callEditBoardTitle} from "../../objects/Board/BoardAsyncActions";
import {connect} from "react-redux";

class BoardMenu extends Component {

    constructor(props) {
        super(props)
        this.state ={
            editBoardTitle: false,
        }
    }

    toggleEditBoardTitle = () => {
        this.setState({ editBoardTitle: !this.state.editBoardTitle })
    }

    editBoardTitle = (e) => {
        if (e.key === 'Enter') {
            this.props.dispatchCallEditBoardTitle({titleBoard: e.target.value, _id: this.props.board._id})
            this.toggleEditBoardTitle();
        }
    }

    handleClickWR = () => {
        browserHistory.push({pathname: '/boardWar', state: {id: this.props._id}});
    }

    render() {
        return(
            <Menu borderless className={style.menuCustom}>
                <Menu.Item>
                    <Icon className={defaultStyle.textColor3} name='home' size='big' link={true}
                          onClick={() => browserHistory.push({pathname: '/board', state:{id: this.props.board._id}})}
                    />

                </Menu.Item>
                <Menu.Item>
                    <Input className='icon' icon='search' placeholder='Search...' />
                </Menu.Item>
                {this.titleBoardMode()}
                <Menu.Item
                    className={defaultStyle.textColor3}
                    position='right'
                    name='Weekly Report'
                    onClick={this.handleClickWR}
                >
                </Menu.Item>
                <Menu.Item
                    className={defaultStyle.textColor3}
                    position='right'
                    name='Settings'
                    onClick={() => browserHistory.push({pathname: '/settings', state:{_id: this.props.board._id}})}
                >
                </Menu.Item>
            </Menu>
        )}

    titleBoardMode = () => {
        if(!this.state.editBoardTitle){
            return(
                <Menu.Item onClick={this.toggleEditBoardTitle}
                    className={style.titleBoard}
                    borderless={'true'}
                    name={this.props.board.titleBoard}>
                </Menu.Item>
            );
        }
        else{
            return (
                <Menu.Item>
                    <label>Change board title</label>
                    <Input onKeyPress={this.editBoardTitle} name="titleList" type="text" defaultValue={this.props.board.titleBoard}/>
                </Menu.Item>

            );
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return ({
        board: ownProps.board,
        boards: state.boards,
        //_id: this.props.idBoard //TODO: vu qu a change modif
    })
};

function mapDispatchToProps(dispatch){
    return({
        dispatchCallEditBoardTitle: (data) => dispatch(callEditBoardTitle(data)),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardMenu);
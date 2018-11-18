import style from "./boardMenu.styl";
import defaultStyle from "../../styles/settings.styl";
import {Card, Icon, Input, Menu,Field} from "semantic-ui-react";
import React, { Component } from 'react';
//import BoardParameters from '../BoardParameters/BoardParameters'
import { Link, browserHistory } from 'react-router'
import {Form} from "semantic-ui-react/dist/commonjs/collections/Form/Form";
import {callEditBoardTitle, callUpdateListPositionInBoard} from "../../objects/Board/BoardAsyncActions";
import {connect} from "react-redux";

class BoardMenu extends Component {

    state = {
        //board:
        activeItem:'',
        displayParams: false,
        editBoardTitle: false,
        boardTitle: this.props.titleBoard,
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

            console.log(this.state.titleBoard)
            console.log(this.props)
            /*this.setState({titleBoard: e.target.value}, () =>
                this.props.dispatchCallEditBoardTitle({titleBoard: this.state.titleBoard, _id: this.props.board._id})
            )*/
            this.props.dispatchCallEditBoardTitle({titleBoard: this.props.titleBoard, _id: this.props._id})
            this.toggleEditBoardTitle();
        }
    }

    handleClickWR = () => {
        browserHistory.push({pathname: '/boardWar', state: {id: this.props._id}});
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
                    name='Weekly Report'
                    onClick={this.handleClickWR}
                >
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
                    <Input onKeyPress={this.editBoardTitle} name="titleList" type="text" value={this.props.boardTitle}/>

                </Menu.Item>

            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('props deb ', ownProps)
    return ({
        titleBoard: this.props.titleBoard,
        _id: this.props.idBoard
    })
}

function mapDispatchToProps(dispatch){
    return{
        dispatchCallEditBoardTitle: (data) => dispatch(callEditBoardTitle(data)),
    }
};

export default connect(mapDispatchToProps)(BoardMenu)
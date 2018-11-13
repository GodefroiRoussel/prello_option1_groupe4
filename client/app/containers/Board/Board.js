import React, {Component} from 'react';
import {connect} from 'react-redux'
import bo from '../../common/dataTest';
import PropTypes from 'prop-types';
//import listsTest from '../../common/dataTest';
import { Grid, Input } from 'semantic-ui-react';
//import MenuParameters from '../../components/BoardParameters/MenuParameters';
import BoardComponent from '../../components/Board/Board.component';
import BoardMenu from './BoardMenu';
import {DragDropContext} from 'react-beautiful-dnd';

import {callAddList} from '../../objects/List/ListAsyncActions'
import style from './board.styl'

class Board extends Component {
    constructor(props) {
        super(props)
    }

    handleAddList=(e)=>{
        if (e.key === 'Enter') {
            const elem = e.target;
            e.preventDefault();
            if (elem.value) {
                this.props.dispatchCallAddList(({titleList: elem.value, positionList: 0}), this.props.board);
                elem.value = '';
            }
        }
    }

    render () {
        if(this.props.board){
            return(
                <div className={style.generalBoardRendering}>
                    <BoardMenu visibilityBoard={'All'} titleBoard={this.props.board.titleBoard}/>
                    <Input type='text' action='Add' onKeyPress={this.handleAddList} placeholder='Add a List'></Input>
                    {this.listsIsFilled()}
                </div>
            )
        }
        else{
            return <div/>
        }
    }

    onDragEnd =result => {
        
    }

    listsIsFilled = () => {
        if(this.props.lists){
            return(<DragDropContext
                    onDragEnd={this.onDragEnd}>
                        <BoardComponent lists={this.props.lists}/>
                    </DragDropContext>);
        }
        else{
            return <div/>
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    let listB=[];
    state.lists.find(x => {
        let board = state.boards.find(el => el._id == ownProps.location.state.id);
        if(board){
            if(board.listsId.includes(x._id)){
                listB.push(x);
            };
        }
    })
    return ({
        lists: listB,
        board: state.boards.find(el => el._id == ownProps.location.state.id),
        boards: state.boards
    })
}

function mapDispatchToProps(dispatch){
    return{
        dispatchCallAddList: (data, board) => dispatch(callAddList(data, board)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board)
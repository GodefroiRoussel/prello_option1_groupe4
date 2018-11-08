import React, {Component} from 'react';
import {connect} from 'react-redux'
import bo from '../../common/dataTest';
import PropTypes from 'prop-types';
//import listsTest from '../../common/dataTest';
import { Grid, Input } from 'semantic-ui-react';
//import MenuParameters from '../../components/BoardParameters/MenuParameters';
import BoardComponent from '../../components/Board/Board.component';
import BoardMenu from './BoardMenu';

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
                this.props.dispatchCallAddList({titleList: elem.value, positionList: this.props.lists.length});
                elem.value = '';
            }
        }
    }

    render () {
        return(
            <div className={style.generalBoardRendering}>
                <BoardMenu visibilityBoard={'All'} titleBoard={'hello'}/>
                {this.listsIsFilled()}
                <Input type='text' action='Add' onKeyPress={this.handleAddList} placeholder='Add a List'></Input>
            </div>
        )
    }

    listsIsFilled = () => {
        if(this.props.lists){
            return(<div><BoardComponent lists={this.props.lists}/></div>);
        }
        else{
            return <div/>
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return ({
        lists: state.lists,
        board: state.boards.find(el => el._id == ownProps.location.state.id),
    })
}

function mapDispatchToProps(dispatch){
    return{
        dispatchCallAddList: data => dispatch(callAddList(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board)
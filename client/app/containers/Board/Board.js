import React, {Component} from 'react';
import {connect} from 'react-redux'
import bo from '../../common/dataTest';
import PropTypes from 'prop-types';
//import listsTest from '../../common/dataTest';
import { Grid, Input } from 'semantic-ui-react';
//import MenuParameters from '../../components/BoardParameters/MenuParameters';
import BoardComponent from '../../components/Board/Board.component';
import CardBoards from '../../components/Board/Board.component';
import BoardMenu from '../../components/Board/BoardMenu';
import List from '../../containers/List/List'
import style from './Board.styl'
import AddCardComponent from "../../components/AddCard.component";
import listsTest from '../../common/dataTest'

class Board extends Component {
    constructor(props) {
        super(props)
    }

    handleAddList=(e)=>{
        if (e.key === 'Enter') {
            const elem = e.target;
            e.preventDefault();
            if (elem.value) {
                elem.value = '';
            }
        }
    }

    render () {
        return(
            <div>
                <BoardMenu visibilityBoard={'All'} titleBoard={'hello'}/>
                {this.listsIsFilled()}
                <Input type='text' action='Add' onKeyPress={this.handleAddList} placeholder='Add a List'></Input>
            </div>
        )
    }

    listsIsFilled = () => {
        if(this.props.board.lists){
            return(<div><BoardComponent board={bo}/></div>);
        }
        else{
            return <div/>
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return ({
        lists: listsTest,
        board: state.boards.find(el => el._id == ownProps.location.state.id),
    })
}
export default connect(mapStateToProps)(Board)
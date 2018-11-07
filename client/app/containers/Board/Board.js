import React, {Component} from 'react';
import {connect} from 'react-redux'
import bo from '../../common/dataTest';
//import listsTest from '../../common/dataTest';
import { Grid } from 'semantic-ui-react';
//import MenuParameters from '../../components/BoardParameters/MenuParameters';
import BoardComponent from '../../components/Board/Board.component';
import CardBoards from '../../components/Board/Board.component';
import BoardMenu from '../../components/Board/BoardMenu';
import List from '../../containers/List/List'
import style from './Board.styl'
import AddCardComponent from "../../components/AddCard.component";
import listsTest from '../../common/dataTest'

//const idBoard = this.props.match.params.idBoard
class Board extends Component {
    /*state = {
    }*/
    render () {
        return(
            <div>
                {this.listsIsFilled()}
            </div>
        )
    }

    listsIsFilled = () => {
        if(this.props.lists){
            return(<div><BoardComponent board={bo}/></div>);//give props  lists={listsTest}
        }
        else{
            return <div/>
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    //const boardid = this.props.match.params.idBoard
    return ({
        //titleBoard: 'hey',
        lists: listsTest
        // state.lists,
        //boardId: state.boards[idBoard].id*/
    })
}
export default connect(mapStateToProps)(Board)
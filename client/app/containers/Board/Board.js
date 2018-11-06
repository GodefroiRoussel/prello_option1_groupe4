import React from 'react';
import bo from '../../common/dataTest';
import lists from '../../common/dataTest';
import { Grid } from 'semantic-ui-react';
//import MenuParameters from '../../components/BoardParameters/MenuParameters';
import BoardComponent from '../../components/Board/BoardComponent';
import BoardMenu from '../../components/Board/BoardMenu';
import List from '../../containers/List/List'
import style from './Board.styl'

export default class Board extends React.Component {
    state = {
        board: bo,
        lists : lists
    };

    render() {
        console.log(this.state.board)
        return (
            <div>
                <BoardMenu/>
                <div className={style.list}>
                    <List/>
                </div>

            </div>
        );
    }
}
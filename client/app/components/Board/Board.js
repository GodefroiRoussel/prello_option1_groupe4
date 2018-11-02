import React from 'react';
// import cssModules from 'react-css-modules';
import {Menu, Card, Image, Grid, Item, Button, Icon} from 'semantic-ui-react';
import {connect} from "react-redux";
import defaultStyle from '../../styles/settings.styl'
import style from './Board.styl'
import {callGetBoard} from './BoardAsyncActions';
import List from '../List/List'
import bo from '../../common/dataTest'
//import rootReducer from '../../mainReducer'


const Board = (match, props) => {

    console.log(match.params.idBoard);
    //console.log(callGetBoard(match.params.idBoard));

    const b = bo;

    //state = {}

    const handleItemClick = (e, { name }) => (console.log(name));

    const { activeItem } = '';

    const boardMenu = () => (
        <Menu className={style.Menu} stackable width={16}>
            <Menu.Item
                name={b.titleBoard}>
            </Menu.Item>
            <Menu.Item>
                <Icon name='star outline'/>
            </Menu.Item>

            <Menu.Item
                name={'visbile for ' + b.visibilityBoard}
                active={activeItem === 'visibility'}
                onClick={handleItemClick}
            >
            </Menu.Item>

            <Menu.Item
                position ='right'
                name='parameters'
                onClick={handleItemClick}
            >
                Board parameters
            </Menu.Item>
        </Menu>
    );

    const boardBody = () => (
        <Card.Group>
            {b.lists.map(list =>
                <List key={list} ></List>)}
        </Card.Group>

    );

    const board = () => (
        <Grid>
            <Grid.Row computer={16}>
                {boardMenu()}
            </Grid.Row>
            <Grid.Row  className={style.CardGroup} computer={14}>
                {boardBody()}
            </Grid.Row>
        </Grid>
    );


    return (
    <div>{board()}</div>)
};

Board.propTypes = {
};

const mapStateToProps = state => {
    /*return ({
        list = state.lists
    })*/
}

const mapDispatchToProps = dispatch => ({
    //dispatchCallGetBoard: _id => dispatch(callGetBoard(_id)),
});


export default connect(mapStateToProps)(Board);

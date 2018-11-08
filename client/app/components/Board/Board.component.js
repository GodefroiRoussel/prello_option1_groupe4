import {Menu} from "semantic-ui-react";
import {Icon} from "semantic-ui-react";
import List from "../../containers/List/List";
import {Grid} from "semantic-ui-react";
import {Card} from "semantic-ui-react";
import React from "react";
import BoardMenu from './BoardMenu'
import ListCont from "../../containers/List/List";
import style from '../../containers/Board/board.styl'
import AddList from "../../containers/Board/AddList";


const BoardComponent = (props) => {

    return(
    <Grid>
        <Grid.Row computer={16}>
            <Grid.Column mobile={16} tablet={16} computer={16}>
                <div className={style.littleMargin}>
                    
                </div>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row computer={14}>
            <div className={style.margin}>
            <Card.Group>

                {props.lists.map(list =>
                    <ListCont titleList={list.titleList}/>)}
            </Card.Group>
            </div>
        </Grid.Row>
    </Grid>

)};

export default BoardComponent

/* {props.lists.map(list =>
                    <ListCont key={list.titleList}/>)}*/

/*<ListCont ownProps={props.lists.titleList}/>*/
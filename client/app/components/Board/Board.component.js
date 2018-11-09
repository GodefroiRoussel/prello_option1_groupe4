import {Menu} from "semantic-ui-react";
import {Icon} from "semantic-ui-react";
import List from "../../containers/List/List";
import {Grid} from "semantic-ui-react";
import {Card} from "semantic-ui-react";
import React from "react";
import ListCont from "../../containers/List/List";
import style from './board.component.styl'

const BoardComponent = (props) => {

    return(
    <Grid>
        <Grid.Row>
            <Grid.Column mobile={16} tablet={16} computer={16} >
                <div className={style.margin}>
                    <div className={style.listBox}>

                        {props.lists.map(list =>
                            <ListCont list={list}/>)}
                    </div>
                </div>
            </Grid.Column>
        </Grid.Row>
    </Grid>

)};

export default BoardComponent

/* {props.lists.map(list =>
                    <ListCont key={list.titleList}/>)}*/

/*<ListCont ownProps={props.lists.titleList}/>*/
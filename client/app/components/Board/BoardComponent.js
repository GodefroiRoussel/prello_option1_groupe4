import {Menu} from "semantic-ui-react";
import {Icon} from "semantic-ui-react";
import List from "../../containers/List/List";
import {Grid} from "semantic-ui-react";
import {Card} from "semantic-ui-react";
import React from "react";

const boardMenu = () => (
    <Menu stackable width={16}>
        <Menu.Item
            name='board'>
        </Menu.Item>
        <Menu.Item>
            <Icon name='star outline'/>
        </Menu.Item>
        <Menu.Item
            name='visbile for '
            //active={activeItem === 'visibility'}
            //onClick={handleItemClick}
        >
        </Menu.Item>
        <Menu.Item
            position ='right'
            //name='parameters'
            //onClick={handleItemClick}
        >
            Board parameters
        </Menu.Item>
    </Menu>
);
const boardBody = () => (
    /*<Card.Group>
        {b.lists.map(list =>
            <List key={list} ></List>)}
    </Card.Group>*/
    <div>coucou</div>
);
const BoardComponent= () => (
    <Grid>
        <Grid.Row computer={16}>
            {boardMenu()}
        </Grid.Row>
        <Grid.Row  computer={14}>
            {boardBody()}
        </Grid.Row>
    </Grid>
);

export default BoardComponent()
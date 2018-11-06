import React, {Component} from 'react';
//import ListComponent from '../../components/List.component'
import l from '../../common/dataTest'
import {Card, Button, Grid, Form, Input} from "semantic-ui-react";
import style from './List.styl'


export default class List extends Component {

    state = {
        list: l,
        addCardInput: false
    }

    displayAddCard = (e) => this.setState({addCardInput: !this.state.addCardInput})

    handlecreateCard = (e) => {
        console.log(e.target.cardName.value);
        const elem = e.target;
        e.preventDefault();
        if (elem.cardName.value) {
            //dispatchCallEditBoard(elem.boardname.value);
            elem.cardName.value = '';
        }
    }

    render () {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>
                        <Grid width={16}>
                            <Grid.Row>
                                <Grid.Column width={12}>
                                    {this.state.list.titleList}
                                </Grid.Column>
                                <Grid.Column width={2}>
                                    <Button size={"mini"} position={"right"}>
                                        ...
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Header>
                    <Card.Description>
                        Cards
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <a onClick={this.displayAddCard}>
                            + Add card
                        </a>
                    </div>
                    {(this.state.addCardInput) ?
                        (
                            <Form onSubmit={this.handlecreateCard}>
                                <Form.Field>
                                    <Input name="cardName" type="text" placeholder="card name"/>
                                </Form.Field>
                            </Form>
                        )
                        :
                        null
                    }
                </Card.Content>
            </Card>
        )
    }
}
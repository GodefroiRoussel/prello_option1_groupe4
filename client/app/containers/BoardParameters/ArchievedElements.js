import React, { Component } from 'react'
import {Form, Divider,Card, Pagination} from 'semantic-ui-react'
import List from '../../containers/List/List'

export default class ArchievedElements extends Component {
    state = {
        cards: [ { key: 'c1', value: 'c1', text: 'card1' },  { key: 'c2', value: 'c2', text: 'card2' }],
        lists: [ { key: 'l1', value: 'l1', text: 'list1' },  { key: 'l2', value: 'l2', text: 'list2' }],
    };

    //TODO: create archieved element component that will contain card + list w/ load on board and delete propositions
    render() {
        return (
            <Form>
                <h4>Archieved elements</h4>
                <Card.Group >
                    here will be cards
                    {this.state.cards.map(card =>
                        <div>
                            <h5>{card.text}</h5>
                            <Divider/>
                        </div>
                    )}
                </Card.Group>
                <Card.Group>
                    here will be lists
                    {this.state.lists.map(list =>
                        <List>
                            <h5>{list.text}</h5>
                            <Divider/>
                        </List>
                    )}
                </Card.Group>
            </Form>
        )
    }
}

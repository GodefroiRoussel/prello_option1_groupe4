import React from 'react';
import { connect } from 'react-redux';
import { Tab, Card, Image, List, Button , Header, Input, Loader, Dropdown} from 'semantic-ui-react';

const CardBoards = (props) => {
    return (
    <div>
        <Card.Group>
            {props.boards.map(x => {
                    return (
                    <Card key={x}>
                        <Card.Content>
                        <Card.Header>{x}</Card.Header>
                        </Card.Content>
                    </Card>)
                })
            }
            <Card>
                <Card.Content>
                    <Card.Header>Add a board</Card.Header>
                </Card.Content>
            </Card>
        </Card.Group>
      </div>
      )
}

export default CardBoards;

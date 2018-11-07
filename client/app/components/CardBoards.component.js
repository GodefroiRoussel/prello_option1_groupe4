import React from 'react';
import { connect } from 'react-redux';
import { Tab, Card, Image, List, Button , Header, Input, Loader, Dropdown} from 'semantic-ui-react';

const CardBoards = (props) => {

    console.log(props.boards)

    const boardsIsFilled = (board) =>{
        if(board){
            return (
            <Card key={board.titleBoard}>
                <Card.Content>
                <Card.Header>{board.titleBoard}</Card.Header>
                </Card.Content>
            </Card>)
        }
        else{
            return(<div></div>)
        }
    }

    return (
    <div>
        <Card.Group>
            <Card key="add">
                <Card.Content>
                    <Card.Header>Add a board</Card.Header>
                </Card.Content>
            </Card>
            {boardsIsFilled(props.boards)}
        </Card.Group>
      </div>
      )
}

export default CardBoards;

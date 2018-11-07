import React, {Component} from 'react';
import { connect } from 'react-redux';
import AddListComponent from '../../components/AddList.component'
import {Form, Input, Card} from "semantic-ui-react";

class AddList extends Component {
    state = {
        addListInput: false
    }

    handleCreateList = (e) => {
        console.log(e.target.listName.value);
        const elem = e.target;
        e.preventDefault();
        if (elem.listName.value) {
            //dispatchCallEditBoard(elem.boardname.value);
            elem.listName.value = '';
        }
    }

    displayAddList = (e) => this.setState({addListInput: !this.state.addListInput})

    render () {
        return (
            <Card>
                <Card.Content>
                    <div>
                        <a onClick={this.displayAddList}>
                            + Add card
                        </a>
                    </div>
                    {(this.state.addListInput) ?
                        (
                            <Form onSubmit={this.handleCreateList}>
                                <Form.Field>
                                    <Input name="listName" type="text" placeholder="list name"/>
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
const mapStateToProps = (state, props) => {
    return ({
        board: state.addlists
    })
}

const mapDispatchToProps = dispatch => ({
    //dispatchCallEditBoard: data => dispatch(callEditBoard(data)),
});

export default connect(mapStateToProps)(AddList)

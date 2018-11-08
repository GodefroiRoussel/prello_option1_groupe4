import React, {Component} from 'react';
import { connect } from 'react-redux';
import AddListComponent from '../../components/AddList.component'
import {Form, Input, Card} from "semantic-ui-react";
import {callAddList} from "../../objects/Board/BoardAsyncActions";

class AddList extends Component {
    state = {
        addListInput: false
    }

    handleCreateList = (e) => {
        console.log(e.target.listName.value);
        const elem = e.target;
        e.preventDefault();
        if (elem.listName.value) {
            //this.props.dispatchCallAddList(elem.listName.value);
            callAddList(elem.listName.value);
            elem.listName.value = '';
        }
    }

    displayAddList = (e) => this.setState({addListInput: !this.state.addListInput})

    render () {
        console.log(this)
        return (
            <Card>
                <Card.Content>
                    <div>
                        <a onClick={this.displayAddList}>
                            + Add list
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
AddList.propTypes = {
    dispatchCallAddList: React.PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => {
    return ({
        board: state.addlists
    })
}

const mapDispatchToProps = (dispatch) => ({
    dispatchCallAddList: data => dispatch(callAddList(data)),
});

export default connect(mapDispatchToProps,mapStateToProps)(AddList)

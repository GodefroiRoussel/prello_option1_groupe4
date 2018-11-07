import React, {Component} from 'react';
//import ListComponent from '../../components/List.component'
import {Card, Button, Grid, Form, Input} from "semantic-ui-react";
import AddCardComponent from './AddCard'
import ListComponent from '../../components/List.component'
import style from './List.styl'
import {connect} from "react-redux";

class ListCont extends Component {

    state = {
        addCardInput: false
    }

    displayAddCard = (e) => this.setState({addCardInput: !this.state.addCardInput})



    render () {
        return (
            <Card>
                <ListComponent titleList={this.props.titleList}/>
                <Card.Content extra>
                    <div>
                        <a onClick={this.displayAddCard}>
                            + Add card
                        </a>
                    </div>
                    {(this.state.addCardInput) ?
                        (
                            <AddCardComponent/>
                        )
                        :
                        null
                    }
                </Card.Content>
            </Card>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return({
           // titleList: ownProps.titleList
        }
    )

}

const mapDispatchToProps = dispatch => ({
    //dispatchCallEditBoard: data => dispatch(callEditBoard(data)),
});

export default connect(mapStateToProps)(ListCont)

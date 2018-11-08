import React, {Component} from 'react';
//import ListComponent from '../../components/List.component'
import {Card, Button, Grid, Form, Input, List} from "semantic-ui-react";
import AddCardComponent from './AddCard'
import ListComponent from '../../components/List.component'
import style from './List.styl'
import {connect} from "react-redux";
import {callAddCard} from "../../objects/Card/CardAsyncActions";

class ListC extends Component {
    constructor(props) {
        super(props)
    }

    handleCreateCard = (e) => {
        if (e.key === 'Enter') {
            const elem = e.target;
            e.preventDefault();
            if (elem.value) {
                this.props.dispatchCallAddCard({titleCard: elem.value});
                elem.value = '';
            }
        }
    }

    state = {
        addCardInput: false
    }

    displayAddCard = (e) => this.setState({addCardInput: !this.state.addCardInput})



    render () {
        console.log(this.props);
        return (
            <Card>
                <ListComponent titleList={this.props.titleList}/>
                <div><List>
                {this.isCardFilled}

                </List>
                </div>
                <Card.Content extra>
                    <div>
                        <a onClick={this.displayAddCard}>
                            + Add card
                        </a>
                    </div>
                    {(this.state.addCardInput) ?
                        (
                            <Input type='text' action='Add' onKeyPress={this.handleCreateCard} placeholder='Add a card'></Input>
                        )
                        :
                        null
                    }
                </Card.Content>
            </Card>
        )
    }

    isCardFilled = () =>{
        console.log("hlodddd");
        if(this.props.cards){
            this.props.cards.map(x => {
                return(
                    <List.Item>
                    <Card key={x.titleCard}>
                        <Card.Content>
                            <Card.Header className={style.cardBoardHeader}>{x.titleCard}</Card.Header>
                            <Card.Meta className={style.cardBoardMeta}>other infos</Card.Meta>
                        </Card.Content>
                    </Card>
                    </List.Item>
                )
        })
    }}
}

const mapStateToProps = (state, ownProps) => {
    return({
            lists: state.lists,
            cards: state.cards
        }
    )

}

const mapDispatchToProps = dispatch => ({
    dispatchCallAddCard: data => dispatch(callAddCard(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListC)

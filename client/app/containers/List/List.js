import React, {Component} from 'react';
import {Card, Button, Modal,Grid, Form, Input, List,Icon,Header} from "semantic-ui-react";
import ListComponent from '../../components/List/List.component';
import style from './List.styl';
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
        addCardInput: false,
        modalOpen: false
    }


    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })


    displayAddCard = (e) => this.setState({addCardInput: !this.state.addCardInput})



    render () {
        return (
            <div className={style.cardCustom}>
                <Card >
                    <ListComponent titleList={this.props.titleList}/>
                    <div><List>
                        {this.isCardFilled}

                    </List>
                    </div>
                    <Card.Content extra>
                        <div>
                            <Modal  trigger={<a onClick={this.handleOpen}>+ Add card</a>}
                                    open={this.state.modalOpen}
                                    onClose={this.handleClose}
                                    basic
                                    size='small'>
                                <Header icon='add'>
                                    New card in {this.props.titleList}
                                </Header>
                                <Modal.Content>
                                    <Input type='text' action='Add' onKeyPress={this.handleCreateCard} placeholder='New card title'></Input>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button basic color='red' onClick={this.handleClose} inverted>
                                        <Icon name='remove' /> Cancel
                                    </Button>
                                </Modal.Actions>
                            </Modal>

                        </div>
                    </Card.Content>
                </Card>
            </div>

        )
    }

    isCardFilled = () =>{
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

import React, {Component} from 'react';
import {Card, Button, Modal,Grid, Form, Input, List,Icon,Header} from "semantic-ui-react";
import ListComponent from '../../components/List/List.component';
import style from './List.styl';
import {connect} from "react-redux";
import {callAddCard} from "../../objects/Card/CardAsyncActions";
import BoardComponent from "../../components/Board/Board.component";
import CardModal from "../CardModal/CardModal";

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
        modalOpen: false,
        editListTitle: false
    }


    handleOpen = () => this.setState({ modalOpen: true })



    handleClose = () => this.setState({ modalOpen: false })

    toggleEditListTitle = () => this.setState({ editListTitle: !this.state.editListTitle })


    displayAddCard = (e) => this.setState({addCardInput: !this.state.addCardInput})


    render () {
        return (
            <div className={style.cardCustom}>
                <Card className={style.ListCard}>
                    {this.titleListMode()}


                    <div>
                        <List>
                            <List.Item>
                                <Card key={"test1"} className={style.cardBoard}>
                                    <Card.Content>
                                        <Card.Header className={style.cardBoardHeader}>Title of a card <CardModal/></Card.Header>
                                        <Card.Meta className={style.cardBoardMeta}>other infos</Card.Meta>
                                    </Card.Content>
                                </Card>
                            </List.Item>

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

    titleListMode = () => {
        if(!this.state.editListTitle){
            return(<h4 className={style.TitleList} onClick={this.toggleEditListTitle}>{this.props.titleList}</h4>);
        }
        else{
            return (
                <Form onSubmit={this.toggleEditListTitle}>
                    <Form.Field>
                        <Input action='Save' name="titleList" type="text" value={this.props.titleList}></Input>
                    </Form.Field>
                </Form>
                );
        }
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

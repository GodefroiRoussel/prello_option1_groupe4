import React, {Component} from 'react';
import {Card, Button, Modal,Grid, Form, Input, List,Icon,Header} from "semantic-ui-react";
import ListComponent from '../../components/List/List.component';
import style from './List.styl';
import {connect} from "react-redux";
import {callAddCard} from "../../objects/Card/CardAsyncActions";
import BoardComponent from "../../components/Board/Board.component";
import CardModal from "../CardModal/CardModal";
import {callEditListTitle} from "../../objects/List/ListAsyncActions";
import {Droppable, Draggable} from 'react-beautiful-dnd';

class ListC extends Component {
    constructor(props) {
        super(props)
    }


    handleCreateCard = (e) => {
        if (e.key === 'Enter') {
            const elem = e.target;
            e.preventDefault();
            if (elem.value) {
                this.props.dispatchCallAddCard({titleCard: elem.value, listId: this.props.list._id });
                this.setState(state => ({ modalOpen: !state.modalOpen }))
                elem.value = '';
            }
        }
    }

    state = {
        addCardInput: false,
        modalOpen: false,
        editListTitle: false,
        titleList: this.props.list.titleList,
    }


    handleOpen = () => this.setState({ modalOpen: true })



    handleClose = () => this.setState({ modalOpen: false })

    toggleEditListTitle = () => {
        this.setState({ editListTitle: !this.state.editListTitle })
    }

    editListTitle = (e) => {
        this.setState({titleList: e.target.value}, () =>
            this.props.dispatchCallEditListTitle({titleList: this.state.titleList, _id: this.props.list._id})
        )
    }


    displayAddCard = (e) => this.setState({addCardInput: !this.state.addCardInput})


    render () {
        return (
            <div className={style.cardCustom}>
                <Card className={style.ListCard}>
                    {this.titleListMode()}
                    <div>
                        <Droppable droppableId={this.props.list._id}>
                            {(provided)=>(
                                <div ref={provided.innerRef}
                                {...provided.droppableProps}>
                                    <List >
                                        {this.isCardFilled()}
                                        {provided.placeholder}
                                    </List>
                                </div>
                            )}
                        </Droppable>
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
                                    <Input type='text' action='Add' onKeyPress={this.handleCreateCard} placeholder='New card title'/>
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
            return(<h4 className={style.TitleList} onClick={this.toggleEditListTitle}>{this.props.list.titleList}</h4>);
        }
        else{
            return (
                <Form onSubmit={this.toggleEditListTitle}>
                    <Form.Field>
                        <Input onChange={this.editListTitle} name="titleList" type="text" value={this.state.titleList}/>
                    </Form.Field>
                </Form>
                );
        }
    }

    isCardFilled = () =>{
        if(this.props.cards){
            return this.props.cards.map((x, index) => {
                return(
                    <Draggable draggableId={x._id} index={index}>
                    {(provided) => (
                        <div
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps} 
                        ref={provided.innerRef}>
                        <List.Item>
                        <Card key={x._id} className={style.cardBoard}>
                            <Card.Content>
                                <Card.Header className={style.cardBoardHeader}>{x.titleCard} <CardModal/></Card.Header>
                                <Card.Meta className={style.cardBoardMeta}>other infos</Card.Meta>
                            </Card.Content>
                        </Card>
                    </List.Item>
                    </div>
                    )}
                    </Draggable>
                )
        })
    }}
}

ListC.defaultProps = {
    cards: []
}

const mapStateToProps = (state, ownProps) => {
    var cardB = state.cards.filter(el => el.listId === ownProps.list._id)
    var result = []
    if(cardB){
        ownProps.list.cards.forEach((card)=> {
            cardB.forEach((element) => {
                if(element._id == card){
                    result.push(element);
                }
            })
        })
    }

    return({
            lists: state.lists,
            cards: result,

        }
    )

}

const mapDispatchToProps = dispatch => ({
    dispatchCallAddCard: data => dispatch(callAddCard(data)),
    dispatchCallEditListTitle: data => dispatch(callEditListTitle(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListC)

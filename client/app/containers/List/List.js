import React, {Component} from 'react';
import {Card, Button, Modal, Form, Input, List ,Header, Icon} from "semantic-ui-react";
import style from './List.styl';
import {connect} from "react-redux";
import {callAddCard} from "../../objects/Card/CardAsyncActions";
import CardModal from "../CardModal/CardModal";
import {callEditListTitle} from "../../objects/List/ListAsyncActions";
import {Droppable, Draggable} from 'react-beautiful-dnd';
import defaultStyle from "../../styles/settings.styl";

class ListC extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameCard: "",
        }
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
        else if(e.type=="submit"){
            this.props.dispatchCallAddCard({titleCard: this.state.nameCard, listId: this.props.list._id });
            this.setState(state => ({ modalOpen: !state.modalOpen }))
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
            <Draggable draggableId={this.props.list._id} index={this.props.index}>
            {(provided) => (
            <div 
            {...provided.draggableProps}
            {...provided.dragHandleProps} 
            ref={provided.innerRef}
            className={style.cardCustom}>
                <Card className={style.ListCard}>
                    <Card.Content>
                        <Card.Header>
                            {this.titleListMode()}

                        </Card.Header>
                    </Card.Content>



                    <div>
                        <Droppable droppableId={this.props.list._id} type="task">
                            {(provided, snapshot)=>(
                                <div ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}>
                                    <List className={style.listofCard}>
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
                                    <Form onSubmit={this.handleCreateCard}>
                                        <Form.Field className={style.inputForm}>
                                            <Input type='text' autoFocus visible onKeyPress={this.handleCreateCard} onChange={(name)=> this.setState({nameCard: name.target.value})} placeholder='New card title'></Input>
                                            <Button type="submit">Add</Button>
                                        </Form.Field>
                                    </Form>
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
            )}
            </Draggable>
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
                if(x.isDeletedCard === false && x.isArchivedCard === false) {
                return(
                    <Draggable draggableId={x._id} index={index}>
                    {(provided, snapshot) => (
                        <div
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps} 
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}>
                        <List.Item>
                        <Card key={x._id} className={style.cardBoard}>
                            <Card.Content>
                                <Card.Header className={style.cardBoardHeader}><Icon name="dollar sign" className={defaultStyle.textColor5} />
                                {x.titleCard} 
                                <CardModal card={x} board={this.props.board}/></Card.Header>
                                <Card.Meta className={style.cardBoardMeta}>other infos</Card.Meta>
                            </Card.Content>
                        </Card>
                    </List.Item>
                    </div>
                    )}
                    </Draggable>
                )
        }})
    }}
}

ListC.defaultProps = {
    cards: []
}

const mapStateToProps = (state, ownProps) => {
    var cardB = state.cards
    var result = []
    if(cardB){
        ownProps.list.cards.forEach((card)=> {
            cardB.forEach((element) => {
                if(element._id === card){
                    result.push(element);
                }
            })
        })
    }

    return({
            lists: state.lists,
            //cards: state.cards.filter(el => el.listId === ownProps.list._id && el.isDeletedCard === false && el.isArchivedCard === false)
            cards: result,
        }
    )

}

const mapDispatchToProps = dispatch => ({
    dispatchCallAddCard: data => dispatch(callAddCard(data)),
    dispatchCallEditListTitle: data => dispatch(callEditListTitle(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListC)

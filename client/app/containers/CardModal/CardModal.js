import React from 'react';
import { connect } from 'react-redux';
import {
    Tab,
    Card,
    Image,
    List,
    Button,
    Form,
    TextArea,
    Grid,
    Segment,
    Progress,
    Modal,
    Header,
    Divider,
    Icon, Input,
    Dropdown
} from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import style from './cardModal.styl';
import defaultStyle from "../../styles/settings.styl";
import classNames from 'classnames';
import CardModalMembers from "./CardModalMembers"
import CardModalDeadlines from "./CardModalDeadlines";
import {
    callAddCommentCard,
    callAddLabelCard, callArchiveCard, callDeleteCard, callDeleteLabelCard,
    callUpdateCardBillable,
    callUpdateCardDescription,
    callUpdateCardTitle
} from "../../objects/Card/CardAsyncActions";
import Todo from "../Todo/Todo.js";
import { callAddTodo } from "../../objects/Todo/TodoAsyncActions";


import ProfileAnonymous from '../../styles/assets/hanonyme.png';
import {callAddComment} from "../../objects/Comment/CommentAsyncAction";

class CardModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
            editTitle: false,
            editDescription: false,
            idCard: this.props.card._id,
            titleCard: this.props.card.titleCard,
            descriptionCard: this.props.card.descriptionCard,
            billableCard: this.props.card.billable,
        };
    }

    toggleModal = () => this.setState({ openModal: !this.state.openModal });

    toggleEditCardTitle = () => this.setState({ editTitle: !this.state.editTitle })

    toggleEditDescription = () => this.setState({editDescription: !this.state.editDescription})

    editCardTitle = (e) => {
        this.setState({titleCard: e.target.value}, () =>
            this.props.dispatchCallEditCardTitle({titleCard: this.state.titleCard, _id: this.props.card._id})
        )
    }

    editDescriptionCard = (e) => {
        this.setState({descriptionCard: e.target.value}, () =>
            this.props.dispatchCallEditCardDescription({descriptionCard: this.state.descriptionCard, _id: this.props.card._id})
        )
    }

    editBillableCard = (e, value) => {
        var billable = false
        if(value.value === 'true') {
            billable = true
        }
        this.setState({billableCard: billable}, () =>
            this.props.dispatchCallEditCardBillable({billable: this.state.billableCard, _id: this.props.card._id})
        )
    }

    // /!\ e.target.value = id du label à add ou delete
    addLabelCard = (e) => {
        if(e.target.value) {
            this.props.dispatchCallAddLabelCard({idLabel: e.target.value, idCard: this.props.card._id})
        }
    }

    deleteLabelCard = (e) => {
        this.props.dispatchCallDeleteLabelCard({idLabel: e, idCard: this.state.idCard})
    }

    deleteCard = (e) => {
        if(this.props) {
            this.props.dispatchCallDeleteCard({idCard: this.props.card._id})
        }
    }

    archiveCard = (e) => {
        this.props.dispatchCallArchiveCard(this.props.card._id)
    }

    addCommentCard = () => {
        //this.props.dispatchCallEditComment(data) //to precise
    }

    deleteCommentCard = () => {
        //this.props.dispatchCallDeleteComment(data) //to precise
    }

    renderLabel = label => {
        return({
        style: {backgroundColor: `rgb(${label.key}`},
        content: `${label.text}`,
        })
    }

    toggleMultiple = (e, {value}) => {
        this.props.dispatchCallAddLabelCard({idCard: this.props.card._id, idLabel:value})
    }

    handleAddTodo = (e) => {
        if (e.key === 'Enter') {
          const elem = e.target;
          e.preventDefault();
          if (elem.value) {
            this.props.dispatchCallAddTodo({message: elem.value, idCard:this.props.card._id});
            elem.value = '';
          }
        }
      };

    render() {
        const { openModal } = this.state;

        return (

            <Modal
                trigger={
                    <a onClick={this.toggleModal}>
                        <Icon name='edit' size='large' />
                    </a>
                }
                className={style.modalCustom}
                centered={false}
                open={openModal}
                closeIcon
                onClose={this.toggleModal}>
                <Modal.Header className={defaultStyle.textColor1}>
                    {this.titleCardMode()}
                </Modal.Header>
                <Modal.Content className={style.modalContentCutomize}>
                    <Modal.Description>
                        <Grid centered style={style.root} columns={16}>
                            <Grid.Column mobile={16} tablet={10} computer={12}>
                                <Grid centered style={style.root}>
                                    <Grid.Row className={style.rowCard}>
                                        <Grid.Column mobile={15} tablet={15} computer={14}>
                                            <h3 className={defaultStyle.textColor4}>Sticks</h3>
                                            <Card.Group itemsPerRow={6}>
                                                <div className={style.buttonAddStickers}>
                                                {this.props.defaultValueLabel.map(x => {
                                                    return(
                                                    <Card raised>
                                                        <Segment style={{backgroundColor: `rgb(${x.colorLabel}`}}>
                                                            {x.titleLabel}
                                                            <Button icon="delete" onClick={() => this.deleteLabelCard(x._id)}>
                                                            </Button>
                                                        </Segment>
                                                    </Card>)
                                                })}
                                                <Dropdown
                                                    fluid
                                                    options={this.props.options}
                                                    placeholder='Choose an option'
                                                    renderLabel={this.renderLabel}
                                                    onChange={this.toggleMultiple}
                                                />
                                                </div>
                                            </Card.Group>
                                            <Divider />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row className={style.rowCard}>
                                        <Grid.Column mobile={15} tablet={15} computer={14}>
                                            <h3 className={defaultStyle.textColor4}>Description</h3>

                                            <Form onSubmit={this.toggleEditDescription}>
                                                <Form.Field>
                                                <TextArea onChange={this.editDescriptionCard} name="descriptionCard" type="text" value={this.state.descriptionCard}/>
                                            </Form.Field>
                                            </Form>
                                            <Divider />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row className={style.rowCard}>
                                        <Grid.Column mobile={15} tablet={15} computer={14}>
                                            <h3 className={defaultStyle.textColor4}>Files</h3>
                                            <List>
                                                <List.Item>
                                                    <List.Icon className={defaultStyle.textColor5} name='download' />
                                                    <List.Content className={defaultStyle.textColor1}>Meeting-report-18102018.pdf</List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon className={defaultStyle.textColor5} name='download' />
                                                    <List.Content className={defaultStyle.textColor1}>Meeting-report-25102018.pdf</List.Content>
                                                </List.Item>
                                            </List>
                                            <Divider />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row className={style.rowCard}>
                                        <Grid.Column mobile={15} tablet={15} computer={14}>
                                            <h3 className={defaultStyle.textColor4}>Checklist</h3>
                                            <Progress color='green' value={this.props.todosFinished.length} total={this.props.todos.length} progress='ratio' />
                                            <div>
                                                <input
                                                type="text"
                                                styleName="add-todo-input"
                                                placeholder="Add todo item ..."
                                                onKeyPress={this.handleAddTodo}
                                                />
                                            </div>
                                            <div>
                                                {this.props.todos.map((t, i) =>
                                                <Todo id={t._id} message={t.message} finished={t.finished} key={i}/>)}
                                            </div>
                                            <Divider />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row className={style.rowCard}>
                                        <Grid.Column mobile={15} tablet={15} computer={14}>
                                            <h3 className={defaultStyle.textColor4}>Comments</h3>
                                            <List relaxed='very'>
                                                <List.Item>
                                                    <List.Content>
                                                        <List.Header as='a'>
                                                            <h5  className={defaultStyle.textColor1}>
                                                                Maurice Dupont <span className={defaultStyle.textColor2}>the 5th of november at 11:34 am</span>
                                                            </h5>
                                                        </List.Header>
                                                        <List.Description className={defaultStyle.textColorDark}>
                                                            A comment written by maurice dupont about his work on this card and some possible troubles.
                                                        </List.Description>
                                                    </List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Content>
                                                        <List.Header as='a' className={defaultStyle.textColor1}>
                                                            <h5  className={defaultStyle.textColor1}>
                                                                Stevie Feliciano <span className={defaultStyle.textColor2}>the 5th of november at 11:34 am</span>
                                                            </h5>
                                                        </List.Header>
                                                        <List.Description className={defaultStyle.textColorDark}>
                                                           Postum felicita evertaum guter. A comment written for maurice dupont about his work on this card and some possible troubles.
                                                        </List.Description>
                                                    </List.Content>
                                                </List.Item>
                                            </List>
                                            <label className={defaultStyle.textColor1}>Add a comment</label>
                                            <Form>
                                                <TextArea placeholder='Write a comment'/>
                                            </Form>

                                            <Divider />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row className={style.rowCard}>
                                        <Grid.Column mobile={15} tablet={15} computer={14}>
                                            <h3 className={defaultStyle.textColor4}>Activity</h3>
                                            <List relaxed='very'>
                                                <List.Item>
                                                    <Image avatar src={ProfileAnonymous} />
                                                    <List.Content>
                                                        <List.Header as='a'>Daniel Louise </List.Header>
                                                        <List.Description>
                                                            Last seen watching{' '}
                                                            <a>
                                                                <b>Arrested Development</b>
                                                            </a>{' '}
                                                            just now.
                                                        </List.Description>
                                                    </List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <Image avatar src={ProfileAnonymous} />
                                                    <List.Content>
                                                        <List.Header as='a'>Stevie Feliciano</List.Header>
                                                        <List.Description>
                                                            Last seen watching{' '}
                                                            <a>
                                                                <b>Bob's Burgers</b>
                                                            </a>{' '}
                                                            10 hours ago.
                                                        </List.Description>
                                                    </List.Content>
                                                </List.Item>
                                            </List>


                                            <Divider />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>

                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={6} computer={4}>
                                <h3 className={defaultStyle.textColor4}>Settings</h3>
                                <Form>
                                    <Form.Group inline>
                                        <label>Billable</label>
                                        <Form.Radio
                                            label='Yes'
                                            name='billable'
                                            value='true'
                                            checked={this.state.billableCard === true}
                                            onChange={this.editBillableCard}
                                        />
                                        <Form.Radio
                                            label='No'
                                            name='billable'
                                            value='false'
                                            checked={this.state.billableCard === false}
                                            onChange={this.editBillableCard}
                                        />
                                    </Form.Group>
                                </Form>
                                <List>
                                    <List.Item>
                                        <CardModalMembers idCard={this.props.card._id} idBoard={this.props.board}/>
                                    </List.Item>
                                    <List.Item>
                                        <CardModalDeadlines card={this.props.card}/>
                                    </List.Item>
                                    <List.Item>
                                        <Button fluid animated='fade' className={style.settingsButtons} >
                                            <Button.Content hidden>to another list or board</Button.Content>
                                            <Button.Content visible>
                                                Copy
                                            </Button.Content>
                                        </Button>
                                    </List.Item>
                                    <List.Item>
                                        <Button fluid animated='fade' >
                                            <Button.Content hidden>to another list or board</Button.Content>
                                            <Button.Content visible>
                                                move
                                            </Button.Content>
                                        </Button>
                                    </List.Item>
                                    <List.Item>
                                        <Button onClick={this.deleteCard}fluid animated='fade' basic color='red'>
                                            <Button.Content hidden>all the card</Button.Content>
                                            <Button.Content visible>
                                                delete
                                            </Button.Content>
                                        </Button>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid>
                    </Modal.Description>
                </Modal.Content>
            </Modal>

        );
    }

    titleCardMode = () => {
        if(!this.state.editTitle){
            return(
                <h4 onClick={this.toggleEditCardTitle}>
                    {this.props.card.titleCard} - <span className={defaultStyle.textColor2}> General List</span>
                </h4>
            );
        }
        else{
            return (
                <Form onSubmit={this.toggleEditCardTitle}>
                    <Form.Field className={style.inputEditTitle}>
                        <Input onChange={this.editCardTitle} name="titleCard" type="text" value={this.state.titleCard}/>
                    </Form.Field>
                </Form>
            );
        }
    }
}
CardModal.defaultProps = {
};

function mapStateToProps(state, ownProps){
    const c = state.cards.find(el => el._id === ownProps.card._id)
    var option = []
    const b = state.boards.find(el => el._id === ownProps.board);
    const listLabel = state.cards.find(el => el._id === ownProps.card._id).labels
    var listDefaultValue = []
    if(b && listLabel){
        const labels = state.labels.filter(el => b.labels.includes(el._id))
        if(labels){
            labels.map(x=> {option.push({key: x._id, text: x.titleLabel, value: x._id,
                    content: <Header content={x.titleLabel} style={{backgroundColor: `rgb(${x.colorLabel}`}}/>})
                    if(listLabel.includes(x._id)){
                        listDefaultValue.push(x)
                    }
                }
            )
        }
    }
    const allTodos = state.todos.filter(el => c.checkList.includes(el._id))
    var todosFinished = []
    if(allTodos){
        todosFinished = allTodos.filter(x => x.finished==true)
    }
    
    return{
        card: state.cards.find(el => el._id === ownProps.card._id),
        options: option,
        defaultValueLabel : listDefaultValue,
        todos: state.todos.filter(el => c.checkList.includes(el._id)),
        c: state.cards,
        t: state.todos,
        todosFinished:todosFinished,
    }
};

const mapDispatchToProps = dispatch => ({
    dispatchCallEditCardTitle: data => dispatch(callUpdateCardTitle(data)),
    dispatchCallEditCardDescription: data => dispatch(callUpdateCardDescription(data)),
    dispatchCallEditCardBillable: data => dispatch(callUpdateCardBillable(data)),
    dispatchCallAddLabelCard: data => dispatch(callAddLabelCard(data)),
    dispatchCallDeleteLabelCard: data => dispatch(callDeleteLabelCard(data)),
    dispatchCallDeleteCard: data => dispatch(callDeleteCard(data)),
    dispatchCallArchiveCard: data => dispatch(callArchiveCard(data)),
    dispatchCallEditComment: data => dispatch(callAddCommentCard(data)),
    dispatchCallDeleteComment: data => dispatch(callAddCommentCard(data)),
    dispatchCallAddTodo: data => dispatch(callAddTodo(data)),
});

//export default connect(mapStateToProps, mapDispatchToProps)(cssModules(CardModal, style));

export default connect(mapStateToProps, mapDispatchToProps)(CardModal)

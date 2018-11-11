import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
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
    Select,
    Modal,
    Header,
    Divider,
    Icon, Input
} from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import style from './cardModal.styl';
import defaultStyle from "../../styles/settings.styl";
import classNames from 'classnames';
import CardModalMembers from "./CardModalMembers"
import {
    callUpdateCardBillable,
    callUpdateCardDescription,
    callUpdateCardTitle
} from "../../objects/Card/CardAsyncActions";

class CardModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
            editTitle: false,
            card:{
                titleCard: "The title of this card",
                descriptionCard: "A possible description of the task and the goals of this Card. Instruction can be placed here !",
                deadlineCard:"18/11/2018",
                positionCard:0,
                billableCard:false
            }
        };
    }

    toggleModal = () => this.setState(state => ({ openModal: !state.openModal }));

    toggleEditCardTitle = () => this.setState({ editTitle: !this.state.editTitle })

    editCardTitle = (e) => {
        this.setState({titleCard: e.target.value}, () =>
            this.props.dispatchCallEditCardTitle({titleCard: this.state.card.titleCard, _id: this.state.card._id})
        )
    }

    editDescriptionCard = (e) => {
        this.setState({descriptionCard: e.target.value}, () =>
            this.props.dispatchCallEditCardDescription({descriptionCard: this.state.card.descriptionCard, _id: this.state.card._id})
        )
    }

    editBillableCard = (e) => {
        this.setState({billableCard: e.target.value}, () =>
            this.props.dispatchCallEditCardBillable({billable: this.state.card.billableCard, _id: this.state.card._id})
        )
    }

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
                                                <Card raised>
                                                    <Segment inverted color='red'>
                                                        label 1
                                                    </Segment>
                                                </Card>
                                                <Card raised>
                                                    <Segment inverted color='green'>
                                                        label 2
                                                    </Segment>
                                                </Card>

                                                <div className={style.buttonAddStickers}>
                                                    <Button  icon>
                                                        <Icon name='add' />
                                                    </Button>
                                                </div>


                                            </Card.Group>
                                            <Divider />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row className={style.rowCard}>
                                        <Grid.Column mobile={15} tablet={15} computer={14}>
                                            <h3 className={defaultStyle.textColor4}>Description</h3>

                                            <Form>
                                                <TextArea onChange={this.editDescriptionCard} placeholder='Write the card description' value={this.state.card.descriptionCard}/>
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

                                            <Divider />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row className={style.rowCard}>
                                        <Grid.Column mobile={15} tablet={15} computer={14}>
                                            <h3 className={defaultStyle.textColor4}>Comments</h3>
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
                                                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                                                    <List.Content>
                                                        <List.Header as='a'>Daniel Louise</List.Header>
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
                                                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
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
                                            checked={true}
                                        />
                                        <Form.Radio label='No'
                                            checked={false}
                                        />
                                    </Form.Group>
                                </Form>
                                <List>
                                    <List.Item>
                                        <CardModalMembers/>
                                    </List.Item>
                                    <List.Item>
                                        <Button fluid animated='fade' className={style.settingsButtons} >
                                            <Button.Content hidden>End Date</Button.Content>
                                            <Button.Content visible>
                                                Deadline
                                            </Button.Content>
                                        </Button>
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
                                        <Button fluid animated='fade' basic color='red'>
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
                    {this.state.card.titleCard} - <span className={defaultStyle.textColor2}> General List</span>
                </h4>
            );
        }
        else{
            return (
                <Form onSubmit={this.toggleEditCardTitle}>
                    <Form.Field className={style.inputEditTitle}>
                        <Input onChange={this.editCardTitle} name="titleCard" type="text" value={this.state.card.titleCard}/>
                    </Form.Field>
                </Form>
            );
        }
    }
}
CardModal.defaultProps = {
};

function mapStateToProps(state, ownProps){
    return{

    }
};

const mapDispatchToProps = dispatch => ({
    dispatchCallEditCardTitle: data => dispatch(callUpdateCardTitle(data)),
    dispatchCallEditCardDescription: data => dispatch(callUpdateCardDescription(data)),
    dispatchCallEditCardBillable: data => dispatch(callUpdateCardBillable(data))
});

//export default connect(mapStateToProps, mapDispatchToProps)(cssModules(CardModal, style));

export default connect(mapStateToProps, mapDispatchToProps)(CardModal)

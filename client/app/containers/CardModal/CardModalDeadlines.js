import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import {
    List,
    Button,
    Form,
    Modal, 
    Input,
} from 'semantic-ui-react';
import style from './cardModal.styl';
import defaultStyle from "../../styles/settings.styl";

import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';
import {callAddWork} from "../../objects/WeeklyReport/WorkAsyncActions";
import {Grid} from "semantic-ui-react/dist/commonjs/collections/Grid/Grid";


class CardModalDeadlines extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
            members:[{
                id: "1",
                firstName: "Charles",
                LastName: "Dupont",
                nickname: "charlyd"
            },{
                id: "2",
                firstName: "Maurice",
                LastName: "Tarpien",
                nickname: "TarpM"

            }],
            date: '',
            timeWork: null,
            dateTime: '',
            datesRange: ''
        };
    }

    toggleModalDeadlines = () => this.setState(state => ({ openModal: !state.openModal }));

    handleChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }

    handleDate = (e, value) => {
        this.setState({date: value.value})
    }

    addWork = (e) => {
        if(e.target.dateWork.value && e.target.timeWork.value && e.target.timeWork.value > 0) {
            console.log("dans le if")
            this.setState({timeWork: e.target.timeWork.value, dateWork: e.target.dateWork.value}, () =>
                this.props.dispatchCallAddWork({
                    dateWork: this.state.dateWork,
                    timeWork: this.state.timeWork,
                    _id: this.props.card._id,
                    boardId: this.props.board
                })
            )
        }
        console.log(e.target.dateWork.value)
    }


    render() {
        const { openModal } = this.state;
        return (

            <Modal
                trigger={
                    <Button onClick={this.toggleModalDeadlines} fluid animated='fade' className={style.settingsButtons} >
                        <Button.Content hidden>Work Done</Button.Content>
                        <Button.Content visible>
                            Work
                        </Button.Content>
                    </Button>
                }
                size={'tiny'}
                centered={false}
                className={style.modalCustom2}
                open={openModal}
                closeIcon
                onClose={this.toggleModalDeadlines}>
                <Modal.Header className={defaultStyle.textColor1}>
                    My work days on the card
                </Modal.Header>
                <Modal.Content className={style.modalContentCutomize}>
                    <Modal.Description>
                        <List verticalAlign='middle'>
                            <List.Item>
                                <List.Content>
                                    <List divided verticalAlign='middle'>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                <Button className={defaultStyle.backgroundColorAlert}>Delete</Button>
                                            </List.Content>
                                            <List.Content className={defaultStyle.textColor1}>
                                                Date - nb heures
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                <Button className={defaultStyle.backgroundColorAlert}>Delete</Button>
                                            </List.Content>
                                            <List.Content className={defaultStyle.textColor1}>
                                                Date - nb heures
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content floated='right'>
                                                <Button className={defaultStyle.backgroundColorAlert}>Delete</Button>
                                            </List.Content>
                                            <List.Content className={defaultStyle.textColor1}>
                                                Date - nb heures
                                            </List.Content>
                                        </List.Item>

                                    </List>

                                </List.Content>

                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Add new work </List.Header>
                                </List.Content>
                                <List.Content floated='right'>
                                    <Form onSubmit={this.addWork}>
                                        <Form.Group>

                                                <DateInput
                                                    closable={true}
                                                    closeOnMouseLeave={false}
                                                    dateFormat={"YYYY-MM-DD"}
                                                    timeFormat={false}
                                                    name="dateWork"
                                                    placeholder="Date"
                                                    value={this.state.date}
                                                    iconPosition="left"/>

                                            <Form.Field>
                                                <Input name="timeWork" value={this.state.timeWork} type={"number"} step={0.25} placeholder='Nb hours' />
                                            </Form.Field>
                                            <Form.Field>
                                                <Button>Add</Button>
                                            </Form.Field>
                                        </Form.Group>
                                    </Form>
                                </List.Content>
                            </List.Item>

                        </List>
                        
                    </Modal.Description>
                </Modal.Content>
            </Modal>

        );
    }


}


function mapStateToProps(state, ownProps){
    return{
        card: ownProps.card,
        board: ownProps.board
    }
};

const mapDispatchToProps = (dispatch)=> ({
    dispatchCallAddWork: data => dispatch(callAddWork(data))

});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(CardModalDeadlines, style));

//export default cssModules(CardModalDeadlines, style);
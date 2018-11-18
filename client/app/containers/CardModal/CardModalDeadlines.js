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
import moment from 'moment'
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';
import {callAddWork, callGetWorksByCard} from "../../objects/WeeklyReport/WorkAsyncActions";
import {Grid} from "semantic-ui-react/dist/commonjs/collections/Grid/Grid";


class CardModalDeadlines extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
            date: '',
            timeWork: null,
            dateTime: '',
            datesRange: '',
            getData: false
        };
    }

    toggleModalDeadlines = () => this.setState(state => ({ openModal: !state.openModal }));

    handleChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }
    handleTime = (e, value) => {
        this.setState({timeWork: value.value})
    }

    handleDate = (e, value) => {
        this.setState({date: value.value})
    }

    addWork = (e) => {
        if(e.target.dateWork.value && e.target.timeWork.value && e.target.timeWork.value > 0) {
            this.setState({timeWork: e.target.timeWork.value, dateWork: e.target.dateWork.value}, () =>
                this.props.dispatchCallAddWork({
                    dateWork: this.state.dateWork,
                    timeWork: this.state.timeWork,
                    _id: this.props.card._id,
                    boardId: this.props.board
                })
            )
            this.setState({getData: false})
        }
    }

    render() {
        const { openModal } = this.state;
        if(this.props.dispatchCallGetWork && !this.state.getData){
            this.props.dispatchCallGetWork({idCard: this.props.card._id})
            this.setState({getData: true})
        }
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
                                        {this.worksIsFilled()}
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
                                                    iconPosition="left"
                                                    onChange={this.handleDate}/>
                                            <Form.Field>
                                                <Input name="timeWork" value={this.state.timeWork} type={"number"} min="0" step={0.25} placeholder='Nb hours' />
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

    worksIsFilled = () => {
        if(this.props.works){
            return this.props.works.map(x => {
                return(
                    <List.Item>
                        <List.Content floated='right'>
                            <Button className={defaultStyle.backgroundColorAlert}>Delete</Button>
                        </List.Content>
                        <List.Content className={defaultStyle.textColor1}>
                         {moment(x.day).subtract(10, 'days').calendar()} - {x.timeReal}
                        </List.Content>
                    </List.Item>
                )
            })
        }
    }


}


function mapStateToProps(state, ownProps){
    return{
        card: ownProps.card,
        board: ownProps.board,
        works: state.works,
    }
};

const mapDispatchToProps = (dispatch)=> ({
    dispatchCallAddWork: data => dispatch(callAddWork(data)),
    dispatchCallGetWork: data => dispatch(callGetWorksByCard(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(CardModalDeadlines, style));

//export default cssModules(CardModalDeadlines, style);
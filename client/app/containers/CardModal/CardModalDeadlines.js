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
    Icon, Input,
    CustomCalendar
} from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import style from './cardModal.styl';
import defaultStyle from "../../styles/settings.styl";
import classNames from 'classnames'
import ProfileAnonymous from '../../styles/assets/hanonyme.png';

import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';


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
            time: '',
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


    render() {
        const { openModal } = this.state;
        return (

            <Modal
                trigger={
                    <Button onClick={this.toggleModalDeadlines} fluid animated='fade' className={style.settingsButtons} >
                        <Button.Content hidden>End dates</Button.Content>
                        <Button.Content visible>
                            Deadlines
                        </Button.Content>
                    </Button>
                }
                size={'tiny'}
                centered={false}
                open={openModal}
                closeIcon
                onClose={this.toggleModalDeadlines}>
                <Modal.Header className={defaultStyle.textColor1}>
                    Manage members
                </Modal.Header>
                <Modal.Content className={style.modalContentCutomize}>
                    <Modal.Description>
                        <List verticalAlign='middle'>
                            <List.Item>
                                <Image avatar src={ProfileAnonymous} />
                                <List.Content>
                                    <List.Header>Helen</List.Header>
                                </List.Content>
                                <List.Content floated='right'>
                                    <Form>
                                        <Form.Group>
                                            <DateInput
                                                name="startDate"
                                                placeholder="Start Date"
                                                value={this.state.date}
                                                iconPosition="left"
                                                onChange={this.handleChange} />
                                            <DateInput
                                                name="endDate"
                                                placeholder="End Date"
                                                value={this.state.date}
                                                iconPosition="left"
                                                onChange={this.handleChange} />
                                            <Input type={"text"} placeholder='Nb hours' />
                                            <Button>Delete</Button>
                                        </Form.Group>
                                    </Form>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src={ProfileAnonymous} />
                                <List.Content>
                                    <List.Header>Helen</List.Header>
                                </List.Content>
                                <List.Content floated='right'>
                                    <Form>
                                        <Form.Group>
                                            <DateInput
                                                name="startDate"
                                                placeholder="Start Date"
                                                value={this.state.date}
                                                iconPosition="left"
                                                onChange={this.handleChange} />
                                            <DateInput
                                                name="endDate"
                                                placeholder="End Date"
                                                value={this.state.date}
                                                iconPosition="left"
                                                onChange={this.handleChange} />
                                            <Input type={"number"} placeholder='Nb hours' />
                                            <Button>Delete</Button>
                                        </Form.Group>
                                    </Form>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src={ProfileAnonymous} />
                                <List.Content>
                                    <List.Header>Helen</List.Header>
                                </List.Content>
                                <List.Content floated='right'>
                                    <Form>
                                        <Form.Group>
                                            <DateInput
                                                name="startDate"
                                                placeholder="Start Date"
                                                value={this.state.date}
                                                iconPosition="left"
                                                onChange={this.handleChange} />
                                            <DateInput
                                                name="endDate"
                                                placeholder="End Date"
                                                value={this.state.date}
                                                iconPosition="left"
                                                onChange={this.handleChange} />
                                            <Input type={"number"} placeholder='Nb hours' />
                                            <Button>Delete</Button>
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

/*
function mapStateToProps(state, ownProps){
    return{

    }
};

const mapDispatchToProps = (dispatch)=> ({

});*/

//export default connect(mapStateToProps, mapDispatchToProps)(cssModules(CardModal, style));

export default cssModules(CardModalDeadlines, style);
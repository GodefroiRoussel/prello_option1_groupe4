import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import {
    Button,
    CustomCalendar, Form, Input
} from 'semantic-ui-react';
import { browserHistory } from 'react-router';

import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';
import {callAddOtherWork} from "../../objects/OtherWork/OtherWorkAsyncActions";


class OtherWork extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            date: '',
            timeWork: null,
            workName: "",
            dateTime: '',
            datesRange: ''
        };
    }

    handleChangeNameWork = (e, value) => {
        this.setState({workName: value.value})
    }

    addOtherWork = (e) => {
        const data = {
            otherWorkTitle: e.target.workdone.value,
            dateOtherWork: this.state.date,
            timeOtherWork: e.target.timeWork.value,
            //billable: data.billable
        }
        this.props.dispatchCallAddOtherWork(data)
    }
    handleDate = (e, value) => {
        this.setState({date: value.value})
    }

    render() {
        return( //TODO: if has the time -> display every other works of the user
        <Form onSubmit={this.addOtherWork}>
            <Form.Group>
                <Form.Field>
                    <Input onChange={this.handleChangeNameWork} name="workdone" value={this.state.workName} type={"text"} placeholder='work done' />
                </Form.Field>
                <Form.Field>
                    <DateInput
                        dateFormat={"YYYY-MM-DD"}
                        timeFormat={false}
                        name="dateWork"
                        placeholder="Date"
                        value={this.state.date}
                        iconPosition="left"
                        onChange={this.handleDate} />
                </Form.Field>
                <Form.Field>
                    <Input name="timeWork" value={this.state.timeWork} type={"number"} step={0.25} placeholder='Nb hours' />
                </Form.Field>
                <Form.Button>
                    <Button>Add</Button>
                </Form.Button>
            </Form.Group>
        </Form>
        )}

}

OtherWork.defaultProps = {
};

function mapStateToProps(state, ownProps){
    return{
    }
};

const mapDispatchToProps = dispatch => ({
    dispatchCallAddOtherWork: data => dispatch(callAddOtherWork(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OtherWork)

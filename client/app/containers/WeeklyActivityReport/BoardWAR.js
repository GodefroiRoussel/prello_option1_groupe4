import React from 'react';
import { connect } from 'react-redux';
import {Button, Form, Grid, Input} from 'semantic-ui-react';
import {Pie} from "react-chartjs-2";
import BillableChart from "../../components/WeeklyReport/BillableChart";
import {callAddBoard} from "../../objects/Board/BoardAsyncActions";
import {callGetBillableWorks} from "../../objects/WeeklyReport/WorkAsyncActions";
import {callUpdateCardTitle} from "../../objects/Card/CardAsyncActions";
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';
import style from './war.styl'

class BoardWAR extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: '',
            endDate: '',
            idBoard:"",
            worksBill: [],
            worksNotBill: [],
            displayCRHA: false,
            dataPieBillable: {
                labels: [
                    'Billable',
                    'Not Billable',
                ],
                datasets: [{
                    data: [300, 100],
                    backgroundColor: [
                        '#36A2EB',
                        '#FFCE56'
                    ],
                }]
            },
            works: []
        }
    }

    getData = (e) => {
        console.log('coucou')
        if(e.target.startDate.value && e.target.endDate.value) {
            console.log('if')
            const dataGetWork = {
                idBoard: "7rGJaTtgx4xzJyvFj",
                startDate: e.target.startDate.value,
                endDate: e.target.endDate.value,
            }
            this.props.dispatchCallGetWorksBillable(dataGetWork)
                .then(result => this.setState({worksBill: result}))

            console.log('state', this.state.worksBill)
            //const worksNotbill = this.props.dispatchCallGetWorksBillable(dataGetWork)
            this.setState({displayCRHA: true})
        }
    }

    handleStartDate = (e, value) => {
        this.setState({startDate: value.value})
    }

    handleEndDate = (e, value) => {
        this.setState({endDate: value.value})
    }
    render() {
        console.log(this.state)
        const showCRHA = this.state.displayCRHA
        return (
            <Grid centered>
                <div>
                    <Form onSubmit={this.getData}>
                        <Form.Group>
                            <Form.Field>
                                <DateInput
                                    dateFormat={"YYYY-MM-DD"}
                                    timeFormat={false}
                                    name="startDate"
                                    placeholder="Start Date"
                                    value={this.state.startDate}
                                    iconPosition="left"
                                    onChange={this.handleStartDate} />
                            </Form.Field>
                            <Form.Field>
                                <DateInput
                                    dateFormat={"YYYY-MM-DD"}
                                    timeFormat={false}
                                    name="endDate"
                                    placeholder="End Date"
                                    value={this.state.endDate}
                                    iconPosition="left"
                                    onChange={this.handleEndDate} />
                            </Form.Field>
                            <Form.Button>
                                <Button>Go</Button>
                            </Form.Button>
                        </Form.Group>
                    </Form>
                </div>
                {showCRHA && this.state.worksBill? (<div> <BillableChart dataBillable={this.state.dataPieBillable}/>
                </div>) : null}

            </Grid>
        )
    }
}

BoardWAR.propTypes = {};

function mapStateToProps(state, ownProps){
    return{
    }
};

function mapDispatchToProps(dispatch){
    return {
        dispatchCallGetWorksBillable: data => dispatch(callGetBillableWorks(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardWAR);

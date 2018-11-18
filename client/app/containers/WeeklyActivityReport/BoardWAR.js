import React from 'react';
import { connect } from 'react-redux';
import {Button, Form, Grid, Input} from 'semantic-ui-react';
import {Pie} from "react-chartjs-2";
import BillableChart from "../../components/WeeklyReport/BillableChart";
import {callAddBoard} from "../../objects/Board/BoardAsyncActions";
import {callGetBillableWorks, callGetNotBillableWorks} from "../../objects/WeeklyReport/WorkAsyncActions";
import {callUpdateCardTitle} from "../../objects/Card/CardAsyncActions";
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';
import style from './war.styl'
import asteroid from "../../common/asteroid";
import {callGetOtherWorksBillable, callGetOtherWorksNotBillable} from "../../objects/OtherWork/OtherWorkAsyncActions";

class BoardWAR extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: '',
            endDate: '',
            idBoard:"",
            worksBill: [],
            worksNotBill: [],
            nbHoursWorkBill: 0,
            nbHoursWorkNotBill: 0,
            otherBill: [],
            otherNotBill: [],
            nbHoursOtherBill: 0,
            nbHoursOtherNotBill: 0,
            displayCRHA: false,
            works: []
        }
    }

    getData = (e) => {
        if(e.target.startDate.value && e.target.endDate.value) {
            const dataGetWork = {
                idBoard: this.props.idBoard,
                startDate: e.target.startDate.value,
                endDate: e.target.endDate.value,
            }
            this.props.dispatchCallGetWorksBillable(dataGetWork)
                .then(result => {
                        this.setState({worksBill: result})
                        var nbHoursBill = 0
                        result.map(work => {
                                nbHoursBill = nbHoursBill + work.timeReal
                            }
                        )
                        this.setState({nbHoursWorkBill: nbHoursBill})

                    }
                )
            this.props.dispatchCallGetWorksNotBillable(dataGetWork)
                .then(result => {
                    this.setState({worksNotBill: result})
                    var nbHoursNotBill = 0
                    result.map(work => {
                            nbHoursNotBill = nbHoursNotBill + work.timeReal
                        }
                    )
                    this.setState({nbHoursWorkNotBill: nbHoursNotBill})
                })

            this.props.dispatchCallGetOtherWorksBillable(dataGetWork)
                .then(result => {
                    this.setState({otherBill: result})
                    var nbHoursBill = 0
                    result.map(work => {
                            nbHoursBill = nbHoursBill + work.nbHoursSpent
                        }
                    )
                    this.setState({nbHoursOtherBill: nbHoursBill})
                })
            this.props.dispatchCallGetOtherWorksNotBillable(dataGetWork)
                .then(result => {
                    this.setState({otherNotBill: result})
                    var nbHoursNotBill = 0
                    result.map(work => {
                            nbHoursNotBill = nbHoursNotBill + work.nbHoursSpent
                        }
                    )
                    this.setState({nbHoursOtherNotBill: nbHoursNotBill})

                })

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
        const showCRHA = this.state.displayCRHA
        const dataPieWorks = {
            labels: [
                'Billable',
                'Not Billable',
            ],
            datasets: [{
                data: [this.state.nbHoursWorkBill, this.state.nbHoursWorkNotBill],
                backgroundColor: [
                    '#FFCE56',
                    '#36A2EB'
                ],
            }]
        }
        const dataPieOther = {
            labels: [
                'Billable',
                'Not Billable',
            ],
            datasets: [{
                data: [this.state.nbHoursOtherBill, this.state.nbHoursOtherNotBill],
                backgroundColor: [
                    '#FFCE56',
                    '#36A2EB'
                ],
            }]
        }
        const dataPieBoth = {
            labels: [
                'Billable',
                'Not Billable',
            ],
            datasets: [{
                data: [this.state.nbHoursOtherBill + this.state.nbHoursWorkBill, this.state.nbHoursOtherNotBill + this.state.nbHoursWorkNotBill],
                backgroundColor: [
                    '#FFCE56',
                    '#36A2EB'
                ],
            }]
        }
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
                {showCRHA && this.state.worksBill? (<div><div> <BillableChart title="Work on cards" data={dataPieWorks}/>
                    </div>
                        <div> <BillableChart title="Other works" data={dataPieOther}/></div>
                        <div> <BillableChart title="Works" data={dataPieBoth}/></div>
                    </div>)
                    : null}

            </Grid>
        )
    }
}

BoardWAR.propTypes = {};

function mapStateToProps(state, ownProps){
    return{
        works: state.works,
        idBoard: ownProps.location.state.id
    }
};

function mapDispatchToProps(dispatch){
    return {
        dispatchCallGetWorksBillable: data => dispatch(callGetBillableWorks(data)),
        dispatchCallGetWorksNotBillable: data => dispatch(callGetNotBillableWorks(data)),
        dispatchCallGetOtherWorksBillable: data => dispatch(callGetOtherWorksBillable(data)),
        dispatchCallGetOtherWorksNotBillable: data => dispatch(callGetOtherWorksNotBillable(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardWAR);

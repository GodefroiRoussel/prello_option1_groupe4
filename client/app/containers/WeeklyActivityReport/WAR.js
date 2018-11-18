import React from 'react';
import cssModules from 'react-css-modules';
import Alert from 'react-s-alert';
import asteroid from '../../common/asteroid';
import { Link, browserHistory } from 'react-router'

import { Grid, Table, Label, Header, Divider, Icon, Card, Button } from 'semantic-ui-react';
import defaultStyle from '../../styles/settings.styl'
import style from './war.styl';

import { Doughnut, Bar, Pie, Line } from 'react-chartjs-2';
import { equal } from 'assert';
import {connect} from "react-redux";

const data = {
    labels: [
        'Blue',
        'Yellow',
    ],
    datasets: [{
        data: [50, 100],
        backgroundColor: [
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const dataPieBillable = {
    labels: [
        'Blue',
        'Yellow',
    ],
    datasets: [{
        data: [300, 100],
        backgroundColor: [
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const dataBarPlot = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
        {
            label: 'Development',
            backgroundColor: 'rgba(0,0,255,0.2)',
            borderColor: 'rgba(0,0,255,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,0,255,0.4)',
            hoverBorderColor: 'rgba(0,0,255,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Design',
            backgroundColor: 'rgba(255,195,0,0.2)',
            borderColor: 'rgba(255,195,0,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,195,0,0.4)',
            hoverBorderColor: 'rgba(255,195,0,1)',
            data: [35, 41, 20, 19, 44, 45, 60]
        }
    ]
};

const dataBarPlot2 = {
    labels: ['Pierre', 'Sandrine', 'Léa', 'Jacques'],
    datasets: [
        {
            label: 'Number of unbillable tasks finished this week',
            backgroundColor: 'rgba(0,0,255,0.2)',
            borderColor: 'rgba(0,0,255,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,0,255,0.4)',
            hoverBorderColor: 'rgba(0,0,255,1)',
            data: [2, 0, 10, 16]
        },
        {
            label: 'Number of billable tasks finished this week',
            backgroundColor: 'rgba(255,195,0,0.2)',
            borderColor: 'rgba(255,195,0,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,195,0,0.4)',
            hoverBorderColor: 'rgba(255,195,0,1)',
            data: [10, 14, 7, 3]
        }
    ]
};

const dataLineChart = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
        {
            label: 'Number of hours passed in development this week',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'rgba(0,0,255,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0,0,255,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0,0,255,1)',
            pointHoverBorderColor: 'rgba(0,0,255,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Number of hours passed in development in average last week',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255,195,0,0.4)',
            borderColor: 'rgba(255,195,0,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255,195,0,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255,195,0,1)',
            pointHoverBorderColor: 'rgba(255,195,0,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [32, 34, 47, 51, 56, 55, 40]
        }
    ]
};

//TODO: Handle dynamic name and datas
//TODO: Refactor in little containers
//TODO: Right Scroll with the list of members
//TODO: Fix Bug of cards
const War = () => {

    const form = () => (
        <div>
            <Header as='h2'>Dream Team Weekly Activity Report <Label> Week 3 </Label></Header>
            <Grid columns='equal' textAlign='center' divided>
                <Grid.Row centered>
                    <Table celled collapsing>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Yearly Cost</Table.HeaderCell>
                                <Table.HeaderCell>12 000€</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell> Total Hours on all Projects </Table.Cell>
                                <Table.Cell>423</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Grid.Row>


                <Grid.Row>
                    <Grid.Column>
                        <div className={style.maxWidth}>
                            <h2>Number of hour per label per day</h2>
                            <Bar
                                data={dataBarPlot}
                                options={{
                                    maintainAspectRatio: false
                                }}
                            />
                        </div>
                    </Grid.Column>

                    <Grid.Column >
                        <Grid
                            columns='equal'
                            padded
                            stackable
                            textAlign='center'
                        >
                            <Grid.Row>
                                <Grid.Column >

                                    <div>
                                        <h2>Number of tasks due in time</h2>
                                        <Pie data={data} />
                                    </div>
                                </Grid.Column>
                                <Grid.Column >
                                    <div>
                                        <h2>Number of hours of billable tasks</h2>
                                        <Pie data={dataPieBillable} />
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <div>
                            <h2>Team Performance</h2>
                            <Line data={dataLineChart} />
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div>
                            <h2>Number of finished tasks by person this week</h2>
                            <Bar
                                data={dataBarPlot2}
                            />
                        </div>
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row>
                    <div>
                        <h2>Boards</h2>
                        <h1> TODO : LIST OF CARD BOARD</h1>
                    </div>
                </Grid.Row>


                <Grid.Row>
                    <div>
                        <h2>Members</h2>
                        <Grid.Column>
                            <Card
                                image='/images/logo.png'
                                header='Elliot Baker'
                                meta='Admin'
                                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            />
                        </Grid.Column>

                        <Grid.Column>

                            <Card
                                image='/images/logo.png'
                                header='Pierre Baker'
                                meta='Member'
                                description='Pierre is a computer science engineer living in Nashville who enjoys playing guitar and hanging with his dog.'
                            />

                        </Grid.Column>
                        <Grid.Column>

                            <Card
                                image='/images/logo.png'
                                header='Elliot Baker'
                                meta='Admin'
                                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            />

                        </Grid.Column>

                        <Grid.Column>
                            <Card
                                image='/images/logo.png'
                                header='Pierre Baker'
                                meta='Member'
                                description='Pierre is a computer science engineer living in Nashville who enjoys playing guitar and hanging with his dog.'
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Card
                                image='/images/logo.png'
                                header='Elliot Baker'
                                meta='Admin'
                                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Card
                                image='/images/logo.png'
                                header='Pierre Baker'
                                meta='Member'
                                description='Pierre is a computer science engineer living in Nashville who enjoys playing guitar and hanging with his dog.'
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Card
                                image='/images/logo.png'
                                header='Elliot Baker'
                                meta='Admin'
                                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Card
                                image='/images/logo.png'
                                header='Pierre Baker'
                                meta='Member'
                                description='Pierre is a computer science engineer living in Nashville who enjoys playing guitar and hanging with his dog.'
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Card
                                image='/images/logo.png'
                                header='Elliot Baker'
                                meta='Admin'
                                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Card
                                image='/images/logo.png'
                                header='Pierre Baker'
                                meta='Member'
                                description='Pierre is a computer science engineer living in Nashville who enjoys playing guitar and hanging with his dog.'
                            />
                        </Grid.Column>

                        <Button icon>
                            <Icon name='angle right' />
                        </Button>
                    </div>
                </Grid.Row>
            </Grid >
        </div >

    );
    if(true) {
        return <div>{form()}</div>;
    }
};

function mapStateToProps(state, ownProps){
    return{
        //works: state.works
    }
};

export default connect(mapStateToProps)(War)

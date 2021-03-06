import React from 'react';
import {Grid} from 'semantic-ui-react';
import {Pie} from "react-chartjs-2";

const BillableChart = (props) => {

    return(
        <Grid>
            <Grid.Column>
                <div>
                    <h2>{props.title}</h2>
                    <Pie data={props.data}/>
                </div>
            </Grid.Column>

        </Grid>

    )};

export default BillableChart
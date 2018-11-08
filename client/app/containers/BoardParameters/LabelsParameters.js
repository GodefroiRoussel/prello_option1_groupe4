import React, { Component } from 'react'
import {Form, Divider, Card} from 'semantic-ui-react'

export default class LabelsParameters extends Component {
    state = {
        labels: [ { key: 'l1', value: 'l1', color:'blue', text: 'label1' },  { key: 'l2', value: 'l2', color: 'red', text: 'label2' }, { key: 'l3', value: 'l3', color: 'green', text: 'label3' } ]
    };

    render() {
        return (
            <Form>
                <h4>Board's labels</h4>
                <Card.Group >
                    {this.state.labels.map(label =>
                        <div >
                            <h5>{label.text}</h5>
                            <Divider/>
                        </div>
                    )}
                </Card.Group>
                <Form.field>
                    <h4>Create new label</h4>
                </Form.field>
            </Form>
        )
    }
}

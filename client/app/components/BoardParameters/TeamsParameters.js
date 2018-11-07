import React, { Component } from 'react'
import {Form, Divider, Radio, Button, Dropdown} from 'semantic-ui-react'

export default class TeamsParameters extends Component {
    state = {
        teams: [ { key: 't1', value: 't1', text: 'Team1' },  { key: 't2', value: 't2', text: 'Team2' }, { key: 't3', value: 't3', text: 'Team3' } ]
    };

    render() {
        return (
            <Form>
                <h4>Teams linked to the board</h4>
                <Form.Group inline>
                    <Form.Field>
                        <Dropdown placeholder='Teams' fluid multiple search selection options={this.state.teams} />
                    </Form.Field>
                    <Form.Field>
                        <Button>OK</Button>
                    </Form.Field>
                </Form.Group>
                <Divider/>
            </Form>
        )
    }
}

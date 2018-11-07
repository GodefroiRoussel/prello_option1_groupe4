import React, { Component } from 'react'
import {Form, Divider, Radio, Button} from 'semantic-ui-react'

export default class InvitationParameters extends Component {
    state = {
        value:'all members'
    }
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <Form>
                <h4>Invitation authorizations</h4>
                <Form.Group inline>
                    <Form.Field>
                        Enable teams management: <b>{this.state.value}</b>
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Administrators only'
                            name='radioGroup'
                            value='admin'
                            checked={this.state.value === 'admin'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='All members'
                            name='radioGroup'
                            value='all members'
                            checked={this.state.value === 'all members'}
                            onChange={this.handleChange}
                        />
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

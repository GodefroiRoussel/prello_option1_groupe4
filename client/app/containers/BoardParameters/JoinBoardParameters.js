import React, { Component } from 'react'
import {Form, Divider, Radio, Button} from 'semantic-ui-react'

export default class JoinBoardParameters extends Component {
    state = {
        value:'yes'
    }
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <Form>
                <h4>Join the board</h4>
                <Form.Group inline>
                    <Form.Field>
                        Enable members to join the board :
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Yes'
                            name='radioGroup'
                            value='yes'
                            checked={this.state.value === 'yes'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='No'
                            name='radioGroup'
                            value='no'
                            checked={this.state.value === 'no'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Divider/>
            </Form>
        )
    }
}

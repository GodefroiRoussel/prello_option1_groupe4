import React, { Component } from 'react'
import {Form, Divider, Radio, Button, Label, Icon} from 'semantic-ui-react'

export default class BackgroundParameters extends Component {
    state = {
    }
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <Form>
                <h4>Change background picture</h4>
                <Form.Group inline>
                    <Form.Field>
                        <Label width="4" as="label" htmlFor="file" size="big">
                            <Icon name="file" />
                            Image
                        </Label>
                        <input id="file" hidden type="file" />
                    </Form.Field>

                </Form.Group>
                <Divider/>
            </Form>
        )
    }
}

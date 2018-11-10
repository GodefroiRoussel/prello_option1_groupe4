import React, { Component } from 'react'
import {Form, Divider, Radio, Button} from 'semantic-ui-react'
import defaultStyle from "../../styles/settings.styl";
import style from './boardParameters.styl';

export default class CommentsParameters extends Component {
    state = {
        value:'board members'
    }
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <Form>
                <h4>Comments authorizations</h4>
                <Form.Group inline>
                    <Form.Field>
                        Enable comments to :
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Disable'
                            name='radioGroup'
                            value='disable'
                            checked={this.state.value === 'disable'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Board members'
                            name='radioGroup'
                            value='board members'
                            checked={this.state.value === 'board members'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Teams members'
                            name='radioGroup'
                            value='teams members'
                            checked={this.state.value === 'teams members'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='All'
                            name='radioGroup'
                            value='all'
                            checked={this.state.value === 'all'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Divider/>
            </Form>
        )
    }
}

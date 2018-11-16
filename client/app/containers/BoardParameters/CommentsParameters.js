import React, { Component } from 'react'
import {Form, Divider, Radio, Button} from 'semantic-ui-react'
import defaultStyle from "../../styles/settings.styl";
import style from './boardParameters.styl';

const CommentsParametersBoard = (props) =>{

    var value = 'board members';

    const handleChange = (e, { value }) => {
        console.log(value)
        value = value
    }

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
                            checked={value === 'disable'}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Board members'
                            name='radioGroup'
                            value='board members'
                            checked={value === 'board members'}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Teams members'
                            name='radioGroup'
                            value='teams members'
                            checked={value === 'teams members'}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='All'
                            name='radioGroup'
                            value='all'
                            checked={value === 'all'}
                            onChange={handleChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Divider/>
            </Form>
        )
}

export default CommentsParametersBoard

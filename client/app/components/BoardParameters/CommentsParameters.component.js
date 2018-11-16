import React, { Component } from 'react'
import {Form, Divider, Radio, Button} from 'semantic-ui-react'
import defaultStyle from "../../styles/settings.styl";
import style from '../../containers/BoardParameters/boardParameters.styl';

const CommentsParametersBoard = (props) =>{

    const handleChange = (e, { value }) => {
        console.log(value)
        props.callUpdateCanComment({canComment: value, _id: props._id});
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
                            checked={props.canComment === 'disable'}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Board members'
                            name='radioGroup'
                            value='board members'
                            checked={props.canComment === 'board members'}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Teams members'
                            name='radioGroup'
                            value='teams members'
                            checked={props.canComment === 'teams members'}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='All'
                            name='radioGroup'
                            value='all'
                            checked={props.canComment === 'all'}
                            onChange={handleChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Divider/>
            </Form>
        )
}

export default CommentsParametersBoard

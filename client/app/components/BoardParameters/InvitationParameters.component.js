import React from 'react'
import {Form, Divider, Radio, Button} from 'semantic-ui-react'

const InvitationParametersBoard = (props) => {

    const handleChange = (e, { value }) => {
        var invitation = true;
        if(value == 'admin'){
            invitation = false
        }
        props.callUpdateInvitationsOpenedBoard({invitationsOpenedBoard: invitation, _id: props._id})
    }

        return (
            <Form>
                <h4>Invitation authorizations</h4>
                <Form.Group inline>
                    <Form.Field>
                        Enable teams management :
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Administrators only'
                            name='radioGroup'
                            value='admin'
                            checked={props.invitationsOpenedBoard == false}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='All members'
                            name='radioGroup'
                            value='all members'
                            checked={props.invitationsOpenedBoard == true}
                            onChange={handleChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Divider/>
            </Form>
        )
}

export default InvitationParametersBoard;
import React from 'react'
import {Form, Divider, Radio, Button} from 'semantic-ui-react'

const JoinParametersBoard= (props) => {

    var value = 'yes'
    const handleChange = (e, { value }) => value=value

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
                            checked={value === 'yes'}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='No'
                            name='radioGroup'
                            value='no'
                            checked={value === 'no'}
                            onChange={handleChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Divider/>
            </Form>
        )
}

export default JoinParametersBoard;
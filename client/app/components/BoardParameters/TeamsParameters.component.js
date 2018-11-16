import React from 'react'
import {Form, Divider, Radio, Button, Dropdown} from 'semantic-ui-react'

const TeamsParametersBoard = (props) => {
    
    var teams = []
    props.teams.map(x => teams.push({key: x._id, value: x._id, text: x.nameTeam}))

    const handleChange = (e, { value }) => {
        props.callUpdateTeam({_id: props._id, teams: value})
    }

        return (
            <Form>
                <h4>Teams linked to the board</h4>
                <Form.Group inline>
                    <Form.Field>
                        <Dropdown placeholder='Teams' fluid multiple search selection defaultValue={props.teamsSelected} options={teams} onChange={handleChange} />
                    </Form.Field>
                </Form.Group>
                <Divider/>
            </Form>
        )
}

export default TeamsParametersBoard;

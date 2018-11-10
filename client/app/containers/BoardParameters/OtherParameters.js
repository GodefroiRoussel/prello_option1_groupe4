import React, { Component } from 'react'
import {Button, Divider, Icon} from 'semantic-ui-react'

export default class OtherParameters extends Component {
    state = {}

    render() {
        //TODO: finish sentences
        return (
            <div>
                <h4>Quit the board</h4>
                <Divider/>
                <Button basic color='red'>
                    <Icon name='remove' /> Quit
                </Button>
            </div>
        )
    }
}

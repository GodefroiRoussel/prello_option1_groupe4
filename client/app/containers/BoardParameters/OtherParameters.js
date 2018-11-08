import React, { Component } from 'react'
import {Divider} from 'semantic-ui-react'

export default class OtherParameters extends Component {
    state = {}

    render() {
        //TODO: finish sentences
        return (
            <div>
                <a>Quit the board</a>
                <p>If you quit the board, ...</p>
                <Divider/>
                <a>Quit the board</a>
                <p>You can re-open the board later ... </p>
            </div>
        )
    }
}

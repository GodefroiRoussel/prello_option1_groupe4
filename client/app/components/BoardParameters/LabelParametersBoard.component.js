import React from 'react'
import {Form, Divider, Card, Segment, Input, Icon, Button, Modal, Header} from 'semantic-ui-react'
import { SwatchesPicker } from 'react-color';


const TeamsParametersBoardComponent = (props) => {
    
    const style = {
        backgroundColor: `rgb(${props.label.colorLabel})`
    }
    const handleChange = (color)=>{
        props.handleClose
        return props.DispatchCallUpdateColorLabel({_id: props.label._id, colorLabel: [color.rgb.r, color.rgb.g, color.rgb.b]})
    }

    const callUpdateNameLabel = (e) => {
        if (e.key === 'Enter') {
            const elem = e.target;
            e.preventDefault();
            if (elem.value) {
                props.DispatchCallUpdateNameLabel({_id: props.label._id, titleLabel: elem.value})
            }
        }
    }

    return (
        <div key={props.label._id}>
            <Segment inverted style={style}>
                <Input  name="titleList" type="text" defaultValue={props.label.titleLabel} onKeyPress={callUpdateNameLabel}></Input>
                <div>
                    <Modal  trigger={<a onClick={props.handleOpen}>Change color</a>}
                            open={props.modalOpen}
                            onClose={props.handleClose}
                            basic
                            size='mini'>
                        <Modal.Content>
                        <SwatchesPicker onChange={handleChange}/>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button basic color='red' onClick={props.handleClose} inverted>
                                <Icon name='remove' /> Cancel
                            </Button>
                        </Modal.Actions>
                    </Modal>
                    </div>
            </Segment>
        </div>
    )
}

export default TeamsParametersBoardComponent;

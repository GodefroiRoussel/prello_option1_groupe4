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
                <Form>
                    <Form.Group inline>
                        <Form.Field>
                            <Input  name="titleList" type="text" defaultValue={props.label.titleLabel} onKeyPress={callUpdateNameLabel}></Input>
                        </Form.Field>
                        <Form.Field>
                            <Modal  trigger={<Button onClick={props.handleOpen}>Change color</Button>}
                                    open={props.modalOpen}
                                    onClose={props.handleClose}
                                    size='small'
                                    closeIcon
                            >
                                <Modal.Content>
                                    <SwatchesPicker onChange={handleChange}/>
                                </Modal.Content>
                            </Modal>
                        </Form.Field>
                    </Form.Group>
                </Form>

            </Segment>
        </div>
    )
}

export default TeamsParametersBoardComponent;

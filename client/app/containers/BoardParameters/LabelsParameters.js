import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Form, Divider, Card, Segment, Input, Icon, Button, Modal, Header} from 'semantic-ui-react'
import { SwatchesPicker } from 'react-color';
import {callAddLabel, callUpdateColorLabel} from '../../objects/Label/LabelAsyncActions';


class LabelsParametersBoard extends Component {

    constructor(props) {
        super(props)
        this.state ={
            modalOpen: false,
        }
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })


    handleChange(id,color){
        console.log(id)
        this.props.DispatchCallUpdateColorLabel({_id: id, colorLabel: [color.rgb.r, color.rgb.g, color.rgb.b]})
    }

    render() {
        if(this.props.board && this.props.labels){
            return (
                <div>
                    {this.props.labels.map(x => {
                        const style = {
                            backgroundColor: `rgb(${x.colorLabel})`
                        }
                        return (
                            <div key={x._id}>
                                <Segment inverted style={style}>
                                    <Input  name="titleList" type="text" value={"Label f"}></Input>
                                    <div>
                                        <Modal  trigger={<a onClick={this.handleOpen}>Change color</a>}
                                                open={this.state.modalOpen}
                                                onClose={this.handleClose}
                                                basic
                                                size='small'>
                                            <Modal.Content>
                                            <SwatchesPicker onChange={(color)=>this.handleChange(x._id, color)}/>
                                            </Modal.Content>
                                            <Modal.Actions>
                                                <Button basic color='red' onClick={this.handleClose} inverted>
                                                    <Icon name='remove' /> Cancel
                                                </Button>
                                            </Modal.Actions>
                                        </Modal>
                                        </div>
                                </Segment>
                            </div>
                        )
                    })}
                    <Button basic onClick={()=> this.props.DispatchCallAddLabel({_id: this.props.board._id})}>
                        <Icon name='add' /> Add a new label
                    </Button>
                </div>
            )
        }
        else{
            return <div/>
        }
    }
}

function mapStateToProps(state, ownProps){
    const b = state.boards.find(el => el._id === ownProps._id);
    return{
        board : state.boards.find(el => el._id === ownProps._id),
        labels : state.labels.filter(el => b.labels.includes(el._id)),
    }
}

function mapDispatchToProps(dispatch){
    return{
        DispatchCallAddLabel: (data) => dispatch(callAddLabel(data)),
        DispatchCallUpdateColorLabel: (data) => dispatch(callUpdateColorLabel(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelsParametersBoard);


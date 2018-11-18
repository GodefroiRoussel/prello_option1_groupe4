import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Form, Divider, Card, Segment, Input, Icon, Button, Modal, Header} from 'semantic-ui-react'
import TeamsParametersBoardComponent from '../../components/BoardParameters/LabelParametersBoard.component';
import {callAddLabel, callUpdateColorLabel, callUpdateNameLabel} from '../../objects/Label/LabelAsyncActions';


class LabelsParametersBoard extends Component {

    constructor(props) {
        super(props)
        this.state={
            openModal:false,
        }
    }

    handleOpen = () => this.setState({modalOpen: true})
    handleClose = () => this.setState({modalOpen: false})


    render() {
        if(this.props.board && this.props.labels){
            return (
                <div>
                    {this.props.labels.map(x => (
                        <TeamsParametersBoardComponent label={x} handleClose={this.handleClose} 
                        handleOpen={this.handleOpen} 
                        openModal={this.state.openModal} 
                        DispatchCallUpdateColorLabel={this.props.DispatchCallUpdateColorLabel}
                        DispatchCallUpdateNameLabel={this.props.DispatchCallUpdateNameLabel}
                        ></TeamsParametersBoardComponent>
                    ))}
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
        l: state.labels
    }
}

function mapDispatchToProps(dispatch){
    return{
        DispatchCallAddLabel: (data) => dispatch(callAddLabel(data)),
        DispatchCallUpdateColorLabel: (data) => dispatch(callUpdateColorLabel(data)),
        DispatchCallUpdateNameLabel: (data)=>dispatch(callUpdateNameLabel(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelsParametersBoard);


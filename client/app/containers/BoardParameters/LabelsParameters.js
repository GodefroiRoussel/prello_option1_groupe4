import React, { Component } from 'react'
import {Form, Divider, Card, Segment, Input, Icon, Button} from 'semantic-ui-react'

export default class LabelsParameters extends Component {
    state = {
        labels: [ { key: 'l1', value: 'l1', color:'blue', text: 'label1' },  { key: 'l2', value: 'l2', color: 'red', text: 'label2' }, { key: 'l3', value: 'l3', color: 'green', text: 'label3' } ]
    };

    render() {
        return (
            <div>
                <Segment inverted color='red'>
                    <Input  name="titleList" type="text" value={"Label Sticker"}></Input>
                </Segment>
                <Segment inverted color='orange'>
                    <Input  name="titleList" type="text" value={"Label Sticker"}></Input>
                </Segment>
                <Segment inverted color='yellow'>
                    <Input  name="titleList" type="text" value={"Label Sticker"}></Input>
                </Segment>
                <Segment inverted color='olive'>
                    <Input  name="titleList" type="text" value={"Label Sticker"}></Input>
                </Segment>
                <Segment inverted color='green'>
                    <Input  name="titleList" type="text" value={"Label Sticker"}></Input>
                </Segment>
                <Segment inverted color='teal'>
                    <Input  name="titleList" type="text" value={"Label Sticker"}></Input>
                </Segment>
                <Segment inverted color='blue'>
                    <Input  name="titleList" type="text" value={"Label Sticker"}></Input>
                </Segment>
                <Segment inverted color='violet'>
                    <Input  name="titleList" type="text" value={"Label Sticker"}></Input>
                </Segment>
                <Segment inverted color='purple'>
                    <Input  name="titleList" type="text" value={"Label Sticker"}></Input>
                </Segment>
                <Segment inverted color='pink'>
                    <Input  name="titleList" type="text" value={"Label Sticker"}></Input>
                </Segment>
                <Segment inverted color='brown'>
                    <Input  name="titleList" type="text" value={"Label Sticker"}></Input>
                </Segment>
                <Segment inverted color='grey'>
                    <Input  name="titleList" type="text" value={"Label Sticker"}></Input>
                </Segment>
                <Segment inverted color='black'>
                    <Input  name="titleList" type="text" value={"Label Sticker"}></Input>
                </Segment>
                <Button basic inverted>
                    <Icon name='add' /> Add a new sticker
                </Button>
            </div>
        )
    }
}

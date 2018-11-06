import React from 'react';
import { connect } from 'react-redux';
import { Tab, Card, Image, List, Button , Header, Input, Loader, Dropdown, Grid} from 'semantic-ui-react';

const ListMember = (props) => {

    const callAddMember = () =>{
        var l = [...props.members, "test"]
        props.addMembers({id: props.id, members: l})
    }
    
    return (<div>
        <div>
            <Input list='members' placeholder='Choose members to add...' />
        </div>
    <List animated verticalAlign='middle'>
    <Grid columns={5}></Grid>
    {
        props.members.map((x, i) =>{
            return(
                <Grid.Column>
                    <List.Item>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                        <List.Content>
                        <List.Header>{x}</List.Header>
                        </List.Content>
                    </List.Item>
                </Grid.Column>
            )
        })
    }
    </List>
    <Button onClick={callAddMember}>ADD</Button>
      </div>)
}

export default ListMember;

import React from 'react';
import { connect } from 'react-redux';
import { Tab, Card, Image, List, Button , Header, Input, Loader, Dropdown} from 'semantic-ui-react';

const ListMember = (props) => {

    const callAddMember = () =>{
        var l = [...props.members, "test"]
        props.addMembers({id: props.id, members: l})
    }
    
    return (<div>
        <Input icon={{ name: 'search', circular: true, link: true }} placeholder='Search...' />
    <List animated verticalAlign='middle'>
    {
        props.members.map(x =>{
            return(
                <div key={x}>
                <List.Item>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                    <List.Content>
                    <List.Header>{x}</List.Header>
                    </List.Content>
                </List.Item>
                </div>
            )
        })
    }
    </List>
    <Button onClick={callAddMember}>ADD</Button>
      </div>)
}

export default ListMember;

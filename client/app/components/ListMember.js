import React from 'react';
import { connect } from 'react-redux';
import { Tab, Card, Image, List, Button , Header, Input, Loader, Dropdown} from 'semantic-ui-react';

const ListMember = (props) => {

    return (<div>
        <Input icon={{ name: 'search', circular: true, link: true }} placeholder='Search...' />
    <List animated verticalAlign='middle'>
    {
        props.members.map(x =>{
            return(
                <List.Item>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                    <List.Content>
                    <List.Header>{x}</List.Header>
                    </List.Content>
                </List.Item>
            )
        })
    }
    </List>
      </div>)
}

export default ListMember;

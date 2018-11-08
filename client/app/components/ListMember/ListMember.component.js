import React from 'react';
import { connect } from 'react-redux';
import { Tab, Card, Image, List, Button , Header, Input, Loader, Dropdown, Grid} from 'semantic-ui-react';
import logoAnonymous from '../../styles/assets/hanonyme.png'
import style from './listMember.styl';
import defaultStyle from "../../styles/settings.styl";

const ListMember = (props) => {

    const callAddMember = (e) =>{
        if (e.key === 'Enter') {
            var l = [...props.members, e.target.value]
            props.addMembers({id: props.id, members: l})
        }
    }
    
    return (<div>
        <div>
            <Input list='members' placeholder='Choose members to add...' onKeyPress={callAddMember}/>
            <Button onClick={callAddMember}>ADD</Button>
        </div>
    <List animated verticalAlign='middle'>
    {
        props.members.map((x, i) =>{
            return(

                    <List.Item key={i}>
                        <Image avatar src={logoAnonymous} />
                        <List.Content>
                        <List.Header className={defaultStyle.textColor1}>{x}</List.Header>
                            <span className={defaultStyle.textColor4}>{x==props.ownerTeam ? 'admin' : 'member'}</span>
                        </List.Content>
                    </List.Item>

            )
        })
    }
    </List>
      </div>)
}

export default ListMember;

import React from 'react';
import { Button, Card} from 'semantic-ui-react';

const CardTeams = (props) => {
    const visibility = (x)=>{
        if(x.visibilityTeam){
            return(<Card.Meta>public</Card.Meta>)
        }else{
            return(<Card.Meta>private</Card.Meta>)
        }
    }
    
    return (
        <div>
        <Card.Group>
            {props.teams.map(x=>{return(
                <div key={x._id}>
                <Card>
                    <Card.Content>
                        <Card.Header>{x.nameTeam}</Card.Header>
                        {visibility(x)}
                    </Card.Content>
                    <Card.Content extra>
                        <div className='link team button'>
                            <Button>Boards</Button>
                            <Button>Members</Button>
                            <Button>Settings</Button>
                        </div>
                    </Card.Content>
                </Card>
                </div>
            )})}
        </Card.Group>
        </div>
    )

}

export default CardTeams;

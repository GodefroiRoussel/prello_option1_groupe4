import React from 'react';
import { Button, Card} from 'semantic-ui-react';
import { Link, browserHistory } from 'react-router';
import style from "../CardTeams/cardTeams.styl";

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
                <Card className={style.cardTeam}>
                    <Card.Content>
                        <Card.Header className={style.cardTeamHeader}>{x.nameTeam}</Card.Header>
                        <Card.Meta className={style.cardTeamMeta}> {visibility(x)}</Card.Meta>
                    </Card.Content>

                    <Card.Content extra>
                        <div className='ui three buttons'>
                            <Button onClick={() => browserHistory.push({pathname: '/team', state:{team: x._id}})}>Boards</Button>
                            <Button onClick={() => browserHistory.push({pathname: '/team', state:{team: x._id}})}>Members</Button>
                            <Button onClick={() => browserHistory.push({pathname: '/team', state:{team: x._id}})}>Settings</Button>
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

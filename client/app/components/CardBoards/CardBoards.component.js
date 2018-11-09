import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Tab, Card, Image, List, Button , Header, Input, Loader, Dropdown, Modal, Icon} from 'semantic-ui-react';
import defaultStyle from "../../styles/settings.styl";
import style from './cardBoards.styl';
import cssModules from 'react-css-modules';

const CardBoards = (props) => {


    const boardsIsFilled = ()=>{
        if(props.boards){
            return (
                <div>
                    {props.boards.map(x => {
                        if(x.teams){
                            if(x.teams.includes(props.team)){
                                return(<Card key={x._id} className={style.cardBoard} onClick={() => handleOnClick(x._id)}>
                                    <Card.Content>
                                        <Card.Header className={style.cardBoardHeader}>{x.titleBoard}</Card.Header>
                                        <Card.Meta className={style.cardBoardMeta}>other infos</Card.Meta>
                                    </Card.Content>
                                </Card>)
                            }
                            else{
                                return <div/>
                            }
                        }
                        else{
                            if(props.team){
                                return <div/>
                            }
                            else{
                                return(<Card key={x._id} className={style.cardBoard} onClick={() => handleOnClick(x._id)}>
                                    <Card.Content>
                                        <Card.Header className={style.cardBoardHeader}>
                                            {x.titleBoard}
                                            <Icon className={defaultStyle.textColor3} name='star' />
                                            <Icon className={defaultStyle.textColor5} name='star' />
                                        </Card.Header>
                                        <Card.Meta className={style.cardBoardMeta}>other infos</Card.Meta>
                                    </Card.Content>
                                </Card>)
                            }
                        }
                    })}
                </div>)
        }
        else{
            return(<div/>)
        }
    }

    const handleOnClick = (id) => {
        browserHistory.push({pathname: '/board', state:{id}});
    }

    const handleAddBoard = (e)=> {
        if(e.key==='Enter'){
            const elem = e.target;
            e.preventDefault();
            if(elem.value){
                if(props.team){
                    props.dispatchFunc({titleBoard: elem.value, user: props.user, team: props.team})
                }
                else{
                    props.dispatchFunc({titleBoard: elem.value, user: props.user});
                }
                elem.value = '';
            }
        }
    }

    return (
    <div>
        <Card.Group>
            {boardsIsFilled()}
            <div className={style.buttonAddBoardTeam}>
            <Input type='text' onKeyPress={handleAddBoard} action='Add' placeholder='Add a Board'></Input>
            </div>
        </Card.Group>
      </div>
      )

}

export default cssModules(CardBoards, style);

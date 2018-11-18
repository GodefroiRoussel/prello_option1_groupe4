import React from 'react';
import { browserHistory } from 'react-router';
import { Form, Card, Button , Input, Icon, Grid} from 'semantic-ui-react';
import defaultStyle from "../../styles/settings.styl";
import style from './cardBoards.styl';
import cssModules from 'react-css-modules';
import CardModal from "../../containers/CardModal/CardModal";

const CardBoards = (props) => {


    const boardsIsFilled = ()=>{
        if(props.boards){
            return (
                <div>
                    <Card.Group>
                        {props.boards.map(x => {
                            if(x.teams){
                                if(x.teams.includes(props.team)){
                                    return(<Card key={x._id} className={style.cardBoard} onClick={() => handleOnClick(x._id)}>
                                        <Card.Content>
                                            <Card.Header className={style.cardBoardHeader}>
                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column  width={8} floated='left'>
                                                            {x.titleBoard}
                                                        </Grid.Column>
                                                        <Grid.Column floated='right'  width={2} textAlign='right'>
                                                            {true ? (<Icon className={defaultStyle.textColor5} name='star' />) : (<Icon className={defaultStyle.textColor3} name='star' />)}
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Card.Header>
                                            <Card.Meta className={style.cardBoardMeta}>other infos</Card.Meta>
                                        </Card.Content>
                                    </Card>)
                                }
                                else{
                                    return(<Card key={x._id} className={style.cardBoard} onClick={() => handleOnClick(x._id)}>
                                        <Card.Content>
                                            <Card.Header className={style.cardBoardHeader}>
                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column  width={8} floated='left'>
                                                            {x.titleBoard}
                                                        </Grid.Column>
                                                        <Grid.Column floated='right'  width={2} textAlign='right'>
                                                            {true ? (<Icon className={defaultStyle.textColor5} name='star' />) : (<Icon className={defaultStyle.textColor3} name='star' />)}
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Card.Header>
                                            <Card.Meta className={style.cardBoardMeta}>other infos</Card.Meta>
                                        </Card.Content>
                                    </Card>)
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
                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column  width={8} floated='left'>
                                                            {x.titleBoard}
                                                        </Grid.Column>
                                                        <Grid.Column floated='right'  width={2} textAlign='right'>
                                                            {true ? (<Icon className={defaultStyle.textColor5} name='star' />) : (<Icon className={defaultStyle.textColor3} name='star' />)}
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </Card.Header>
                                            <Card.Meta className={style.cardBoardMeta}>other infos</Card.Meta>
                                        </Card.Content>
                                    </Card>)
                                }
                            }
                        })}
                    </Card.Group>
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
                <Form onSubmit={props.handleAddBoardOnClick}>
                <Form.Field className={style.inputForm}>
                    <Form.Group inline>
                        <Form.Field>
                            <Input type='text' onKeyPress={handleAddBoard} onChange={props.changeNameBoard} placeholder='Add a Board'></Input>
                        </Form.Field>
                        <Form.Field>
                            <Button type="submit">Add</Button>
                        </Form.Field>

                    </Form.Group>


                </Form.Field>
                </Form>
            </div>
        </Card.Group>
      </div>
      )

}

export default cssModules(CardBoards, style);

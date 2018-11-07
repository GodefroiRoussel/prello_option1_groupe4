import React from 'react';
import { connect } from 'react-redux';
import { Tab, Card, Image, List, Button , Header, Input, Loader, Dropdown, Modal, Icon} from 'semantic-ui-react';
import defaultStyle from "../../styles/settings.styl";
import style from './cardBoards.styl';
import cssModules from 'react-css-modules';

const CardBoards = (props) => {
    return (
    <div style={style.root}>
        <Card.Group>
            {props.boards.map(x => {
                    return (
                    <Card key={x} className={style.cardBoard}>
                        <Card.Content>
                            <Card.Header className={style.cardBoardHeader}>{x}</Card.Header>
                            <Card.Meta className={style.cardBoardMeta}>other infos</Card.Meta>
                        </Card.Content>
                    </Card>)
                })
            }
            <div className={style.buttonAddBoardTeam}>
                <Button  icon>
                    <Icon name='add' />
                </Button>
            </div>


        </Card.Group>
      </div>
      )
}

export default cssModules(CardBoards, style);

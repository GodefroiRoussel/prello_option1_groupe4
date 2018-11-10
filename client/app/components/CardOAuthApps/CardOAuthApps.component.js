import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Tab, Card, Image, List, Button, Header, Input, Loader, Dropdown, Modal, Icon } from 'semantic-ui-react';
import defaultStyle from "../../styles/settings.styl";
import style from '../CardBoards/cardBoards.styl';
import cssModules from 'react-css-modules';

const CardOAuthApp = (props) => {

    const boardsIsFilled = () => {
        if (props.clients) {
            return (
                <div>
                    {props.clients.map(client => {
                        return (
                            // TODO: CSS + if time add Logo of Client
                            <Card key={client._id} className={style.cardBoard} onClick={() => handleOnClick(client._id)}>
                                <Card.Content>
                                    <Card.Header className={style.cardBoardHeader}>{client.nameClient}</Card.Header>
                                    <Card.Meta className={style.cardBoardMeta}>{client.descriptionClient}</Card.Meta>
                                </Card.Content>
                            </Card>
                        )
                    })}
                </div>)
        }
        else {
            return (<div />)
        }
    }

    const handleOnClick = (id) => {
        browserHistory.push({ pathname: '/oauth/client', state: { id } });
    }

    return (
        <div>
            <Card.Group>
                {boardsIsFilled()}
            </Card.Group>
        </div>
    )

}

export default cssModules(CardOAuthApp, style);

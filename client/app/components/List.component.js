import React from 'react';
import {Button, Card, Grid} from "semantic-ui-react";
import CardModal from "../containers/CardModal/CardModal";
import { Link, browserHistory } from 'react-router'

const ListComponent = ({titleList}) => {

    return (
        <Card.Content>
            <Card.Header>
                <Grid width={16}>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            {titleList}
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Button size={"mini"} onClick={() => browserHistory.push('/card')}>
                                ...
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card.Header>
            <Card.Description>
                Cards
            </Card.Description>
        </Card.Content>
    )
}

export default ListComponent;
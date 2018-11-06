import React from 'react';
import {Card, Feed} from "semantic-ui-react";

const ListComponent = (props) => (

    <Card>
            <Card.Header>{props.titleList}</Card.Header>
        <Card.Content>
            <Feed>
                <Feed.Content>
                    <div>{props.titleList}</div>
                </Feed.Content>
            </Feed>
        </Card.Content>
    </Card>
)

export default ListComponent;
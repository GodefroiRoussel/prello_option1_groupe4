import React from 'react';
import {Form, Input} from "semantic-ui-react";
import {callAddCard} from "../objects/List/ListAsyncActions";


const AddCardComponent = (props) => {

const handleCreateCard = (e) => {
    console.log(e.target.cardName.value);
    const elem = e.target;
    e.preventDefault();
    if (elem.cardName.value) {
        console.log('coucou toi')
        callAddCard(elem.cardName.value);
        elem.cardName.value = '';
    }
}

    return (
            <Form onSubmit={handleCreateCard}>
                <Form.Field>
                    <Input name="cardName" type="text" placeholder="card name"/>
                </Form.Field>
            </Form>
    )


};


export default AddCardComponent;
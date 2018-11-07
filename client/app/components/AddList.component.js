/*import React from 'react';
import {Form, Input} from "semantic-ui-react";


const AddListComponent = (props) => {

    const handleCreateList = (e) => {
        console.log(e.target.listName.value);
        const elem = e.target;
        e.preventDefault();
        if (elem.listName.value) {
            //dispatchCallEditBoard(elem.boardname.value);
            elem.listName.value = '';
        }
    }

    return (
        <Form onSubmit={handleCreateList}>
            <Form.Field>
                <Input name="listName" type="text" placeholder="card name"/>
            </Form.Field>
        </Form>
    )


};


export default AddListComponent;*/
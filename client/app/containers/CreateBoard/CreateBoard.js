import React from 'react';
// import cssModules from 'react-css-modules';
import {Grid, Form, Button, Icon} from 'semantic-ui-react';
import {callEditBoard} from "../../objects/CreateBoard/CreateBoardAsyncAction";
import {connect} from "react-redux";


const CreateBoard = (props) => {
    const { dispatchCallEditBoard } = props;
    const handleCreateBoard = (e) => {
        console.log(e.target.boardname.value);
        const elem = e.target;
        e.preventDefault();
        if (elem.boardname.value) {
            console.log("coucou");
            dispatchCallEditBoard(elem.boardname.value);
            elem.boardname.value = '';
        }

    };
    const form = () => (
        <Grid centered >
            <Grid.Column mobile={16} tablet={8} computer={4}>
                <Form onSubmit={handleCreateBoard}>
                    <Form.Field>
                        <label>boardname</label>
                        <input name="boardname" type="text"/>
                    </Form.Field>
                    <Form.Field>
                        <Button fluid animated='fade'>
                            <Button.Content hidden>Create</Button.Content>
                            <Button.Content visible>
                                <Icon name='arrow right' />
                            </Button.Content>
                        </Button>
                    </Form.Field>
                </Form>
            </Grid.Column>
        </Grid>

    );
    return <div>{form()}</div>;
};

CreateBoard.propTypes = {
    dispatchCallEditBoard: React.PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    board: state.board,
});

const mapDispatchToProps = dispatch => ({
    dispatchCallEditBoard: data => dispatch(callEditBoard(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);
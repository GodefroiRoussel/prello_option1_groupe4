import React from 'react';
import { connect } from 'react-redux';
import AddCardComponent from '../../components/AddCard.component'

const mapStateToProps = (state, props) => {
    return ({
        listId: state.addcards[props]
    })
}

const mapDispatchToProps = dispatch => ({
    //dispatchCallEditBoard: data => dispatch(callEditBoard(data)),
});

export default connect(mapStateToProps)(AddCardComponent)

import React from 'react';
import { connect } from 'react-redux';
import AddCardComponent from '../../components/AddCard.component'
//import {callAddCard} from "../../objects/List/ListAsyncActions";

const mapStateToProps = (state, props) => {
    return ({
        //listId: state.addcards
    })
}
/*CreateBoard.propTypes = {
    dispatchCallEditBoard: React.PropTypes.func.isRequired,
}*/

const mapDispatchToProps = dispatch => ({
    /*callAddCard: message => {
        dispatch(callAddCard(message));
    }*/
});



export default connect(mapDispatchToProps,mapStateToProps)(AddCardComponent)

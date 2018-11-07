/*import React, {Component} from 'react';
import { connect } from 'react-redux';
import AddList from '../../components/AddList.component'
import AddCardComponent from "../List/AddCard";

class AddList extends Component {
    render () {
        return (
            <div>
                    <div>
                        <a onClick={this.displayAddCard}>
                            + Add card
                        </a>
                    </div>
                    {(this.state.addCardInput) ?
                        (
                            <AddList/>
                        )
                        :
                        null
                    }
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return ({
        board: state.addlists[props]
    })
}

const mapDispatchToProps = dispatch => ({
    //dispatchCallEditBoard: data => dispatch(callEditBoard(data)),
});

export default connect(mapStateToProps)(AddList)
*/
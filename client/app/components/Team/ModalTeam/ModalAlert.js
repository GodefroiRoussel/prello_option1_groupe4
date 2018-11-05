import React, {Component} from "react";
import {connect} from "react-redux";
import {Modal,} from "semantic-ui-react";

import {hideModal} from "./ModalActions";

const actions = {hideModal};

export class TestModal extends Component {
    render() {
        return (
            <Modal
                closeIcon="close"
                open={true}
                onClose={this.props.hideModal}
            >
                <Modal.Header>Modal #1</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <p>This is a modal dialog.  Pretty neat, huh?</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default connect(null, actions)(TestModal);
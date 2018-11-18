import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import {
    Image,
    List,
    Button,
    Form,
    Modal,
    Input
} from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import style from './cardModal.styl';
import defaultStyle from "../../styles/settings.styl";
import ProfileAnonymous from '../../styles/assets/hanonyme.png'
import {callAddMemberAssigned, callDeleteMemberAssigned} from "../../objects/Card/CardAsyncActions";

class CardModalMembers extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            openModal: false,
            members:[{
                id: "1",
                firstName: "Charles",
                LastName: "Dupont",
                nickname: "charlyd"
            },{
                id: "2",
                firstName: "Maurice",
                LastName: "Tarpien",
                nickname: "TarpM"

            }]
        };
    }

    toggleModalMembers = () => this.setState(state => ({ openModal: !state.openModal }));


    // ATTENTION : e.target.value va etre l id du membre
    addContributorCard = (e) => {
        if(e.target.value) {
            this.props.dispatchCallAddMemberToCard({idCard: this.state.card._id, idMember: e.target.value})
        }
    }

    deleteContributorCard = (e) => {
        if(e.target.value) {
            this.props.dispatchCallDeleteMemberToCard({idCard: this.state.card._id, idMember: e.target.value})
        }

    }

    render() {
        const { openModal } = this.state;
        console.log(this.props)
        return (
            <Modal
                trigger={
                    <Button onClick={this.toggleModalMembers} fluid animated='fade' className={style.settingsButtons} >
                        <Button.Content hidden>Manage card workers</Button.Content>
                        <Button.Content visible>
                            Members
                        </Button.Content>
                    </Button>
                }
                size={'tiny'}
                centered={false}
                open={openModal}
                closeIcon
                onClose={this.toggleModalMembers}>
                <Modal.Header className={defaultStyle.textColor1}>
                    Manage members
                </Modal.Header>
                <Modal.Content className={style.modalContentCutomize}>
                    <Modal.Description>
                        <List verticalAlign='middle'>
                            <List.Item>
                                <List.Content floated='right'>
                                    <Button>Delete</Button>
                                </List.Content>
                                <Image avatar src={ProfileAnonymous} />
                                <List.Content>
                                    <List.Header>Helen</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content floated='right'>
                                    <Button>Delete</Button>
                                </List.Content>
                                <Image avatar src={ProfileAnonymous} />
                                <List.Content>
                                    <List.Header>Christian</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content floated='right'>
                                    <Button>Delete</Button>
                                </List.Content>
                                <Image avatar src={ProfileAnonymous} />
                                <List.Content>
                                    <List.Header>Daniel</List.Header>
                                </List.Content>
                            </List.Item>
                        </List>
                        <Form onSubmit={this.toggleEditCardTitle}>
                            <Form.Field className={style.inputEditTitle}>
                                <label>Add a new worker</label>
                                <Input list='languages' action='Add' name="titleList" type="text" placeholder={"Search by nickname"}/>
                                
                            </Form.Field>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>

        );
    }


}

CardModalMembers.defaultProps = {
};

function mapStateToProps(state, ownProps){
    return{
        card: state.cards.find(el => el._id==ownProps.idCard),
        board: state.boards.find(el=> el._id==ownProps.idBoard)
    }
};

const mapDispatchToProps = (dispatch)=> ({
    dispatchCallAddMemberToCard: data => dispatch(callAddMemberAssigned(data)),
    dispatchCallDeleteMemberToCard: data => dispatch(callDeleteMemberAssigned(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModalMembers);

//export default cssModules(CardModalMembers, style);
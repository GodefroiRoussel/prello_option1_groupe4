import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import {
    Tab,
    Card,
    Image,
    List,
    Button,
    Form,
    TextArea,
    Grid,
    Segment,
    Select,
    Modal,
    Header,
    Divider,
    Icon, Input,
    CustomCalendar
} from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import style from './cardModal.styl';
import defaultStyle from "../../styles/settings.styl";
import classNames from 'classnames'
import ProfileAnonymous from '../../styles/assets/hanonyme.png';


class CardModalDeadlines extends React.Component {

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

    toggleModalDeadlines = () => this.setState(state => ({ openModal: !state.openModal }));


    render() {
        const { openModal } = this.state;
        return (

            <Modal
                trigger={
                    <Button onClick={this.toggleModalDeadlines} fluid animated='fade' className={style.settingsButtons} >
                        <Button.Content hidden>End dates</Button.Content>
                        <Button.Content visible>
                            Deadlines
                        </Button.Content>
                    </Button>
                }
                size={'tiny'}
                centered={false}
                open={openModal}
                closeIcon
                onClose={this.toggleModalDeadlines}>
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
                        <Form>
                            <Form.Field>

                            </Form.Field>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>

        );
    }


}

/*
function mapStateToProps(state, ownProps){
    return{

    }
};

const mapDispatchToProps = (dispatch)=> ({

});*/

//export default connect(mapStateToProps, mapDispatchToProps)(cssModules(CardModal, style));

export default cssModules(CardModalDeadlines, style);
import React from 'react';
// import cssModules from 'react-css-modules';
import {Menu, Image, Grid, Item, Button, Icon} from 'semantic-ui-react';
import {connect} from "react-redux";
import {callGetBoard} from './BoardAsyncActions';


const Board = (match, props) => {

    const {id} = props
    console.log(match.params.idBoard);
    console.log(callGetBoard(match.params.idBoard))
    //console.log(callGetBoard(match.params.idBoard))
    //const name = callGetBoard(match.params.idBoard).name;

    //state = {}

    //const handleItemClick = (e, { name }) => ({ activeItem: name })

    /*render() {
        const { activeItem } = this.state*/

    const board = () => (
        <Menu stackable width={16}>
            <Menu.Item
            name='azertyuiop'>
            </Menu.Item>

            <Menu.Item>
            <Icon name='star outline'></Icon>
            </Menu.Item>

            <Menu.Item
                name='Visibility'
                //active={activeItem === 'testimonials'}
                //onClick={this.handleItemClick}
            >
                Visibility
            </Menu.Item>

            <Menu.Item name='parameters'
                //onClick={this.handleItemClick}>
                >
                Board parameters
            </Menu.Item>
        </Menu>
    );
    return <div>{board()}</div>;
};

Board.propTypes = {
    //dispatchCallGetBoard: React.PropTypes.func.isRequired,
    //id: React.PropTypes.string.isRequired,
    //name: React.PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
    //dispatchCallGetBoard: _id => dispatch(callGetBoard(_id)),
});


export default connect(mapDispatchToProps)(Board);

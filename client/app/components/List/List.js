import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { Button, Icon } from 'semantic-ui-react';
import { callRemoveList } from './ListAsyncActions';


const List = (props) => {

    const {id, dispatchCallRemoveList} = (props);

    const handleRemove = () => {
        dispatchCallRemoveList(id);
      };

    const list = () => {
        return (
            <div>
                <div>
                    <input
                    type="text"
                    placeholder="Add todo item ..."
                    />
                </div>
                <div>
                    <Button onClick={handleRemove} icon>
                        <Icon name='delete' />
                    </Button>
                </div>
            </div>
        );
    };
    return <div>{list()}</div>;
};

List.propTypes ={
    id: React.PropTypes.string.isRequired,
    dispatchCallRemoveList: React.PropTypes.func.isRequired,
};

  const mapStateToProps = () => ({});
  const mapDispatchToProps = dispatch => ({
      dispatchCallRemoveList: _id => dispatch(callRemoveList(_id)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(List);
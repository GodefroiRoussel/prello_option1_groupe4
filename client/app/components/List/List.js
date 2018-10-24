import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';

const List = () => {

    const list = () => {
        return (
            <div>
                <div>
                    <input
                    type="text"
                    styleName="add-todo-input"
                    placeholder="Add todo item ..."
                    />
                </div>
            </div>
        );
    };
    return <div>{list()}</div>;
};

  const mapStateToProps = () => ({});
  const mapDispatchToProps = () => ({});
  
  export default connect(mapStateToProps, mapDispatchToProps)(List);
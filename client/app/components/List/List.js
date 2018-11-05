import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { callRemoveList } from './ListAsyncActions';
import Card from "semantic-ui-react/dist/commonjs/views/Card/Card";
import Feed from "semantic-ui-react/dist/commonjs/views/Feed/Feed";
import styleDefault from '../../styles/settings.styl';
import style from './List.styl';


const List = (props) => {

    const l = props;

    const list = () => (
        <Card>
            <Card.Content>
                <Card.Header>{l.titleList}</Card.Header>
            </Card.Content>
            <Card.Content>
                <Feed>
                    <Feed.Content>
                        <div>Cards</div>
                    </Feed.Content>
                </Feed>
            </Card.Content>
        </Card>
    )
    return <div className={style.bundList}>{list()}</div>;
};

List.propTypes ={
};

  const mapStateToProps = () => ({});
  const mapDispatchToProps = dispatch => ({
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(List);
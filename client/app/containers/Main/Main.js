import React from 'react';
import cssModules from 'react-css-modules';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import Alert from 'react-s-alert';
import style from './main.styl';
import Navbar from './../../components/Navbar/Navbar'
import PropTypes from 'prop-types';
import {
    Container
} from 'semantic-ui-react'

const mainBox = {
    marginTop: '1em',
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    minHeight: '50em'
}

const Main = (props) => {
  const { children } = props;

  return (
    <div>
      <Navbar/>
        <div style={mainBox}>
            {children}
        </div>
      <Alert position="top-right" effect="jelly" />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default cssModules(Main, style);
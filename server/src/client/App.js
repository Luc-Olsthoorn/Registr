import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import { SideMenu } from './SideMenu.js'; 
import { Home } from './Home.js';

const styles = theme => ({
  content: {
    flexGrow: 1,
  }
});
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div style={{display: 'flex', overflow:'hidden'}}>
        <SideMenu/>
        <main className={this.props.classes.content}>
          <Home/>

        </main>
       
      </div>
    )
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};
const MainWithStyles = withStyles(styles)(Main);
const App = connect()(MainWithStyles);

export { App }
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import { SideMenu } from './SideMenu.js'; 
import { Home } from './Home.js';

const styles = theme => ({
  content: {
    flexGrow: 1,
  },
  mainView: {
    overflow:'hidden',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'inherit'
    }
  }
  

});
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (
      <div className={this.props.classes.mainView}>
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
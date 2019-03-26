import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import TextField from "@material-ui/core/TextField";
import logo from './assets/logo.png';
import LinearProgress from '@material-ui/core/LinearProgress';

import {Search} from'./Search.js';
import {CalendarFilter} from'./CalendarFilter.js';


const drawerWidth = 340;
export { drawerWidth };
const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
    //background: "#1B1C1D"
  },
  toolbar: theme.mixins.toolbar,
});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        > 

        
        <Grid
        className={this.props.classes.root}
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={8}
        style={{paddingLeft:20, paddingRight:20}}
      >
        <Grid item xs={12}>
        {this.props.loading?(<LinearProgress style={{width:"300px"}} color="secondary" variant="query" />):(<div style={{height:"5px"}}/>)}
        </Grid>
        <Grid item xs={12}>
          <img  src={logo} style={{width:drawerWidth-40}} />
        </Grid>
        <Grid item xs={12}>
        <Typography  variant="subtitle1"><b>{this.props.totalCalendars} </b>Options generated <b>{this.props.numFiltered}</b> Filtered</Typography>
        <Typography  variant="subtitle1"><b>{this.props.numBookmarked} </b>Bookmarked</Typography>
        </Grid>
        <Grid item xs={12}>
          {/*<TextField
          select
          id="standard-name"
          label="Semester"
          type="search"
          margin="normal"
        />*/}
          <Typography  variant="caption">Fall 2019</Typography>

        </Grid>
        {this.props.courseInput.map((data, key)=>{
          return(
          <Grid item xs={12}>
            <Search key={key} data={data} index={key}/>
          </Grid>
          )
         })}
        
        <Grid item xs={6}>
          <Fab 
          color="primary" 
          size="small" 
          aria-label="Add" 
          variant="extended"
          onClick={()=>this.props.dispatch({type:"ADD_COURSE_INPUT"})}>
            <AddIcon  />
            Add More
          </Fab>
        </Grid>
        <Grid item xs={12}>
        <CalendarFilter/>
        </Grid>
        </Grid>
        
        </Drawer>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading,
    courseInput: state.options.courseInput,
    numFiltered: state.numFiltered,
    totalCalendars: state.calendars.length,
    numBookmarked: state.numBookmarked,
  }
}
const withStylesApp = withStyles(styles)(App);
const SideMenu = connect(mapStateToProps, null)(withStylesApp);
export { SideMenu }

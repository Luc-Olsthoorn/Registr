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
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import Icon from '@material-ui/core/Icon';
import TextField from "@material-ui/core/TextField";
import logo from './assets/logo.png';
import LinearProgress from '@material-ui/core/LinearProgress';

import {Search} from'./Search.js';
import {CalendarFilter} from'./CalendarFilter.js';
import {query} from './services/queryservice.js';


const drawerWidth = 340;
export { drawerWidth };
const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }

  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      position:'relative',
      overflowY:'inherit'
    }
    //background: "#1B1C1D"
  },
  toolbar: theme.mixins.toolbar,
  formControl: {
    margin: theme.spacing.unit,
  },
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
        <Typography  variant="caption"><b>{this.props.totalCalendars} </b>Options generated <b>{this.props.numFiltered}</b> Filtered</Typography>
        <Typography  variant="caption"><b>{this.props.numBookmarked} </b>Bookmarked</Typography>
        </Grid>
        <Grid item xs={12}>
        <FormControl>
          <Select
            id="standard-name"
            label="Semester"
            type="search"
            margin="normal"
            className ={this.props.classes.formControl}
            value={this.props.semesterVal}
            onChange={(event)=>this.props.dispatch({type:"CHANGE_SEMESTER", data:event.target.value})}
          >
            {this.props.choices.map((choice, key)=>
              <MenuItem value={choice.val}>{choice.name}</MenuItem>
            )}
          </Select>
        </FormControl>
         

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
          color="secondary" 
          size="small" 
          aria-label="Add" 
          variant="extended"
          onClick={()=>this.props.dispatch({type:"ADD_COURSE_INPUT"})}>
            
            Add More
            <AddIcon  />
          </Fab>
        </Grid>
        <Grid item xs={6}>
          <Fab 
          color="primary" 
          size="small" 
          aria-label="Add" 
          variant="extended"
          onClick={()=>query.searchAllCourses()}>
            
            
            Search All 
            <SearchIcon  />
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
    choices: state.choices,
    semesterVal:state.semesterVal
  }
}
const withStylesApp = withStyles(styles)(App);
const SideMenu = connect(mapStateToProps, null)(withStylesApp);
export { SideMenu }

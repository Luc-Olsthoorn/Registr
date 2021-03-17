import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {exampleData} from './services/UF.js'
import {Calendar} from './Calendar.js';
import {CalendarFilter} from './CalendarFilter.js';

import SelectCourse from './assets/SelectCourse.png';
import SelectSemester from './assets/SelectSemester.png';
const styles = theme => ({
   root: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
  }
});
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
   return(
       <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={8}
        className={this.props.classes.root}
      >
         <Grid item xs={12}>
            <Typography variant="h2" color="textSecondary" gutterBottom style={{textAlign:"center", paddingTop:"10%"}}>
               <i>Find your perfect schedule on Registr.</i>

            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{textAlign:"center", paddingBottom:"20%"}}>
                Version 2.1.0
            </Typography>
         </Grid>
         <Grid item xs={12}>
            <Typography variant="h3" color="textSecondary" gutterBottom style={{textAlign:"center"}}>
               <i>Step 1: Select your semester</i>
            </Typography>
            <div style={{textAlign:"center", width:"100%" ,paddingBottom:"10%"}}>
              <img  src={SelectSemester} style={{width:300}} />
            </div>
         </Grid>
         <Grid item xs={12}>
            <Typography variant="h3" color="textSecondary" gutterBottom style={{textAlign:"center"}}>
               <i>Step 2: Select your courses</i>

            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{textAlign:"center"}}>
               Select by either <b>course code</b> (ex. mac2311), or by <b>course number</b> (ex. 11091)
            </Typography>
            <div style={{textAlign:"center" ,width:"100%", paddingBottom:"10%"}}>
              <img  src={SelectCourse} style={{width:300}} />
            </div>
         </Grid>
         <Grid item xs={12}>
            <Typography variant="h3" color="textSecondary" gutterBottom style={{textAlign:"center"}}>
               <i>Step 3: Filter</i>
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom style={{textAlign:"center"}}>
               You can filter by any time on any day
            </Typography>
         </Grid>
         <Grid item xs={6} style={{paddingBottom:"10%"}}>
            <CalendarFilter />
         </Grid>
         <Grid item xs={12}>
            <Typography variant="h3" color="textSecondary" gutterBottom style={{textAlign:"center"}}>
               <i>Step 4: View the options</i>
            </Typography>
             <Typography variant="body1" color="textSecondary" gutterBottom style={{textAlign:"center"}}>
               You can click on the colored class for more information. If you want just this <b>section</b>, you can <b>pin</b> it
               <br/>
               You can also bookmark schedules for later viewing
            </Typography>
         </Grid>
         <Grid item xs={8} style={{paddingBottom:"10%"}}>
            <Calendar calendar = {exampleData} />
         </Grid>
         <Grid item xs={6}>
            <div style={{paddingBottom:"40%"}}>
                <Typography variant="h4" gutterBottom color="textSecondary">Whats new?</Typography>
                <Typography variant="body1" color="textSecondary" >2.1.4 Fall/Summer 2021 😩</Typography>
                <Typography variant="body1" color="textSecondary" >2.1.3 Fall/Summer 2020 baby (share this page to see daddy)</Typography>
                <Typography variant="body1" color="textSecondary" >2.1.2 Spring 2020 baby</Typography>
                <Typography variant="body1" color="textSecondary" >2.1.1 Minor bug fixes, https implemented</Typography>
                <Typography variant="body1" color="textSecondary" >2.1.0 Section pinning now available</Typography>
                <Typography variant="body1" color="textSecondary" >2.0.12 New landing page and tutorial</Typography>
                <Typography variant="body1" color="textSecondary" >2.0.11 Bug fix of deleting inproper section</Typography>
                <Typography variant="body1" color="textSecondary" >2.0.10 Error reporting is better now</Typography>
                <Typography variant="body1" color="textSecondary" >2.0.9 Simple UX fixes</Typography>
                <Typography variant="body1" color="textSecondary" >2.0.8 Times now available, and are properly reflected for summer</Typography>
                <Typography variant="body1" color="textSecondary" >2.0.7 Select for semester</Typography>
                <Typography variant="body1" color="textSecondary" >2.0.6 Update UX for search</Typography>
                <Typography variant="body1" color="textSecondary" >2.0.5 Mobile support</Typography>
                <Typography variant="body1" color="textSecondary" >2.0.4 Added bookmarking</Typography>
                <Typography variant="body1" color="textSecondary" >2.0.3 Can't have duplicate days</Typography>
                <Typography variant="body1" color="textSecondary" >2.0.2 Filter out web classes</Typography>
                <Typography variant="body1" color="textSecondary" >2.0.1 Web class support</Typography>
                <Typography variant="body1" color="textSecondary" >2.0.0 Completley rewritten for better performance, and less bugs</Typography>

            </div>
         </Grid>

         <Grid item xs={6} >
            <Typography variant="h4" color="textSecondary" gutterBottom>Like to code?</Typography>
            <Typography variant="body1" color="textSecondary" >Great! This project is <a  href ="https://github.com/Luc-Olsthoorn/Registr/">open sourced</a> and we are always looking for more help! </Typography>
            <Typography variant="body1" color="textSecondary" >You can also submit bugs <a  href="https://github.com/Luc-Olsthoorn/Registr/issues">here</a></Typography>
            <Typography variant="body1" color="textSecondary" ><a  href="https://github.com/Rolstenhouse/uf_api">Or build your own UF app</a></Typography>
            <Typography variant="body1" color="textSecondary" >If you have a bug or ui/ux request ping me @ me@lucolsthoorn.com</Typography>
         </Grid>
      </Grid>
      )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
const AppWithStyles = withStyles(styles)(App);
const LandingPage = connect()(AppWithStyles);

export { LandingPage }

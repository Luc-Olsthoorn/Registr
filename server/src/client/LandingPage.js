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
            <Typography variant="h2" color="textSecondary" gutterBottom style={{textAlign:"center", paddingTop:"10%", paddingBottom:"40%"}}>
               <i>Find your perfect schedule on Registr.</i>
            </Typography>
         </Grid>
         <Grid item xs={8} style={{paddingBottom:"40%"}}>
            <Calendar calendar = {exampleData} />
         </Grid>
         <Grid item xs={4}>
            <div style={{paddingBottom:"40%"}}>
            <Typography variant="h4" gutterBottom color="textSecondary">Whats new?</Typography>
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
            <Typography variant="h4" color="textSecondary" gutterBottom>Generate possible schedules</Typography> 
            <Typography variant="body1" color="textSecondary" >
               Given as many classes as you want, we will find all the different possible schedule combinations for you
            </Typography> 
        
         </Grid>
         <Grid item xs={6} style={{paddingBottom:"40%"}}>   
            <Typography variant="h4" color="textSecondary" gutterBottom>Hate morning classes?</Typography> 
            <Typography variant="body1" color="textSecondary" >Filters allow you to select what times you want your courses</Typography>
         </Grid>
         <Grid item xs={6}>
            <CalendarFilter/>
         </Grid>
         <Grid item xs={12} style={{paddingBottom:50}}>
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

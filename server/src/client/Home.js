import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import InfiniteScroll from 'react-infinite-scroller';

import {Calendar} from './Calendar.js';
import {LandingPage} from './LandingPage.js';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1,
  }
});
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if (this.props.numFiltered == this.props.totalCalendars && this.props.totalCalendars!=0){
      return (<Typography variant="h2" color="textSecondary" gutterBottom style={{textAlign:"center", paddingTop:100, paddingBottom:50}}>
OOPS YA FILTERED EVERYTHING</Typography>)
    }
    else if(this.props.calendars.length>0){
      return (
        
        <div className={this.props.classes.root}>
        <FormControlLabel control={<Switch 
          value={this.props.bookMarkOnly}
          onChange={()=>this.props.dispatch({type:"TOGGLE_BOOK_MARK", data:!this.props.bookMarkOnly})}
            />} label="Show only Bookmarked" />
        <InfiniteScroll
              pageStart={0}
              loadMore={()=>this.props.dispatch({type:"INCREASE_NUM_CALENDARS"})}
              hasMore={this.props.hasMore}
              loader={<div className="loader" key={0}>Loading ...</div>}
            >
          {this.props.calendars.map((Calendardata, key)=><Calendar calendar={Calendardata} key={key}/>)}
          </InfiniteScroll>
        </div>

      )
    }else{
      return(
        <LandingPage/>
        );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    calendars: state.filteredCalendars.slice(0,state.numCalendarsToDisplay),
    pinnedCalendars: state.pinnedCalendars,
    hasMore: state.numCalendarsToDisplay <= state.filteredCalendars.length,
    numFiltered: state.numFiltered,
    totalCalendars: state.calendars.length,
    bookMarkOnly: state.bookMarkOnly,
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
const AppWithStyles = withStyles(styles)(App);
const Home = connect(mapStateToProps, null)(AppWithStyles);

export { Home }
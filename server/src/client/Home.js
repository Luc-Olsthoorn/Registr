import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import InfiniteScroll from 'react-infinite-scroller';

import { Calendar } from './Calendar.js';
import { LandingPage } from './LandingPage.js';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 2, // Account for now-missing 8px <body> margin
    paddingRight: theme.spacing.unit * 2,
  }
}));

function HomeComponent(props) {
  const classes = useStyles();

  if (props.numFiltered == props.totalCalendars && props.totalCalendars != 0) {
    return (<Typography variant="h2" color="textSecondary" gutterBottom style={{ textAlign: "center", paddingTop: 100, paddingBottom: 50 }}>
      OOPS YA FILTERED EVERYTHING</Typography>)
  }
  else if (props.calendars.length > 0) {
    return (

      // <div className={classes.root}>
      <div className={classes.root}>
        <FormControlLabel control={<Switch
          value={props.bookMarkOnly}
          onChange={() => props.dispatch({ type: "TOGGLE_BOOK_MARK", data: !props.bookMarkOnly })}
        />} label="Show only Bookmarked" />
        <InfiniteScroll
          pageStart={0}
          loadMore={() => props.dispatch({ type: "INCREASE_NUM_CALENDARS" })}
          hasMore={props.hasMore}
          loader={<div key={0}>Loading ...</div>}
        >
          {props.calendars.map((Calendardata, key) => <Calendar calendar={Calendardata} key={key} />)}
        </InfiniteScroll>
      </div>

    )
  } else {
    return (
      <LandingPage />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    calendars: state.filteredCalendars.slice(0, state.numCalendarsToDisplay),
    hasMore: (!state.bookMarkOnly && (state.numCalendarsToDisplay <= state.filteredCalendars.length)) || (state.bookMarkOnly && (state.numCalendarsToDisplay <= state.numBookmarked)),
    numFiltered: state.numFiltered,
    totalCalendars: state.calendars.length,
    bookMarkOnly: state.bookMarkOnly,

  }
}
HomeComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
const Home = connect(mapStateToProps, null)(HomeComponent);

export { Home }
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';

import { query } from './services/queryservice.js';

import MenuItem from "@material-ui/core/MenuItem";
import Input from '@material-ui/core/Input';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from '@material-ui/core/Tooltip';


import CloseIcon from "@material-ui/icons/Close";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import SearchIcon from '@material-ui/icons/Search';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

import green from '@material-ui/core/colors/green';

const styles = theme => ({
  Card: {
    width: "100%"
  }
});

class App extends React.Component {
  //query.getAllUsers();
  constructor(props) {
    super(props);
    this.verifyInput = this.verifyInput.bind(this);
  }
  verifyInput(e) {
    if (e.keyCode == 13) {//enter pressed
      query.searchCourses(this.props.index);
    }
    if (e.which === 32) { //space pressed
      e.preventDefault();
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.Card}>
        <div style={{ display: 'flex' }}>
          <CardHeader
            style={{ backgroundColor: this.props.color, padding: 4 }}
          />
          <div style={{ display: '' }}>
            <div style={{ display: 'flex' }}>
              <IconButton aria-label="Search">
                <ArrowDropDown />
              </IconButton>
              <Input
                placeholder="Search by Course Code"
                autoFocus={true}
                required={true}
                disableUnderline={!this.props.error}
                onKeyDown={this.verifyInput}
                disabled={this.props.success || this.props.loading}
                value={this.props.text}
                error={this.props.error}
                helperText={"error"}
                onChange={() => this.props.dispatch(
                  {
                    type: "NEW_INPUT_VALUE",
                    data: {
                      index: this.props.index,
                      value: event.target.value
                    }
                  }
                )
                }
              />
              {this.props.search ? (
                <IconButton aria-label="Search" onClick={() => query.searchCourses(this.props.index)}>
                  <SearchIcon />
                </IconButton>) : (null)}
              {this.props.error ? (
                <IconButton aria-label="Search" onClick={() => query.searchCourses(this.props.index)}>
                  <Tooltip

                    open={this.props.error}
                    title={this.props.errorText}
                  >
                    <SearchIcon />
                  </Tooltip>

                </IconButton>) : (null)}
              {this.props.success ? (
                <IconButton style={{ backgroundColor: green }} aria-label="Success" onClick={() => this.props.dispatch({ type: "SEARCH_DELETE", data: { index: this.props.index, courseValue: this.props.courseValue } })} >
                  <ClearIcon />
                </IconButton>) : (null)}
              {this.props.loading ? (
                <IconButton aria-label="Loading">
                  <SearchIcon />
                </IconButton>
              ) : (null)}
            </div>
            <div style={{ display: 'flex', padding: 4 }}>
              <FormGroup style={{ display: 'flex', padding: 4 }}>
                <FormControlLabel control={
                  <Checkbox value={this.props.cbOnline} />} label="Online" />
                <FormControlLabel control={
                  <Checkbox value={this.props.cbHybrid} />} label="Hybrid" />
                <FormControlLabel control={
                  <Checkbox value={this.props.cbTraditional} />} label="Traditional" />
              </FormGroup>
            </div>
          </div>
        </div>
      </Card>


    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state, ownProps) => {
  return {
    text: state.courseInput[ownProps.index].name,
    color: state.courseInput[ownProps.index].color,
    search: state.courseInput[ownProps.index].state == "search",
    success: state.courseInput[ownProps.index].state == "success",
    loading: state.courseInput[ownProps.index].state == "loading",
    error: state.courseInput[ownProps.index].state == "error",
    deleteHover: state.courseInput[ownProps.index].state == "deleteHover",
    courseValue: state.courseInput[ownProps.index].courseValue,
    errorText: state.courseInput[ownProps.index].error,
    cbOnline: state.courseInput[ownProps.index].online,
    cbHybrid: state.courseInput[ownProps.index].hybrid,
    cbTraditional: state.courseInput[ownProps.index].traditional,
  }
}
const AppWithStyles = withStyles(styles)(App);
const Search = connect(mapStateToProps, null)(AppWithStyles);

export { Search }

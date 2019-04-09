import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';

import {query} from './services/queryservice.js';

import MenuItem from "@material-ui/core/MenuItem";
import Input from '@material-ui/core/Input';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
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
    display: 'flex',
    width:"100%"
  }
});

class App extends React.Component {
  //query.getAllUsers();
  constructor(props) {
    super(props);
     this.verifyInput = this.verifyInput.bind(this);
  }
  verifyInput(e){
    if(e.keyCode == 13){//enter pressed
      query.searchCourses(this.props.index);
    }
    if(e.which === 32) { //space pressed
      e.preventDefault();
    }
  }
  render() {
    const { classes } = this.props;

    return (
        <Card className={classes.Card}>
          
          <CardHeader
            style={{ backgroundColor: this.props.color, padding:4 }}
          />
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
          onChange={()=> this.props.dispatch(
              {
                type:"NEW_INPUT_VALUE",
                data:{
                  index:this.props.index,
                  value: event.target.value
                }
              }
            )
          }
          />
          {this.props.search?(
          <IconButton aria-label="Search" onClick={()=>query.searchCourses(this.props.index)}>
            <SearchIcon />
          </IconButton>):(null)}
          {this.props.error?(
          <IconButton aria-label="Search" onClick={()=>query.searchCourses(this.props.index)}>
            <Tooltip
                
                open={this.props.error}
                title={this.props.errorText}
              >
              <SearchIcon />
            </Tooltip>
            
          </IconButton>):(null)}
          {this.props.success?(
          <IconButton style={{backgroundColor:green}} aria-label="Success" onClick={()=>this.props.dispatch({type:"SEARCH_DELETE", data:{index:this.props.index, courseValue:this.props.courseValue}})} >
            <ClearIcon />
          </IconButton>):(null)}
          {this.props.loading?(
            <IconButton aria-label="Loading">
              <SearchIcon />
            </IconButton>
          ):(null)}
   
        </Card>
        

    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state, ownProps) => {
  return {
    text: state.options.courseInput[ownProps.index].name,
    color: state.options.courseInput[ownProps.index].color,
    search: state.options.courseInput[ownProps.index].state == "search",
    success: state.options.courseInput[ownProps.index].state == "success",
    loading: state.options.courseInput[ownProps.index].state == "loading",
    error: state.options.courseInput[ownProps.index].state == "error",
    deleteHover: state.options.courseInput[ownProps.index].state == "deleteHover",
    courseValue: state.options.courseInput[ownProps.index].courseValue,
    errorText: state.options.courseInput[ownProps.index].error,
  }
}
const AppWithStyles = withStyles(styles)(App);
const Search = connect(mapStateToProps, null)(AppWithStyles);

export { Search }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {periods, days} from './services/UF.js';


const styles = theme => ({

});

class App extends React.Component {
  constructor(props) {
    super(props);
     this.generateHeaders = this.generateHeaders.bind(this);
     this.generatePeriods = this.generatePeriods.bind(this);
  }
  generateHeaders(){
    const periodHeader = (<TableCell align="center"  style={{padding:0, borderBottom: "none"}}></TableCell>);
    const dayHeaders = days.map((day, key) =>
       <TableCell key={key} style={{padding:0, color: "#bdbdbd"}} align="center" >{day}</TableCell>
    );
    const headers = [periodHeader, dayHeaders];
    return headers;
  }

  generatePeriods(props){
    //Generate everything
    const rows = periods.map((period, periodKey) =>
       <TableRow key = {periodKey} style={{height:"20px"}}>
        <TableCell style={{padding:0, color:"#bdbdbd", borderRight:" 1px solid", borderBottom: "none"}}>
          {period}
        </TableCell>
         {days.map((day, dayKey) =>{
          let backgroundColor = "#bdbdbd";
          let toggleValue = false;
          if(this.props.filters[period] && this.props.filters[period][day]){
            backgroundColor = "transparent";
            toggleValue = true;
          }

          return(
            <TableCell 
                key={dayKey} 
                style={{padding:0, boxShadow:"inset 0px 0px 0px 1px #bdbdbd", backgroundColor:backgroundColor, color:"white", border:"none"}}
                onClick={()=>this.props.dispatch({type:"FILTER_TOGGLE", data:{day:day,period:period, value:!toggleValue}})}
                onMouseEnter={()=>{
                  if(this.props.filterPushedDown){
                    this.props.dispatch({type:"FILTER_TOGGLE", data:{day:day,period:period, value:!toggleValue}})
                  }
                }}
             />
          )
         }
                
              )
          }
       </TableRow>
    );
    let backgroundColor = "#bdbdbd";
    let toggleValue = false;
    if(this.props.filters["web"] && this.props.filters["web"]["web"]) {
      backgroundColor = "transparent";
      toggleValue = true;
    } 
    let web = <TableRow style={{height:"20px"}}>
      <TableCell style={{padding:0, color:"#bdbdbd", borderRight:" 1px solid", borderBottom: "none"}}>
          Web
        </TableCell>
      <TableCell 
        colSpan={5}
        style={{padding:0, boxShadow:"inset 0px 0px 0px 1px #bdbdbd", backgroundColor:backgroundColor, color:"white", border:"none"}}
        onClick={()=>this.props.dispatch({type:"FILTER_TOGGLE", data:{day:"web",period:"web", value:!toggleValue}})}
        onMouseEnter={()=>{
          if(this.props.filterPushedDown){
            this.props.dispatch({type:"FILTER_TOGGLE", data:{day:"web",period:"web", value:!toggleValue}})
          }
        }}
     />

    </TableRow>
    rows.push(web);
    return rows;
  }

  render(){
    return (
      <div style={{userSelect:"none", padding:5}}>
      <Typography  variant="caption">Filter out times you are not available</Typography>
      <Table 
      style={{cursor: "cell"}}
      onMouseDown={()=>this.props.dispatch({type:"TOGGLE_FILTERED_PUSHED_DOWN", data:true})}
      onMouseUp={()=>this.props.dispatch({type:"TOGGLE_FILTERED_PUSHED_DOWN", data:false})}
      onMouseLeave={()=>this.props.dispatch({type:"TOGGLE_FILTERED_PUSHED_DOWN", data:false})}
      >
        <colgroup>
          <col width="10%" />
          <col width="18%" />
          <col width="18%" />
          <col width="18%" />
          <col width="18%" />
          <col width="18%" />
        </colgroup>
        <TableHead>
          <TableRow style={{height:"20px"}}>
            <this.generateHeaders></this.generateHeaders>
          </TableRow>
        </TableHead>
        <TableBody>
           <this.generatePeriods ></this.generatePeriods>
        </TableBody>
      </Table>
    </div>
    )
  
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    filterPushedDown: state.filterPushedDown,
  }
}
const AppWithStyles = withStyles(styles)(App);
const CalendarFilter = connect(mapStateToProps, null)(AppWithStyles);

export { CalendarFilter }

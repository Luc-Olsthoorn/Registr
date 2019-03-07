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
import { InformationDrawer } from './InformationDrawer.js'; 

const styles = theme => ({
  calendar: {
    paddingTop: theme.spacing.unit * 1,
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
     this.generateHeaders = this.generateHeaders.bind(this);
     this.generatePeriods = this.generatePeriods.bind(this);
  }
  generateHeaders(){
    const periodHeader = (<TableCell padding="none"></TableCell>);
    const dayHeaders = days.map((day, key) =>
       <TableCell padding="none"  align="center"  key={key}>{day}</TableCell>
    );
    const headers = [periodHeader, dayHeaders];
    return headers;
  }
  generatePeriods(props){
    //Generate everything
    let calendarData = this.props.calendar;//needs to be changed
    const rows = periods.map((period, periodKey) =>
       <TableRow key = {periodKey} style={{height:"35px"}}>
        <TableCell align="center"  padding="none">
          {period}
        </TableCell>
         {days.map((day, dayKey) =>{
            if(calendarData.meetTimes[period] && calendarData.meetTimes[period][day]){
                if(calendarData.meetTimes[period][day].periodLength != 0){
                return(
                  <TableCell 
                  align="center" 
                  padding="none"
                  rowSpan={calendarData.meetTimes[period][day].periodLength} 
                  key={dayKey}
                  onClick={()=>this.props.dispatch({
                    type:"TOGGLE_INFORMATION_DRAWER", 
                    data:{
                      number:calendarData.number,
                      information: calendarData.meetTimes[period][day]
                    }
                  })}
                  style={{backgroundColor:calendarData.meetTimes[period][day].color }}>
                  <Typography variant="h7" style={{color:"white"}}>
                    {calendarData.meetTimes[period][day].name}
                  </Typography>
                  </TableCell>
                )
              }else{
                return(null);
              }
            }else{
              return (
                <TableCell padding="none" key={dayKey} />
              )
            }      
          })}
       </TableRow>
    );
    return rows;
  }

  render(){
    console.log(this.props.calendar);
    return (
      <div style={{flexDirection: 'row', display:'flex'}}>
          <InformationDrawer number={this.props.calendar.number}/>
        <div  
        style={{padding:0, flex:4, width:'100%', overflow:'hidden'}}>
          <Paper 
            onClick={()=>{
              if(this.props.drawerOpen){
                this.props.dispatch({
                type:"TOGGLE_INFORMATION_DRAWER", 
                data:{
                  number:this.props.calendar.number,
                  information: false
                }
            })}}}
          >
            <Typography variant="h6" style={{paddingLeft:20}}>
              Calender Number: {this.props.calendar.number}
            </Typography>
            <Table>
              <colgroup>
                <col width="10%" />
                <col width="18%" />
                <col width="18%" />
                <col width="18%" />
                <col width="18%" />
                <col width="18%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <this.generateHeaders></this.generateHeaders>
                </TableRow>
              </TableHead>
              <TableBody>
                 <this.generatePeriods></this.generatePeriods>
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state, ownProps) => {
  return {
    drawerOpen: state.calendarDrawers[ownProps.calendar.number],
  }
}
const AppWithStyles = withStyles(styles)(App);
const Calendar = connect(mapStateToProps, null)(AppWithStyles);

export { Calendar }

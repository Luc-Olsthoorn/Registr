import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Fab from "@material-ui/core/Fab";

import TurnedIn from "@material-ui/icons/TurnedIn";
import TurnedInNot from "@material-ui/icons/TurnedInNot";

import {
  days,
  periods,
  periodTimesNormal,
  periodTimesSummer,
} from "./services/UF.js";
import { InformationDrawer } from "./InformationDrawer.js";

const styles = (theme) => ({
  calendar: {
    paddingTop: theme.spacing.unit * 1,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.generateHeaders = this.generateHeaders.bind(this);
    this.generatePeriods = this.generatePeriods.bind(this);
    this.generateTableCell = this.generateTableCell.bind(this);
  }
  generateHeaders() {
    const periodHeader = <TableCell padding="none"></TableCell>;
    const dayHeaders = days.map((day, key) => (
      <TableCell padding="none" align="center" key={key}>{day}</TableCell>
    ));
    const headers = [periodHeader, dayHeaders];
    return headers;
  }
  generateTableCell(props) {
    let { cell, colSpan, number, key } = props;
    return (
      <TableCell
        align="center"
        padding="none"
        rowSpan={cell.periodLength}
        colSpan={colSpan}
        key={key}
        onClick={() =>
          this.props.dispatch({
            type: "TOGGLE_INFORMATION_DRAWER",
            data: {
              number: number,
              information: cell,
            },
          })}
        style={{ backgroundColor: cell.color, cursor: "pointer" }}
      >
        <Typography variant="h7" style={{ color: "white" }}>
          {cell.name}
        </Typography>
      </TableCell>
    );
  }
  generatePeriods(props) {
    //Generate everything
    let calendarData = this.props.calendar; //needs to be changed
    const rows = periods.map((period, periodKey) => {
      if (
        periodTimesSummer["semesters"].includes(this.props.semesterVal) &&
          periodTimesSummer[period] ||
        periodTimesNormal["semesters"].includes(this.props.semesterVal) &&
          periodTimesNormal[period]
      ) {
        return (
          <TableRow key={periodKey} style={{ height: "35px" }}>
            <TableCell align="center" padding="none">
              <span>
                <b display="inline">{period}</b>{" "}
                {periodTimesNormal["semesters"].includes(this.props.semesterVal)
                  ? <i color="secondary">{periodTimesNormal[period]}</i>
                  : (null)}
                {periodTimesSummer["semesters"].includes(this.props.semesterVal)
                  ? <i color="secondary">{periodTimesSummer[period]}</i>
                  : (null)}
              </span>
            </TableCell>
            {days.map((day, dayKey) => {
              if (
                calendarData.meetTimes[period] &&
                calendarData.meetTimes[period][day]
              ) {
                if (calendarData.meetTimes[period][day].periodLength != 0) {
                  return (
                    <this.generateTableCell
                      key={dayKey}
                      cell={calendarData.meetTimes[period][day]}
                      colSpan={1}
                      number={calendarData.number}
                    />
                  );
                } else {
                  return (null);
                }
              } else {
                return <TableCell padding="none" key={dayKey} />;
              }
            })}
          </TableRow>
        );
      } else {
        return (null);
      }
    });
    //console.log(calendarData.meetTimes);
    if (calendarData.meetTimes["web"]) {
      let web = calendarData.meetTimes["web"].map((data, key) => (
        <TableRow key={key} style={{ height: "35px" }}>
          <TableCell align="center" padding="none">
            Web
          </TableCell>
          <this.generateTableCell
            key={0}
            cell={data}
            colSpan={5}
            number={calendarData.number}
          />
        </TableRow>
      ));
      console.log(web);
      rows.push(web);
    }

    return rows;
  }

  render() {
    if (!this.props.bookMarkOnly || this.props.pinnedCalendar) {
      return (
        <div style={{ flexDirection: "row", display: "flex" }}>
          <InformationDrawer number={this.props.calendar.number} />
          <div
            style={{ padding: 4, flex: 4, width: "100%", overflow: "hidden" }}
          >
            <Paper
              onClick={() => {
                if (this.props.drawerOpen) {
                  this.props.dispatch({
                    type: "TOGGLE_INFORMATION_DRAWER",
                    data: {
                      number: this.props.calendar.number,
                      information: false,
                    },
                  });
                }
              }}
            >
              <div
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  top: 5,
                  position: "relative",
                  display: "inline",
                }}
              >
                {this.props.pinnedCalendar
                  ? (
                    <TurnedIn
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        this.props.dispatch({
                          type: "TOGGLE_PIN_CALENDAR",
                          data: {
                            number: this.props.calendar.number,
                            information: false,
                          },
                        })}
                    />
                  )
                  : (
                    <TurnedInNot
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        this.props.dispatch({
                          type: "TOGGLE_PIN_CALENDAR",
                          data: {
                            number: this.props.calendar.number,
                            information: true,
                          },
                        })}
                    />
                  )}
              </div>
              <Typography variant="h6" style={{ display: "inline" }}>
                Calendar Number: {this.props.calendar.number}
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
      );
    } else {
      return (null);
    }
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state, ownProps) => {
  return {
    drawerOpen: state.calendarDrawers[ownProps.calendar.number],
    pinnedCalendar: state.pinnedCalendars[ownProps.calendar.number],
    bookMarkOnly: state.bookMarkOnly,
    semesterVal: state.semesterVal,
  };
};
const AppWithStyles = withStyles(styles)(App);
const Calendar = connect(mapStateToProps, null)(AppWithStyles);

export { Calendar };

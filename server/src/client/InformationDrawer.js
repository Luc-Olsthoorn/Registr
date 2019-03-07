import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({

});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    let flex = 0;
    let width = 0;
    if(this.props.drawerOpen){
  
        flex = 1;
        width = 200;
      
    }
      return (
        <Paper style={{
          flex:flex, 
          width:width,
          transition: "all .2s ease-in-out",
          color:"white",
          backgroundColor: this.props.information?(this.props.information.color):("#757575")
        }}>
        {
          this.props.drawerOpen?(
            <div style={{padding:10}}>
            <Typography variant="h6" style={{color:"white"}}>{this.props.information.classNumber}<span style={{color:"#bdbdbd"}}>
              {' '}{this.props.information.name}
            </span></Typography>
            
            <Typography variant="caption" style={{color:"white" ,paddingBottom:20}}>{this.props.information.title}</Typography>
            <Typography variant="body2" style={{color:"white", maxHeight:200, overflowY:"auto", paddingBottom:20}}><i>{this.props.information.description}</i></Typography>
            
            <Typography variant="caption" style={{color:"#bdbdbd"}}>Instructors:</Typography>
            {this.props.information.instructors.map((instructor, key)=>{
              return (<Typography variant="caption" style={{color:"white"}}>{instructor.name}</Typography>)
            })}
            </div>
            ):(null)
          }

        
        </Paper>
              );

  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state, ownProps) => {
  return {
    drawerOpen: state.calendarDrawers[ownProps.number],
    information: state.calendarDrawers[ownProps.number]
  }
}
const withStylesApp = withStyles(styles)(App);
const InformationDrawer = connect(mapStateToProps, null)(withStylesApp);
export { InformationDrawer }

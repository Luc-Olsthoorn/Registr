import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Switch, CssBaseline } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import { SideMenu } from './SideMenu.js';
import { Home } from './Home.js';

import logo_light from './assets/logo.png';
import logo_dark from './assets/logo_dark.png';

import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness2Icon from '@material-ui/icons/Brightness2';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1
  },
  mainView: {
    overflow: 'hidden',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'inherit'
    }
  }
}));

const darkTheme = createTheme({
  palette: { type: 'dark' },
  logo: logo_light
});

const lightTheme = createTheme({
  palette: { type: 'light' },
  logo: logo_dark
});


function main() {
  // App-wide dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // Styling hook
  const classes = useStyles();

  return (
    
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline/>
        <div className={classes.mainView}>
          <SideMenu />
          <main className={classes.content}>
            <div style={{ paddingLeft: '16px' }}>
              {/* <span> */}
                <Brightness5Icon style={{verticalAlign: 'middle'}}/>
                <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                <Brightness2Icon style={{verticalAlign: 'middle'}}/>
              {/* </span> */}
            </div>
              <Home/>
          </main>
        </div>
      </ThemeProvider>

  )
}

const App = connect()(main);

export { App };

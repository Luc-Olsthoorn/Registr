import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Switch, CssBaseline } from '@material-ui/core';

import { SideMenu } from './SideMenu.js';
import { Home } from './Home.js';

import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunny from '@material-ui/icons/WbSunny';

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

/**
 * Dark theme. Customize theming options for dark mode here.
 */
const darkTheme = createTheme({
  palette: { type: 'dark' },
});

/**
 * Light theme. Customize theming options for light mode here.
 */
const lightTheme = createTheme({
  palette: { type: 'light' },
});


function app() {
  // App-wide dark mode toggle
  const [darkMode, setDarkMode] = useState(true);

  // Styling hook
  const classes = useStyles();

  return (
    // Theme provider for dark/light mode. Propagates to children.
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className={classes.mainView}>
        <SideMenu />
        <main className={classes.content}>
          <div style={{ paddingLeft: '16px' }}>
            {/* Dark mode switch. Two icons and a MUI switch. */}
            <WbSunny style={{ verticalAlign: 'middle' }} />
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <Brightness2Icon style={{ verticalAlign: 'middle' }} />
          </div>
          <Home />
        </main>
      </div>
    </ThemeProvider>

  )
}

const App = connect()(app);

export { App };

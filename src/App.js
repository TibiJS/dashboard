import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Table from './components/Table';
const drawerWidth = 270;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    maxWidth: 1440,
    margin: '0 auto'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: 70,
    right: 'auto',
    background: '#FFFF',
    maxWidth: 1440,
    boxShadow: '0px 1px 0px #0000000F'
  },
  drawer: {
    width: drawerWidth,
    background: '#373737 0% 0% no-repeat padding-box',
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  headerImg: {
    maxWidth: '109px',
    margin: '19px 0 15px 28px'
  },
  toolbar: theme.mixins.toolbar,
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Table />
      </main>
    </div>
  );
}

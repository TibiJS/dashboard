import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import logo from '../assets/google.png';
import logoRetina from '../assets/google@2x.png';
import RetinaImage from 'react-retina-image';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: 70,
    right: 'auto',
    background: '#FFFF',
    maxWidth: 1440,
    boxShadow: '0px 1px 0px #0000000F'
  },
  headerImg: {
    maxWidth: '109px',
    margin: '19px 0 15px 28px'
  }
}))

export default function Header () {
  const classes = useStyles();
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <RetinaImage className={classes.headerImg} src={[logo, logoRetina]} />
    </AppBar>
  );
}

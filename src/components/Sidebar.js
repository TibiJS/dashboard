import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import HomeIcon from '@material-ui/icons/Home';
import LinkIcon from '@material-ui/icons/Link';
import LabelIcon from '@material-ui/icons/Label';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';

const styles = {
  sidebar: {
    background: '#373737 0% 0% no-repeat padding-box',
    color: '#FFF',
    top: '70px',
    position: 'relative',
    height: '100vh'
  },
  selected: {
    background: '#257A91',
    alignItems: 'center',
    display: 'inline-flex',
    paddingTop: 9,
    paddingBottom: 8,
    borderRadius: 4
  },
  listMargin: {marginTop: '17px'}
};

export default function Sidebar() {
  return (
  <div style={styles.sidebar}>
    <List style={styles.listMargin} disablePadding>
      <ListItem component="nav" button key={0}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home"></ListItemText>
      </ListItem>
      <ListItem button key={1}>
        <div style={styles.selected}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Distributors"></ListItemText>
        </div>
      </ListItem>
      <ListItem button key={2}>
        <ListItemIcon>
          <LinkIcon />
        </ListItemIcon>
        <ListItemText primary="Sales Pages"></ListItemText>
      </ListItem>
      <ListItem button key={3}>
        <ListItemIcon>
          <LabelIcon />
        </ListItemIcon>
        <ListItemText primary="Products"></ListItemText>
      </ListItem>
      <ListItem button key={4}>
        <ListItemIcon>
          <PermContactCalendarIcon />
        </ListItemIcon>
        <ListItemText primary="Customers"></ListItemText>
      </ListItem>
    <Divider />
    <ListItem button key={5}>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings"></ListItemText>
    </ListItem>
    <ListItem button key={6}>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Support"></ListItemText>
    </ListItem>
    </List>
  </div>)
}
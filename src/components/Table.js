import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Grid from '@material-ui/core/Grid';
import TableHeader from './TableHeader';

const styles = {
  active: {
    background: '#B0DFE5 0% 0% no-repeat padding-box',
    border: '1px solid #E2E5ED',
    borderRadius: '4px',
    padding: '4px 16px 4px 17px',
    fontSize: '12px',
    color: '#3E3F42'
  },
  inactive: {
    background:'#F8F8F8 0% 0% no-repeat padding-box',
    border: '1px solid #E2E5ED',
    borderRadius: '4px',
    padding: '4px 12px 4px 13px',
    fontSize: '12px',
    color: '#3E3F42'
  },
  sales: {
    background: '#FBFBFD 0% 0% no-repeat padding-box',
    border: '1px solid #E2E5ED',
    fontSize: '12px',
    padding: '3.98px 11.12px 4.02px 10.88px',
    lineHeight: '18px'
  },
  heading: {
    marginBottom: 4,
    marginTop: 15
  }
}

export default class SimpleTable extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch('https://cup-admin-mock-server.herokuapp.com/distributors?_page=1&limit=50&_sort=firstName&_order=asc')
    .then(res => res.json())
    .then((data) => {
      this.setState({items:data})
    })
    .catch(console.log)
  }

  render() {
    return (
    <div>
    <Paper style={styles.heading}>
      <TableHeader />
    </Paper>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Distributor</TableCell>
            <TableCell align="right">Acct Status</TableCell>
            <TableCell align="right">Acct Created</TableCell>
            <TableCell align="right">Sales Pages</TableCell>
            <TableCell align="right">Balance Avail</TableCell>
            <TableCell align="right">Total Collected</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.items.map(row => (
            <TableRow key={row.id}>
              <TableCell align="left" component="th" scope="row">
                <Grid container style={{marginLeft: '7px'}} >
                  <Avatar alt="Remy Sharp" src={row.picture} />
                  <div style={{marginLeft: '19.85px'}}>
                    {row.firstName + ' ' + row.lastName} <br />
                    <Typography variant="subtitle2">{row.email}</Typography>
                  </div>
                </Grid>
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {moment(row.registered).format('MMM DD, YYYY')}
              </TableCell>
              <TableCell align="right" componnet="th" scope="row">
                {row.isActive ? <span style={styles.active}>Active</span> : <span style={styles.inactive}>Inactive</span>}
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                <span style={styles.sales}>6</span>
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                ${row.balance}
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                ${row.totalCollected}
              </TableCell>
              <TableCell align="right" component="th">
              <IconButton aria-label="more">
                <MoreHorizIcon />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
  }
}
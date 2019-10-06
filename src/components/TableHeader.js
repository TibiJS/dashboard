import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  filterBtn: {
    background: 'transparent url("https://imgur.com/YuAUprD.png") 11px 9px no-repeat padding-box',
    boxShadow: '0px 1px 2px #00000014',
    border: '1px solid #D8DCE6',
    borderRadius: '4px',
    width: '90px',
    height: '38px',
  },
  exportBtn: {
    background: 'transparent url("https://imgur.com/XOviRsd.png") 11px 9px no-repeat padding-box',
    boxShadow: '0px 1px 2px #00000014',
    border: '1px solid #D8DCE6',
    borderRadius: '4px',
    width: '97px',
    height: '38px',
    margin: '7px 29px 7px 24px'
  },
  subtitle: {
    color: '#9EA0A5',
    fontSize: 14,
    position: 'relative',
    left: 5
  },
  heading: {
    marginLeft: 30,
    flexGrow: 1,
    marginTop: 28,
    paddingBottom: 20
  }
}

const ContentHeader = () => (
  <Grid container>
    <Typography variant="h1" style={styles.heading}>Distributors<span style={styles.subtitle}>(788)</span></Typography>
    <div style={{justifyContent: 'center', alignItems: 'center', display: 'inherit'}}>
    <button
      style={styles.filterBtn}>
        <span style={{fontSize: '14px', margin: '11.21px 15.85px 7.79px 36.15px'}}>Filter</span>
      </button>
      <button
      style={styles.exportBtn}>
        <span style={{fontSize: '14px', margin: '11.21px 15.85px 7.79px 36.15px'}}>Export</span>
      </button>
    </div>
  </Grid>
);

export default ContentHeader
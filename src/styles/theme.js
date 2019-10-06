import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 26,
      letterSpacing: 0,
      color: '#414142'
    },
    subtitle2: {
      fontSize: 12,
      color: '#9EA0A5'
    },
    fontFamily: [
      'Avenir',
      'sans-serif'
    ]
  },
  overrides: {
    MuiTableCell: {
      root: {
        borderBottom: '1px solid #EAEDF3',
        borderRadius: 4
      },
      head: {
        textTransform: 'uppercase',
        fontSize: 12,
        color: '#9EA0A5',
        lineHeight: 'inherit',
        padding: '14.7px 21px 15.3px 30px',
        borderBottom: '2px solid #EAEDF3'
      },
      body: {
        paddingRight: 21,
        paddingLeft: 23
      }
    },
    MuiPaper: {
      root: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 1px 3px #0000000A !important',
        border: '1px solid #EAEDF3',
        borderRadius: '4px !important'
      }
    },
    MuiDrawer: {
      paper: {
        width: '270px',
        background: '#373737 0% 0% no-repeat padding-box',
        color: '#FFFFF'
      }
    },
    MuiListItemIcon: {
      root: {
        color: '#FFF',
        display: 'inline-flex',
        minWidth: 'auto',
        flexShrink: 0,
        marginRight: 16,
        marginLeft: 14
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#FFF',
        opacity: 0.5
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: 'inherit'
      }
    },
    MuiListItem: {
      button: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 14
      },
      gutters: {
        paddingLeft: 28,
        paddingRight: 14
      }
    },
    MuiListItemText: {
      root: {
        paddingRight: '9.8px'
      },
      primary: {
        fontSize: 17,
        paddingRight: 107
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#FFFFF'
      },
    },
    MuiAvatar: {
      root: {
        height: '38px',
        width: '38px'
      }
    }
  },
});

export default theme;

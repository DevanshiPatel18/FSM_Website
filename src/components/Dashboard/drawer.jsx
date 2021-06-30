import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Dashboard, Build, Assignment, LocalShipping, ExitToApp  } from '@material-ui/icons';
import header from './Images/header.jpg';
import {Grid} from '@material-ui/core';
import AllDashboardElements from './Dashboard Elements/allElements';


const drawerWidth = 15+'%';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  links: {
    fontFamily: 'Baloo Da 2, cursive', 
    fontSize: '10rem'
  }
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerData = [
      {
          title: 'Dashboard',
          icon: Dashboard,
          link: '/'
      },{
        title: 'Workstation 1 Performance',
        icon: Build,
        link: '#PerformanceGraph'
    },{
          title: 'Workstations',
          icon: Build,
          link: '#Workstations'
      },{
          title: 'Process Log',
          icon: Assignment,
          link: '#ProcessLogAndOrderHistory'
      },{
          title: 'Order History',
          icon: LocalShipping,
          link: '#ProcessLogAndOrderHistory'
      },{
          title: 'Log Out',
          icon: ExitToApp
      }
  ];

  const drawer = (
    <div style={{backgroundColor: '#13154e', color: 'white', borderTopRightRadius: 10+'%', borderBottomRightRadius: 10+'%', overflow: 'hidden'}}>
        <Typography style={{marginTop: 20+'%',textAlign: 'center', fontStyle: 'italic',fontFamily: 'Baloo Da 2, cursive'}}>
            <h2>FSM</h2>
        </Typography>
      <div className={classes.toolbar} />
      <Divider />
      <List style= {{height: 100+'vh', overflow: 'hidden'}}>
        {drawerData.map((data) => {
          return(
          <ListItem button>
            <Grid component = {data.icon} style= {{marginRight: 10+'%', marginLeft: 10+'%'}}></Grid>
            <a href= {data.link} className = {classes.links} style={{color: 'white', textDecoration: 'none', }}><ListItemText multiline = {classes.links} classes= {classes.links} primary={data.title} /></a>
          </ListItem>
          );    
    })}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root} style={{margin:0, border: 'none', height: 100+'vh'}}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style = {{padding: 0,}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <img src = {header} style= {{width: 100+'%', margin: 0, height: 100+'%', padding: 0}} alt ='FSM-Logo'></img>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders" >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            style={{}}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} style= {{marginTop: 2+'%'}}/>
            <AllDashboardElements></AllDashboardElements>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

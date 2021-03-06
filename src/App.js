import './App.css';
import React, { useState } from 'react';
import routes from './routes';
import { Switch, Route } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ResponsiveDrawer from './components/Dashboard/drawer';
import { blueGrey } from '@material-ui/core/colors';
import Login from './components/Login/login';
import useToken from './useToken';

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      display: 'block',
      padding: theme.spacing(3),
      position: 'relative',
      marginTop: 5 + '%',
      textAlign: 'left',
      marginLeft: 15 + '%',
      width: 85 + '%',
      backgroundColor: blueGrey[50],
      overflowX: 'hidden'
    },
  })
);



function App() {

  const classes = useStyles();
  const { token, setToken } = useToken();

  const [WS1StatusPer, setWS1StatusPer] = useState(0);
  const [WS2StatusPer, setWS2StatusPer] = useState(0);
  const [WS3StatusPer, setWS3StatusPer] = useState(0);


  const [startWS1, setStartWS1] = useState(0)
  const [startWS2, setStartWS2] = useState(0)
  const [startWS3, setStartWS3] = useState(0)


  console.log(token);
  if (!token) {
    return <Login setToken={setToken}></Login>
  }

  return (
    <div className="App">

      <ResponsiveDrawer ></ResponsiveDrawer>
      <Switch>
        <div className={classes.content}>
          {routes.map((route) => (
            <Route exact path={route.path} key={route.path}>
              <route.component 
              token={token} 
              
              style={{ width: 100 + '%', margin: 0 }} />
            </Route>
          ))}
        </div>
      </Switch>
    </div>
  );
}

export default App;

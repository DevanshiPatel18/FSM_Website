import './App.css';
import Login from '../src/components/Login/login';
import Dashboard from './components/Dashboard/dashboard';
import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Baloo Da 2, cursive',
    fontSize: '1.2rem'
  }
});

function App() {

  const classes = useStyles();

  return (
    <div className = {classes.root}>
    <Dashboard></Dashboard>
    </div>
    );
}

export default App;

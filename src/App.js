import logo from './logo.svg';
import './App.css';
import { Nameupdate } from './nameupdate/nameupdater';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <p id='p1'>Name Changer</p>
    <div className="App">
        <Nameupdate/>
    </div>
    </Fragment>
  );
}

export default App;

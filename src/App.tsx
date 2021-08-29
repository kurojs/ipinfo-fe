import React from 'react';
import { Info } from './components/info';
import { Histories } from './components/histories';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className='container'>
      <div className='block'>
        <h1 className='title'>What is your IP</h1>
      </div>
      <Info />
      <Histories />
    </div>
  );
}

export default App;

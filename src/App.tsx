import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {AdDesigner, Ad} from './components/AdDesigner';
import Votes from './components/Votes';

function App() {
  return (
    <div className="App">
      <Header user="Marlee"/>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '8px'}}>
        <Ad flavor="Chocolate" fontSize={25} darkTheme={true}/>
        <Ad flavor="Vanilla" fontSize={25} darkTheme={false}/>, 
        <Ad flavor="Strawberry" fontSize={25} darkTheme={true}/>
      </div>
      
      <div className='content-container'>
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;

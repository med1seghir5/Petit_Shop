import './App.css';
import React from 'react';
import { Background } from './Components/Background';
import { Body } from './Components/Body';
import { Body2 } from './Components/Body2';
import { Foot } from './Components/Foot';
import { Head } from './Components/Head';

function App() {
  return (
    <div>
        <Background />
        <Body />
        <Body2 />
        <Foot />
        <Head />
    </div>
  );
}

export default App;

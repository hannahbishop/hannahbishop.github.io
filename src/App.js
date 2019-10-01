import React from 'react';
import Helmet from 'react-helmet';
import './scss/main.scss';
import Home from './Home.js';

function App() {
  return (
    <div className="App">
        <Helmet>
          <link rel="stylesheet" href="https://use.typekit.net/xfu3ysz.css"/>
        </Helmet>
        <Home ></Home>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import GitHubButton from "react-github-button";


import Routes from "./routes";


function App() {
  return (
    <div className='container'>
      <h1>Inspiring Quotes</h1>
      <Routes />

      <GitHubButton type="stargazers" size="large" namespace="viniciusmdias" repo="inspiringQuotes" />

      <script async defer src="https://buttons.github.io/buttons.js"></script>

    </div>

  );
}

export default App;

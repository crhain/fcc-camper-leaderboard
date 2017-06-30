import React, { Component } from 'react';
import './styles/App.css';
import CamperList from './camper-list';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">    
          <h2>Camper Leaderboard</h2>          
        </div>
        <CamperList />        
      </div>
    );
  }
}

export default App;

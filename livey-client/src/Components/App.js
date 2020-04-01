import React from 'react';
import './app.css';
import Header from "./Header"
import DaysPanel from "./DaysPanel"
import CategoryPanel from "./CategoryPanel"
import FeedPanel from './FeedPanel';

function App() {
  return (
    <div className="app">
      <div className="app-header-container">
        <Header />
      </div>

      <div className="app-categories-container">
        <CategoryPanel />
      </div>

      <div className="app-days-container">
        <DaysPanel />
      </div>

      <div className="app-feed-container">
        <FeedPanel />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SavedArticlePage from './components/SavedArticlesPage';

class App extends React.Component {
  

  //Render landing page
  render() {
    return (
        <div className="App">
          <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/savedArticles" component={SavedArticlePage} />
          </div>
        </div>
    );
  }

}



export default App;

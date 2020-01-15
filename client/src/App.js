import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';
import axios from 'axios';

class App extends React.Component {

  state = {
    id: '',  
    headline: '',
    summary: '',
    url: '',
    posts: []
  };

  componentDidMount =() => {
    this.getArticles();
  }

  getArticles = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        console.log(`Data was recieved}`)
        this.setState({ posts: data });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  displayArticles = (posts) => {
    //if posts are empty stop here
    if (!posts.length) return null;
    
    //loop through post state to display posts
    return posts.map((post, index) => (
      <div key={index}>
        <h3>{post.headline}</h3>
        <p>{post.summary}</p>
      </div>
    ))
  };

  render() {
    return (
      <div className="App">
        <Jumbotron />
        <div classname="articles-">
          {this.displayArticles(this.state.posts)}
        </div>
      </div>
    );
  }

}



export default App;

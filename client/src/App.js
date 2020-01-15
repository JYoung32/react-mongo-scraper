import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import axios from 'axios';
import ArticleCard from './components/ArticleCard';

class App extends React.Component {
  
  state = {
    id: '',  
    headline: '',
    summary: '',
    url: '',
    posts: []
  };

  componentDidMount = () => {
    this.getArticles();
  }

  getArticles = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        console.log(`Data was recieved`)
        this.setState({ posts: data });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //removeFriend= id => {
  //   let friend = this.state.friends.filter(friend => friend.id !== id);
  //   this.setState({friends: friend})
  // }

  saveArticles() {
    console.log(`Clicked`);
  }

  displayArticles = (posts) => {
    //if posts are empty stop here
    if (!posts.length) return null;
    
    //loop through post state to display posts
    return posts.map((post, index) => (
      <div className="row d-flex justify-content-center col-lg m-3">
        <ArticleCard 
          className="m-3"
          key={index}
          headline={post.headline}
          summary={post.summary}
          saveArticles={this.saveArticles}
        />
      </div>
    ))
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron className="mt-3" />
        <div className="container">
          <div classname="articles">
            {this.displayArticles(this.state.posts)}
          </div>
        </div>
      </div>
    );
  }

}



export default App;

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
    saved: '',
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
        // console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  scrapeArticles = () => {
    console.log("Clicked");
    console.log(this.state);

      axios.get('/api/scrape')
      .then(response => {
        this.getArticles();
      })
      .catch((error) => {
        console.log(error);
      })
  };

  //Save article to MongoDB
  saveArticles(id) {
    let saveArticle = this.saved;
    saveArticle = {saved: true};

    axios.put(`/api/headlines/${id}`, saveArticle)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Render Articles to home page
  displayArticles = (posts) => {
    //if posts are empty stop here
    if (!posts.length) return null;
    
    //loop through post state to display posts
    return posts.map((post, index) => (
      <div className="row d-flex justify-content-center col-lg m-3">
        <ArticleCard 
          className="m-3"
          key={index}
          id={post._id}
          headline={post.headline}
          summary={post.summary}
          url={post.url}
          saved={post.saved}
          saveArticles={this.saveArticles}
          deleteSingleArticle={this.deleteSingleArticle}
        />
      </div>
    ))
  };

  //Delete a single article
  deleteSingleArticle = (id) => {
    console.log(id);
    //code up to remove single article from display

    axios.delete(`/api/headlines/${id}`)
      .then((response) => {
        console.log(response);
        console.log('Article was deleted');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Clear database of articles
  clearArticles = () => {

    axios.get('/api/clear')
      .then((response) => {
        console.log("DB was cleared.")
        this.setState({ posts: [] })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Render landing page
  render() {
    return (
      <div className="App">
        <Navbar 
        scrapeArticles={this.scrapeArticles}
        clearArticles={this.clearArticles}/>
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

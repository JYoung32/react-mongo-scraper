import React from 'react';
import '../App.css';
import SavedNavbar from './SavedNavBar';
import Jumbotron from './Jumbotron';
import axios from 'axios';
import SavedArticleCard from './SavedArticleCard';

class SavedArticlePage extends React.Component {

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
        axios.get('/api/saved')
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

    //Render Articles to home page
    displayArticles = (posts) => {
        //if posts are empty stop here
        if (!posts.length) return null;

        //loop through post state to display posts
        return posts.map((post, index) => (
            <div className="row d-flex justify-content-center col-lg m-3">
                <SavedArticleCard
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

    render() {
        return (
            <div>
                <SavedNavbar
                    clearArticles={this.clearArticles} />
                <Jumbotron />
                <div className="container">
                    <div classname="articles">
                        {this.displayArticles(this.state.posts)}
                    </div>

                </div>
            </div>
        );
    };


}





export default SavedArticlePage;
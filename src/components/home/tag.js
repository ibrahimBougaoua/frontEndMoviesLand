import React, { Component } from "react";
import axios from 'axios';
import Post from "../post";

// handle button click of login form
async function tags(tag) {
    try {
      const response = await axios.get('http://127.0.0.1:5000/movie/genre/' + tag);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

export default class Tag extends Component {

    state = {
        tags: []
      }
    
      componentDidMount =()=>{
        tags(this.props.match.params.tag).then(response => {
          this.setState({
            tags: response.data
          });
        });
      }

render() {

const tag = "Movies by tag : " + this.props.match.params.tag

return (
    <div className="mt-3">
    <Post name={tag} link="/movie/single/" elements={this.state.tags}></Post>
    </div>
);
}

}
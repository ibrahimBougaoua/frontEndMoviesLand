import React, { Component } from "react";
import Post from "./post";
import Nav from "./nav";
import axios from 'axios';

// handle button click of login form
async function getTopData() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/movie/top');
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}

export default class Top extends Component {

    state = {
        movies: []
      }
    
      componentDidMount =()=>{
        getTopData().then(response => {
          this.setState({
            movies: response.data
          });
        });
      }

render() {

return (
    <div>
        <Nav name="Top rating"></Nav>

    <Post name="Top rating" link="/movie/single/" elements={this.state.movies}></Post>
    </div>
);
}
}
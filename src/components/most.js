import React, { Component } from "react";
import Post from "./post";
import Nav from "./nav";
import axios from 'axios';

// handle button click of login form
async function getMost() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/movie/most');
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}

export default class Most extends Component {

 state = {
       movies: []
      }
    
      componentDidMount =()=>{
        getMost().then(response => {
          this.setState({
            movies: response.data
          });
        });
      }

render() {

return (
    <div>
        <Nav name="Trending"></Nav>

    <Post name="Trending" link="/account/single/" elements={this.state.movies}></Post>
    </div>
);
}
}
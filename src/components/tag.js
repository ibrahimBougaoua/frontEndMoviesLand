import React, { Component } from "react";
import axios from 'axios';
import Post from "./post";
import Nav from "./nav";

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
        users: []
      }
    
      componentDidMount =()=>{
        tags(this.props.match.params.tag).then(response => {
          this.setState({
            users: response.data
          });
        });
      }

render() {

return (
    <div>
    <Nav name="Tag"></Nav>
    <Post name="Movies by tag" link="/account/single/" elements={this.state.users}></Post>
    </div>
);
}

}
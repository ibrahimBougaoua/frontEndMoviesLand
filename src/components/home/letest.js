import React, { Component } from "react";
import Post from "./post";
import axios from 'axios';

// handle button click of login form
async function recommended() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/movie/recommended');
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

// get age from access token -> data
async function recommendedByAge() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/movie/age/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

// get country from access token -> data
async function recommendedByCountry() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/movie/country/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }


export default class Letest extends Component {

    state = {
        recommend: [],
        moviesByAgs: [],
        moviesByCountry: []
      }
    
      componentDidMount =()=>{
        recommended().then(response => {
          this.setState({
            recommend: response.data
          });
        });
        recommendedByAge().then(response => {
          this.setState({
            moviesByAgs: response.data
          });
        });
        recommendedByCountry().then(response => {
          this.setState({
            moviesByCountry: response.data
          });
        });
      }

render() {

return (
    <div>
    <Post name="Recommended" link="/movie/single/" elements={this.state.recommend}></Post>
    <Post name="Users your age like this" link="/movie/single/" elements={this.state.moviesByAgs}></Post>
    <Post name="Users in your area like" link="/movie/single/" elements={this.state.moviesByCountry}></Post>
    </div>
);

}

}
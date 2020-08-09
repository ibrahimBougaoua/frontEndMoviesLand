import React, { Component } from "react";
import { Link } from "react-router-dom";
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

export default class Home extends Component {


  componentDidMount =()=>{
      
if(localStorage.getItem('email')){
  this.setState({
    visibleComponent: true
  });
    recommended().then(response => {
    if(response){
      this.setState({
        recommend: response.data
      });
    }
    });
    recommendedByAge().then(response => {
    if(response){
      this.setState({
        moviesByAgs: response.data
      });
    }
    });
    recommendedByCountry().then(response => {
    if(response){
      this.setState({
        moviesByCountry: response.data
      });
    }
    });
  }
    getTopData().then(response => {
      this.setState({
        movies: response.data
      });
    });

  }

  constructor(props) {
    super(props);
    this.state = {visibleComponent: false,dataMovies: [],search: '',cate: 'title',recommend: [],moviesByAgs: [], moviesByCountry: [], searchDataMovies: [],movies: []};

  }

render() {

return (
<div>

<div className="row justify-content-center theme">


    <div className="col-md-12">    
<nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
<div className="container">
  <div className="collapse navbar-collapse justify-content-center" id="navbarResponsive">
    <ul className="navbar-nav">

    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/adventure"} >Adventure</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/animation"} >Animation</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/children"} >Children</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/comedy"} >Comedy</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/fantasy"} >Fantasy</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/romance"} >Romance</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/Drama"} >Drama</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/action"} >Action</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/crime"} >Crime</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/thriller"} >Thriller</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/horror"} >Horror</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/mystery"} >Mystery</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/sci-Fi"} >Sci-Fi</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/documentary"} >Documentary</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/movie/tag/imax"} >Imax</Link>
    </li>
    
    </ul>
  </div>
</div>
</nav>
</div>

    <div className="col-md-12">    
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center text-white font-weight-bold">Watch of movies.</h1>
                <p className="lead text-center text-white">Watch thousands of full-length movies for free with limited ads.</p>
                <img src="play-button.svg" className="mt-2 rounded position-relative icone-play" alt=""/>
            </div>
        </div>
    </div>


</div>

<div className="col-md-12 bg-white">    
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="row">
              
{
  this.state.visibleComponent
    ? <Post name="Recommended" link="/movie/single/" elements={this.state.recommend}></Post>
    : null
}     

{
  this.state.visibleComponent
    ? <Post name="Users your age like this" link="/movie/single/" elements={this.state.moviesByAgs}></Post>
    : null
}       

{
  this.state.visibleComponent
    ? <Post name="Users in your area like" link="/movie/single/" elements={this.state.moviesByCountry}></Post>
    : null
}
            </div>
        </div>
    </div>
</div>

</div>

);
}
}
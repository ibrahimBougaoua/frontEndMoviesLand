import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route , withRouter } from "react-router-dom";
import Footer from "./footer";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Single from "./home/single";
import Tag from "./home/tag";
import Actor from "./home/actor";
import History from "./home/history";
import Abonnement from "./home/abonnement";
import List from "./home/list";
import Navbar from "./navbar";
import axios from 'axios';
import Resultat from "./resultat";

function Jumbotron(props){

return <div className="jumbotron p-0">
  <h1 className="display-5 text-white text-center font-weight-bold"><span className="text-dt-color font-weight-bold">T</span>he best movies of all time.</h1>
  <p className="lead text-white text-center"><span className="text-dt-color font-weight-bold">W</span>atch thousands of movies.</p>
</div>;
}

// handle button click of login form
async function resultat(a,b) {
  try {
    const response = await axios.get('http://127.0.0.1:5000/movie/search', {params : {search: a,  cate: b, email:localStorage.getItem('email')}})
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default class Index extends Component {


  constructor(props) {
    super(props);
    this.state = { visible: false,visibleComponent: false,dataMovies: [],search: '',cate: 'title',searchDataMovies: [],movies: []};

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeCate= this.handleChangeCate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeSearch(event) {
    this.setState({search: event.target.value});
  }
  
  //event.target[event.target.selectedIndex].getAttribute('data-order')

  handleChangeCate(event) {
    this.setState({cate: event.target.options[event.target.selectedIndex].text});
  }

  handleSubmit(event) {
    resultat(this.state.search,this.state.cate).then(response => {
      this.setState({
        searchDataMovies: response.data
      });
      this.setState({
        visible: true
      });
    });
    event.preventDefault();
  }

  componentDidMount =()=>{
        if(this.state.search !== ''){

    resultat(this.state.search,this.state.cate).then(response => {
      this.setState({
        dataMovies: response.data
      });
    });
    }
  }

render() {

// handle button click of login form
const searchMovies = () => {
  axios.get('http://127.0.0.1:5000/movie/search', {params : {search: this.state.search,  cate:this.state.cate, email:localStorage.getItem('email')}})
  .then(function (response) {
    // setter
    //console.log(response)
    return response
  }).catch(function (error) {
    console.log(error);
  });

}

return (
<Router>
<div className="container-fluid m-0 p-0">

<div className="home-header">
<Navbar />
<Jumbotron />


<div className="mt-5 position-absolute" style={{top: "9vw",left: "20vw"}}>
      <form className="form-inline md-form form-sm mt-0 justify-content-center" method="POST" onSubmit={this.handleSubmit}>
          <input className="form-control form-control-sm" name="search" value={this.state.search} onChange={this.handleChangeSearch}  type="text" placeholder="Search Title,Actor,Genre..." aria-label="Search" style={{width:"48vw"}}/>          
          <select name="cate" class="form-control form-control-sm ml-2" value={this.state.cate} onChange={this.handleChangeCate}>
            <option value="title">title</option>
            <option value="actor">actor</option>
            <option value="tag">tag</option>
          </select>
          <button className="btn btn-sm btn-outline-info my-sm-0 ml-2" data-toggle="modal" data-target="#exampleModal" onClick={searchMovies} type="submit">Search</button>
      </form>
</div>

{
  this.state.visible
    ? <div className="modal fade bd-example-modal-xl" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Searching...</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="card border-0 rounded-0 shadow-sm bg-light">
  <div className="row no-gutters">
  <div className="col-md-12">
    
  <Resultat link="/movie/single/" elements={this.state.searchDataMovies}></Resultat>

  </div>
  </div>
      </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    : null
}


</div>

  <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/history" component={History} />
        <Route path="/abonnements" component={Abonnement} />
        <Route path="/list" component={List} />
        <Route path="/movie/single/:id" component={withRouter(Single)} />
        <Route path="/movie/actor/:actor" exact component={Actor} />
        <Route path="/movie/tag/:tag" exact component={Tag} />
  </Switch>

</div>

<Footer />

</Router>
);
}
}
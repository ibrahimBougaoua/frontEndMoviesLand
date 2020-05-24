import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// handle button click of login form
async function viewsMovies() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/movie/history/views/email/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}
async function titleMovies() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/movie/history/title/email/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}
async function actorMovies() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/movie/history/actor/email/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}
async function tagMovies() {
    try {
      const response = await axios.get('http://127.0.0.1:5000/movie/history/tag/email/' + localStorage.getItem('email'));
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
}

export default class History extends Component {

state = { value: 2,moviesViews: [],moviesTitle: [],moviesActor: [],moviesTag: [] };

componentDidMount =()=>{
	viewsMovies().then(response => {
	  this.setState({
		moviesViews: response.data
	  });
	});
	titleMovies().then(response => {
	  this.setState({
		moviesTitle: response.data
	  });
	});
	actorMovies().then(response => {
	  this.setState({
		moviesActor: response.data
	  });
	});
	tagMovies().then(response => {
	  this.setState({
		moviesTag: response.data
	  });
	});
}

render() {

const historyViews = this.state.moviesViews.map((element) => 
	<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
	<div className="row no-gutters">
		<div className="col-md-2">
			<img src={element[13]} class="card-img rounded-0" alt="..." />
		</div>
		<div className="col-md-10">
			<div className="card-body">
				<h5 className="card-title">{element[3]}</h5>
				<small className="text-muted">{element[4]}</small><br />
				<small className="text-muted">{element[5]}</small><br />
				<small className="text-muted">{element[6]}</small><br />
				<small className="text-muted">{element[7]}</small><br />
				<Link className="btn btn-primary btn-sm position-relative" to={"/movie/single/" + element[0]} style={{top: "35px"}}>Show more</Link>
			</div>
		</div>
	</div>
    </div>
);

const historyTitle = this.state.moviesTitle.map((element) => 
	<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
	<div className="row no-gutters">
		<div className="col-md-2">
			<img src={element[13]} class="card-img rounded-0" alt="..." />
		</div>
		<div className="col-md-10">
			<div className="card-body">
				<h5 className="card-title">{element[3]}</h5>
				<small className="text-muted">{element[4]}</small><br />
				<small className="text-muted">{element[5]}</small><br />
				<small className="text-muted">{element[6]}</small><br />
				<small className="text-muted">{element[7]}</small><br />
				<Link className="btn btn-primary btn-sm position-relative" to={"/movie/single/" + element[0]} style={{top: "35px"}}>Show more</Link>
			</div>
		</div>
	</div>
    </div>
);

const historyActor = this.state.moviesActor.map((element) => 
	<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
	<div className="row no-gutters">
		<div className="col-md-2">
			<img src={element[13]} class="card-img rounded-0" alt="..." />
		</div>
		<div className="col-md-10">
			<div className="card-body">
				<h5 className="card-title">{element[3]}</h5>
				<small className="text-muted">{element[4]}</small><br />
				<small className="text-muted">{element[5]}</small><br />
				<small className="text-muted">{element[6]}</small><br />
				<small className="text-muted">{element[7]}</small><br />
				<Link className="btn btn-primary btn-sm position-relative" to={"/movie/single/" + element[0]} style={{top: "35px"}}>Show more</Link>
			</div>
		</div>
	</div>
    </div>
);

const historyTag = this.state.moviesTag.map((element) => 
	<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light">
	<div className="row no-gutters">
		<div className="col-md-2">
			<img src={element[13]} class="card-img rounded-0" alt="..." />
		</div>
		<div className="col-md-10">
			<div className="card-body">
				<h5 className="card-title">{element[3]}</h5>
				<small className="text-muted">{element[4]}</small><br />
				<small className="text-muted">{element[5]}</small><br />
				<small className="text-muted">{element[6]}</small><br />
				<small className="text-muted">{element[7]}</small><br />
				<Link className="btn btn-primary btn-sm position-relative" to={"/movie/single/" + element[0]} style={{top: "35px"}}>Show more</Link>
			</div>
		</div>
	</div>
    </div>
);
	


return (
<div className="container mt-5">


<p className="lead text-sm-left">Type of history</p>

<nav className="mb-3">
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-view-tab" data-toggle="tab" href="#nav-view" role="tab" aria-controls="nav-cviewontact" aria-selected="true">View</a>
    <a class="nav-item nav-link text-muted" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">Title</a>
    <a class="nav-item nav-link text-muted" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Actor</a>
    <a class="nav-item nav-link text-muted" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Tag</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">

<div class="tab-pane fade show active" id="nav-view" role="tabpanel" aria-labelledby="nav-view-tab">
{historyViews}
</div>

<div class="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
{historyTitle}
</div>

<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
{historyActor}
</div>

<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
{historyTag}
</div>

</div>

</div>

);
}

}
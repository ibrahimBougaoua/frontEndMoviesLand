import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";
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

export default class History extends Component {

state = { value: 2,moviesViews: [] };

componentDidMount =()=>{
	viewsMovies().then(response => {
	  this.setState({
		moviesViews: response.data
	  });
	});
}

render() {

const historyViews = this.state.moviesViews.map((element) => 
	<div className="card mb-5 border-0 rounded-0 shadow-sm bg-light m-0 p-0">
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

<Nav name="History"></Nav>

<div className="col-md-12">
<p className="lead text-sm-left">history</p>
{historyViews}
</div>

</div>
);
}

}
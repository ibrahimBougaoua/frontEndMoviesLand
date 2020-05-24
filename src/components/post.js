import React from "react";
import { Link } from "react-router-dom";

function Post(props){
const listItems = (elements) => { 
    return ( elements.map((element) => 
    <div className="card card-home">
    <Link to={props.link + element[0]}>
        <img key={element[0]} src={element[13]} className="card-img rounded-0" alt="..."/>
    </Link>
    </div>
));
}

return <div>

<div className="container">
<p className=" text-sm-left">{props.name}</p>
<div className="col-md-12 mb-5">

<div className="card-deck mb-1">
    {listItems(props.elements.slice(0,8))}
</div>

<div className="card-deck mb-1">
    {listItems(props.elements.slice(8,16))}
</div>

</div>
</div>

</div>;

}

export default Post;
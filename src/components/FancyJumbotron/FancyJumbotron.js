import React from 'react';
import ProfilePic from '../../Images/myProfilePic.jpg';
import './FancyJumbotron.css'
import { Redirect } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';

const FancyJumbotron = () => {
  return (
    <div className="text-white fancy-jumbo text-center py-5 px-4">
      <div className="jumbotron cardImg1 card card-image" style={{background: "black"}}>
        <div>
      {/* <img src={ProfilePic}/> */}
      </div>
    <div>
      <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Create your beautiful website with MDBootstrap</strong></h2>
      <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
      </p>
      {/* <a className="btn btn-outline-red btn-md"><i className="fas fa-clone left"></i> View project</a> */}
      <Link to="/about" role="button" className="btn btn1 btn-link"><div className="text-center">
  <button type="button" className="btn btn-primary">Primary</button></div></Link>
  <button type="button" className="btn btn-outline-red btn-md">Primary</button> 
    </div>
  </div>
</div>
  )
}

export default FancyJumbotron;

{/* <div className="card text-center">
<div className="card-header">
  Featured
</div>
<div className="card-body">
  <h5 className="card-title">Special title treatment</h5>
  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
<div className="card-footer text-muted">
  2 days ago
</div>
</div>

style={{backgroundColor: 'red'}}
*/}

{/* <div className="jumbotron cardImg1 card card-image" style={{background: "black"}} */}
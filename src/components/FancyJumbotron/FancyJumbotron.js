import React from 'react';
import './FancyJumbotron.css'
import { Link } from 'react-router-dom';

const FancyJumbotron = () => {
  return (
    <div className="text-white fancy-jumbo text-center py-5 px-4">
      <div className="jumbotron cardImg1 card card-image" style={{ background: "black" }}>
        <div>
        </div>
        <div>
          <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Sean Cumming Coding Page</strong></h2>
          <p className="mx-5 mb-5"></p>
          <Link to="/portfolio" role="button" className="btn btn1 btn-link"><div className="text-center">
            <button style={{ height: "4em", fontSize: "20px" }} type="button" className="btn btn-outline-red btn-red">View Portfolio</button></div></Link>
            <div style={{height: "55px"}}></div>
        </div>
      </div>
    </div>  
  )
}

export default FancyJumbotron;


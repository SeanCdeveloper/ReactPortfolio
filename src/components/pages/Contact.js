 import React from 'react';
import { Link, Route } from 'react-router-dom';
import Learn from './Learn';
import ContactForm from '../ContactForm/ContactForm'

const Contact = (props) => {
  
  return (
    <div>
      <p>Contact Page</p>
      <div>
      <ContactForm/>
      </div>
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Learn More
</Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Learn Less
        </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
    </div>
  )
}

export default Contact;



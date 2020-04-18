import React, {useState} from 'react';
import './style.css';

const ContactForm = () => {
        const [formObject, setFormObject] = useState('');

        const handleInputChange = event => {
        console.log(event);
        const {name,value} = event.target;
        setFormObject({...formObject, [name]: value})
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(event.target);
        console.log(formObject);
    }

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <input 
                    type="name" 
                    name="name" 
                    className='form-control'
                    onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <input 
                    type="email" 
                    name="email" 
                    onChange={handleInputChange}
                    className='form-control'/>
                </div>
                <div className="form-group">
                    <textarea onChange={handleInputChange} className="form-control"  name="message" rows="3"/>
                </div>
                <button onClick={handleFormSubmit} type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;


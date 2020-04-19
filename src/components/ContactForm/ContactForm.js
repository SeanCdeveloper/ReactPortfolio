import React, { useState } from 'react';
import './style.css';

const ContactForm = () => {
    const [formObject, setFormObject] = useState('');

    const handleInputChange = event => {
        console.log(event);
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="email">Name:</label>
                    <input
                        type="name"
                        name="name"
                        className='form-control'
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        className='form-control' />
                </div>
                <div className="form-group">
                    <label for="message">Message:</label>
                    <textarea onChange={handleInputChange} className="form-control" name="message" rows="3" />
                </div>
                <button onClick={handleFormSubmit} type="submit" className="btn btn-outline-primary">Submit</button>
                <div className="push" style={{height:"275px", backgroundColor: "white"}}></div>
            </form>
        </div>
        
    )
}

export default ContactForm;


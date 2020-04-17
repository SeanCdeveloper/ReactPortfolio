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


{/* // <div className="card">
// <h5 className="card-header info-color white-text text-center py-4"></h5>
// <div className='card-body px-lg-5 pt-0'>
//     <form className="text-center" className="inpForm" action="#!">

//         <div className="md-form-mt-3">
//             <input type="text" className="form-control" />
//             <label for="formName">Name</label>
//         </div>

//         <div className="md-form-mt-3">
//             <input type="email" className="form-control" />
//             <label for="formEmail">Email</label>
//         </div>

//         <label>Subject</label>
//         <select class="browser-default custom-select mb-4">
//             <option value="" disabled>Choose option</option>
//             <option value="1" selected>Feedback</option>
//             <option value="2">Report a bug</option>
//             <option value="3">Feature request</option>
//             <option value="4">Feature request</option>
//         </select>

//         <div class="form-group">
//             <textarea className="form-control rounded-0" rows="3" placeholder="Message"></textarea>
//         </div>
//         <button class="btn btn-info btn-block" type="submit">Send</button>
//     </form>
// </div>
// </div> */}
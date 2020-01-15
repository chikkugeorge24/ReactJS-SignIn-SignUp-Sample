import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
    constructor () {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState ({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(" You have successfully logged in with the follwing data:");
        console.log(this.state);
    }

    render () {
        return(
            <div className = "FormValues">
                <form onSubmit = {this.handleSubmit}>
                    <div className = "FormField">
                        <input type = "email" id = "email" placeholder = "Enter your Email ID" name = "email" className = "FormField_Input" value = {this.state.email} onChange = {this.handleChange}></input>
                    </div>

                    <div className = "FormField">
                        <input type = "password" id = "password" placeholder = "Enter your Password" name = "password" className = "FormField_Input" value = {this.state.password} onChange = {this.handleChange}></input>
                    </div>
                    
                    <div className = "FormField">
                        <button className = "FormField_Button">Sign In</button> <Link to = "/" className = "FormField_Link">Create an account</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInForm;
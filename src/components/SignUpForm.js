import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor () {
        super();
        this.state = {
            name : '',
            password: '',
            email: '',
            terms_conditions: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        this.setState ({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("You have successfully created an account with the follwing data:");
        console.log(this.state);
    }
    render () {
        return (
            <div className = "FormValues">
                <form onSubmit = {this.handleSubmit}>
                <div className = "FormField">
                    <input type = "text" id = "name" placeholder = "Enter your Name" name = "name" className = "FormField_Input" value = {this.state.name} onChange = {this.handleChange}></input>
                </div>

                <div className = "FormField">
                    <input type = "password" id = "password" placeholder = "Enter your Password" name = "password" className = "FormField_Input" value = {this.state.password} onChange = {this.handleChange}></input>
                </div>
                
                <div className = "FormField">
                    <input type = "email" id = "email" placeholder = "Enter your Email ID" name = "email" className = "FormField_Input" value = {this.state.email} onChange = {this.handleChange}></input>
                </div>
                
                <div className = "FormField" >
                    <input type = "checkbox" id = "checkbox" name = "terms_conditions" className = "FormField_Checkbox" value = {this.state.terms_conditions} onChange = {this.handleChange}/> I agree all statements in
                    <a href = "#" className = "FormField_Terms">terms and conditions</a>
                </div>
                
                <div className = "FormField">
                    <button className = "FormField_Button">Sign Up</button> <Link to = "/sign-in" className = "FormField_Link">Already having an account</Link>
                </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
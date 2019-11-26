import React, { Component } from 'react'
import "./LogIn.css"
import Input from '../UI-Elements/Input'
import Button from '../UI-Elements/Button'

class LogIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleLogButton = () => {
        console.log('LOG IN ACTION: ', this.state.email, this.state.password);
    }

    handleForgotPassword = () => {
        console.log('FORGOT PASSWORD ACTION');
    }

    handleCreateAccount = () => {
        console.log('CREATE ACCOUNT ACTION');
    }

    emailChangeHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordChangeHandler = (event) => {
        const password = event.target.value;
        this.setState({
            password: password
        })
    }

    render() {
        return (
            <div className="background">
                <div className="log-content">
                    <h1 className="primary-font log-image-text light-text">
                        YOUR<br/>
                        ART<br/>
                        MUSEUM
                    </h1>
                    <p className="address primary-font light-text">
                        151 3rd St<br/>
                        San Fransisco, CA 94103
                    </p>
                    <Input placeholder="Email address" type="text" changed={this.emailChangeHandler}/>
                    <Input placeholder="Password" type="password" changed={this.passwordChangeHandler}/>
                    <p onClick={this.handleForgotPassword} className="forgot-password primary-font light-text">Forgot your password?</p>
                    <Button clicked={this.handleLogButton} text="Log in"/>
                    <p onClick={this.handleCreateAccount} className="create-account primary-font light-text">Don't have an account?</p>
                </div>
            </div>
        )
    }

}

export default LogIn
import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "123456",
            emailError: ''
        }
    }
    changeText = (event) => {
        // console.log("calling", event.target.name);
        this.setState({ email: event.target.value })
        let err = this.isEmailValid(event.target.value)
        if (err) {
            this.setState({ emailError: 'Email is invalid' })
        } else {
            this.setState({ emailError: '' })

        }

    }

    isEmailValid(email) {
        if (email.length < 3) {
            return true
        } else {
            return false
        }
    }

    click = () => {
        console.log("click method called");
        // this.state.email="test@gmail.com"
        // this.setState({ email: "test@gmail.com" })

        console.log('num is ', this.state);
    }

    render() {
        console.log("render method called");
        return (
            <div>
                {/* <div>Register component {this.state.email}</div>
                <div onClick={this.click}>{this.state.password}</div>
                <input type="text" name="input" /> */}

                <TextField
                    error={this.state.emailError.length != 0}
                    id="outlined-error-helper-text"
                    label="email"
                    defaultValue=""
                    helperText={this.state.emailError}
                    variant="outlined"
                    onChange={this.changeText}
                />
            </div>
        )
    }
}
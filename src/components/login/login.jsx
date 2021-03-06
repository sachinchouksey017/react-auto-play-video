import React from 'react';
export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            isLogined: false
        }
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitClick = () => {
        if ((this.state.username == "krishankantsinghal") && (this.state.password == "krishankant123")) {
            this.setState({ isLogined: true });
        }
    }
    render() {
        return (
            <div>
                <input type="text" name="username" hint="username" onChange={this.handleInputChange} />
                <input type="password" name="password" hint="password" onChange={this.handleInputChange} />
                <button name="submit" onClick={this.submitClick}> Submit</button>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Q80x-ESEuNc?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        );
    }
}
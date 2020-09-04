import React from "react";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            password: "",
            password2: "",
            errors: {},
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push("/login");
        }

        this.setState({ errors: nextProps.errors });
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender, 
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };
        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>{this.state.errors[error]}</li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-login-form-container">
                <form className='signup-login-form' onSubmit={this.handleSubmit}>
                    <h1>Sign up</h1>
                    <div>
                        <input
                            type="text"
                            value={this.state.firstName}
                            onChange={this.update("firstName")}
                            placeholder="First Name"
                        />
                        <br />
                        <input
                            type="text"
                            value={this.state.lastName}
                            onChange={this.update("lastName")}
                            placeholder="Last Name"
                        />
                        <div className="signup-dropdown-div">
                            <select value={this.state.gender} onChange={this.update('gender')}>
                                <option value="" disabled>Select a gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="non-binary">Non-binary</option>
                                <option value="other">Other</option>
                                <option value="decline to answer">Decline to answer</option>
                            </select>
                        </div>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                            placeholder="Email"
                        />
                        <br />
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                            placeholder="Password"
                        />
                        <br />
                        <input
                            type="password"
                            value={this.state.password2}
                            onChange={this.update("password2")}
                            placeholder="Confirm Password"
                        />
                        <br />
                        <input className='btn' type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);
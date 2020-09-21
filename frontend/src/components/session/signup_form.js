import React from "react";
import { withRouter } from "react-router-dom";
import { RECEIVE_SESSION_ERRORS } from "../../actions/session_actions";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            pronouns: "",
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
            pronouns: this.state.pronouns, 
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };
        let loginUser = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.signup(user).then((res) => {
            if (res.type !== RECEIVE_SESSION_ERRORS) this.props.login(loginUser);
        });
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
                            <select value={this.state.pronouns} onChange={this.update('pronouns')}>
                                <option value="" disabled>Select your pronouns</option>
                                <option value="he/him/his">he/him/his</option>
                                <option value="she/her/hers">she/her/hers</option>
                                <option value="they/them/theirs">they/them/theirs</option>
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
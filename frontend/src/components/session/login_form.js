import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.clearedErrors = false;
        this.loginDemoUser = this.loginDemoUser.bind(this); 
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/dashboard');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.login(user)
            if (!this.state.errors) {
                this.props.history.push('/dashboard')
            }
    }

    loginDemoUser(e) {
        e.preventDefault(); 
        let user = {
           email: "guest@demo.com", 
           password: "guestlogin" 
        }; 
        this.props.login(user)
        if (!this.state.errors) {   
            this.props.history.push('/dashboard')
        }
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
                <form className="signup-login-form" onSubmit={this.handleSubmit}> 
                    <h1>Login</h1>
                    <div>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input className="btn" type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
                <form className="signup-login-form demo-form" onSubmit={this.loginDemoUser}>
                    <div>
                        <input className="btn" type="submit" value="Demo Login" /> 
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);
import React from 'react';

class AskOfferForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "",
            title: "",
            description: "",
            timeCommitment: "",
            deadline: "",
            timeOfDay: "",
            posterId: this.props.currentUserId,
            location: { lat: "", lng: ""},

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors()
    }

    renderErrors() {
        return (
            <ul>
                {Object.values(this.props.errors).map((error, i) => {
                    return (<li key={i}>
                        {error}
                    </li>)
                })}
            </ul>
        )
    }

    // componentDidMount() {
    //     this.props.fetchUser(this.props.currentUserId)
    // }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = Object.assign({}, this.state);
        this.setState({
            category: "",
            title: "",
            description: "",
            timeCommitment: "",
            deadline: "",
            timeOfDay: "",
            posterId: this.props.currentUserId,
            location: { lat: "", lng: "" },
        });
        this.props.processForm(data)
             .then((res) => {
                if (res.type !== 'RECEIVE_OFFER_ERRORS') {
                    this.props.history.push('/dashboard')
             }})
    }

    render() {
        const { formType, currentUser } = this.props
        if (!currentUser) {
            return null
        }
        return (
            <div>
                <h2 className="formTitle" >{formType}</h2>
                <form className="fullForm" onSubmit={this.handleSubmit}>
                    <select className="categorySelect"
                        value={this.state.category} 
                        onChange={this.update('category')}>
                        <option value="" disabled>Select a category</option>
                        <option value="general">General</option>
                        <option value="yard work">Yard Work</option>
                        <option value="errand">Errand</option>
                        <option value="house work">House Work</option>
                        <option value="repair">Repair</option>
                        <option value="transportation">Transportation</option>
                        <option value="delivery">Delivery</option>
                        <option value="event help">Event Help</option>
                        <option value="other">Other</option>
                    </select>
                    <br/>
                    <label>Title:
                        <input className="formInput"
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}/>
                    </label>
                    <br/>
                    <label>Description:
                        <textarea className="formInput" 
                            value={this.state.description}
                            cols="30" rows="10"
                            onChange={this.update('description')}>
                        </textarea>
                    </label>
                    <br/>
                    <label>Time Commitment:
                        <input className="formInput"
                            type="number"
                            value={this.state.timeCommitment}
                            onChange={this.update('timeCommitment')}
                            placeholder="Enter number of hours"/>
                    </label>
                    <br/>
                    <label>Date task needs to be completed
                        <input className="formInput"
                            type="date"
                            value={this.state.deadline}
                            onChange={this.update('deadline')} />
                    </label>
                    <br/>
                    <label>Time of Day
                        <select className="formInput"
                            value={this.state.timeOfDay} 
                            onChange={this.update('timeOfDay')}>
                            <option value="" disabled>Select a time of day</option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                            <option value="night">Night</option>
                            <option value="any">Any</option>
                        </select>
                    </label>
                    <br/>
                    <button className="submitBtn">{formType}</button>
                    <div className='errors'>
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        )
    }
}

export default AskOfferForm
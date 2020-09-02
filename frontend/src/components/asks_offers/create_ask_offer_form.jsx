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
            // posterId: this.props.currentUser.id,
            location: { lat: "", lng: ""},
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

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
            // posterId: this.props.currentUser.id,
            location: { lat: "", lng: "" },
        });
        this.props.processForm(data)
            .then(() => this.props.history.push('/dashboard'));
    }

    render() {
        const { formType } = this.props
        return (
            <div>
                <h2>{formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    <select 
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
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}/>
                    </label>
                    <br/>
                    <label>Description:
                        <textarea 
                            value={this.state.description}
                            cols="30" rows="10"
                            onChange={this.update('description')}>
                        </textarea>
                    </label>
                    <br/>
                    <label>Time Commitment:
                        <input
                            type="number"
                            value={this.state.timeCommitment}
                            onChange={this.update('timeCommitment')}
                            placeholder="Enter number of hours"/>
                    </label>
                    <br/>
                    <label>Date task needs to be completed
                        <input
                            type="date"
                            value={this.state.deadline}
                            onChange={this.update('deadline')} />
                    </label>
                    <br/>
                    <label>Time of Day
                        <select
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
                    <button>{formType}</button>
                </form>
            </div>
        )
    }
}

export default AskOfferForm
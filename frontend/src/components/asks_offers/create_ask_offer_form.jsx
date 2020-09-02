import React from 'react';
import Geocode from 'react-geocode'; 
import Keys from '../../util/keys'; 

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
            address: '', 
            posterId: this.props.currentUser.id,
            location: { lat: "", lng: ""},
        }
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.submitAddress = this.submitAddress.bind(this); 
    }

    componentDidMount() {
        Geocode.setApiKey(Keys.GoogleMapsAPI); 
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }
    
    submitAddress(){
        Geocode.fromAddress(this.state.address).then(
            response => {
                const formattedAddress = response.results[0].formatted_address; 
                const {lat, lng} = response.results[0].geometry.location; 
                this.setState({location: { lat: lat, lng: lng }, address: formattedAddress}); 
                console.log(lat, lng); 
            }, 
            error => console.log(error)
        )
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
            posterId: this.props.currentUser.id,
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
                <label>location
                        <textarea
                        rows='3'  
                        columns="30"
                        placeholder="address"
                        value={this.state.address}
                        onChange={this.update('address')} />
                    <button
                        onClick={() => this.submitAddress()}>Add Address
                        </button>
                </label>
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
                    <br/>
                    <button id="submit">{formType}</button>
                </form>   
            </div>
        )
    }
}

export default AskOfferForm
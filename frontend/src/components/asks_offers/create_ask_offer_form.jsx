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
        this.renderErrors = this.renderErrors.bind(this)
    }

    componentDidMount() {
        Geocode.setApiKey(Keys.GoogleMapsAPI);
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
            posterId: this.props.currentUserId,
            location: { lat: "", lng: "" },
        });
        this.props.processForm(data)
             .then((res) => {
                if (res.type !== 'RECEIVE_OFFER_ERRORS' && res.type !== 'RECEIVE_ASK_ERRORS') {
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
import React from 'react';
import Geocode from 'react-geocode'; 
import Keys from '../../util/keys'; 

class AskOfferForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.data;
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.submitAddress = this.submitAddress.bind(this); 
        this.renderErrors = this.renderErrors.bind(this)
        this.goBack = this.goBack.bind(this)
    }

    componentDidMount() {
        Geocode.setApiKey(Keys.GoogleMapsAPI);
        this.props.clearErrors();
        this.props.fetchUser(this.props.currentUserId)
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
            }, 
            error => console.log(error)
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
             .then((res) => {
                if (res.type !== 'RECEIVE_OFFER_ERRORS' && res.type !== 'RECEIVE_ASK_ERRORS') {
                    if (this.props.formType === 'Create an Ask') {
                        this.props.history.push('/asks')
                    } else {
                        this.props.history.push('/offers')
                    }
             }})
    }

    goBack() {
        this.props.history.goBack()
    }

    render() {
        const { formType, currentUser } = this.props
        if (!currentUser) {
            return null
        }
        const deadline =  (formType === "Create an Ask") ? (
            <label>Date task needs to be completed
                                <br />
                <input className="formInput"
                    type="date"
                    value={this.state.deadline}
                    onChange={this.update('deadline')} />
            </label>
        ) : (<label></label>)
        let formHeight;
        if (formType === "Create an Ask") {
            formHeight = { '--form-height': '890px' }
        } else {
            formHeight = { '--form-height': '820px' }
        } 
        return (
            <div className="AO-form-container">
                <div className="AO-form">
                    <h1 className="formTitle" >{formType}</h1>
                    <div style={formHeight}>
                        
                    
                        <label className="AO-location-label">Location:
                            <br/> 
                            <div>
                                <textarea
                                rows='3'  
                                columns="30"
                                placeholder="address"
                                value={this.state.address}
                                onChange={this.update('address')} />
                                <button className="address-btn"
                                    onClick={() => this.submitAddress()}>Add Address
                                </button>
                            </div>
                        </label>
                        <form className="fullForm" onSubmit={this.handleSubmit}>
                            <label className="category-label">Category:</label>
                            <br/>
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
                                <br/> 
                                <input className="formInput"
                                    placeholder="name of the post"
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}/>
                            </label>
                            <br/>
                            <label>Description:
                                <br/> 
                                <textarea className="formInput" 
                                    placeholder="what it is"
                                    value={this.state.description}
                                    cols="30" rows="10"
                                    onChange={this.update('description')}>
                                </textarea>
                            </label>
                            <br/>
                            <label>Time Commitment:
                                <br/>
                                <input className="formInput"
                                    type="number"
                                    value={this.state.timeCommitment}
                                    onChange={this.update('timeCommitment')}
                                    min='0'
                                    placeholder="Enter number of hours"/>
                            </label>
                            <br/>
                            <label>Time of Day
                                <br/>
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
                            {deadline}
                            <br/> 
                            <br/>
                            <button className="submitBtn btn offer-btn">{formType}</button>
                            <button className="cancel-btn" onClick={this.goBack}>Cancel</button>
                            <div className='errors'>
                                {this.renderErrors()}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AskOfferForm
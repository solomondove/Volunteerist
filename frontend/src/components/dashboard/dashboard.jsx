import React from 'react';
import AskMapContainer from '../asks_offers/ask_map_container'; 
import OfferMapContainer from '../asks_offers/offer_map_container'; 

class Dashboard extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
          visible: "asks"
        }; 

      this.handleAskOfferSwitch = this.handleAskOfferSwitch.bind(this); 
    }  

    handleAskOfferSwitch(){
      return e => this.setState({visible: e.currentTarget.value})
    }

    render() {
        const mapComponent = (this.state.visible === "asks") ? (
          <AskMapContainer />
        ) : (
          <OfferMapContainer />
        )
        
        return (
          <div className="dashboard">
            <select name="asksOffers" value={this.state.visible} onChange={this.handleAskOfferSwitch()}> 
              <option value="asks">Asks</option>
              <option value="offers">Offers</option> 
            </select>

            {mapComponent}
          </div>
        );
    }
}

export default Dashboard
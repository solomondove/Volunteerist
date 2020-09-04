import React from 'react';

class CompleteAskForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            endorsement: 0,
            satisfaction:[0, 0, 0, 0],
            hoursWorked: 0,
            askCompleted: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkSat = this.checkSat.bind(this);
    }

    componentDidMount() {
        this.props
          .fetchAsk(this.props.askId)
          .then((action) =>  this.props.fetchUser(action.ask.data.volunteer));
    }

    update(field) {
        return e => {
            switch (field) {
                case "hoursWorked":
                    this.setState({[field]: e.currentTarget.value})
                default:
                break
            }
           
        }
    }

    checkSat(e) {
        if (e.currentTarget.value === "noShow") {
            this.setState({satisfaction: [1, 0, 0, 0]})
        } else if (e.currentTarget.value === "notSat") {
            this.setState({satisfaction: [0, 1, 0, 0]})
        } else if (e.currentTarget.value === "sat") {
            this.setState({satisfaction: [0, 0, 1, 0]})
        } else if (e.currentTarget.value === "verySat") {
            this.setState({satisfaction: [0, 0, 0, 1]})
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        let asksCompleted = {}
        let newStats = {}
        
        this.props.completeAsk(this.props.ask._id);
        this.props.history.push('/profile')
    }

    render() {
        if (!this.props.ask) {
            return null
        }
        debugger
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <h1>Please leave a review for your volunteer!</h1>

              <h2>How did your volunteer do?</h2>
              <br />
              <select className="categorySelect" onChange={this.checkSat}>
                <option value="noShow">Did not show up</option>
                <option value="notSat">Not satisfied</option>
                <option value="sat">Satisfied</option>
                <option value="verySat">Very satisfied</option>
              </select>
              <br />

              <h2>How many hours did the volunteer work?</h2>
              <br />
              <input
                type="number"
                min="1"
                max="10"
                placeholder="Enter number of hours"
                value={this.state.hoursWorked}
                onChange={this.update("hoursWorked")}
              />
              <br/>



              <button>Submit Review</button>
            </form>
          </div>
        );}
}

export default CompleteAskForm;
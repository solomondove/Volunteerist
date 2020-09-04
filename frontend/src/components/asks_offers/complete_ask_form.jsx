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
                    this.setState({[field]: parseInt(e.currentTarget.value)});
                    break; 
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
        let asksCompleted = this.props.volunteer.stats.asksCompleted 
        if (this.state.satisfaction[0] === 0) {
            asksCompleted += 1
        }

        let hrsCompleted = this.props.volunteer.stats.hrsCompleted 
        if (this.state.satisfaction[0] === 0) {
            hrsCompleted += this.state.hoursWorked
        }

        let didNotShow = this.props.volunteer.stats.didNotShow 
            didNotShow += this.state.satisfaction[0]

        let notSatisfied = this.props.volunteer.stats.notSatisfied
            notSatisfied += this.state.satisfaction[1]

        let satisfied = this.props.volunteer.stats.satisfied 
            satisfied += this.state.satisfaction[2]

        let verySatisfied = this.props.volunteer.stats.verySatisfied 
            verySatisfied += this.state.satisfaction[3]

        let newStats = {
            stats: {
            hrsCompleted,
            asksCompleted,
            didNotShow,
            notSatisfied,
            satisfied,
            verySatisfied
            }
        }
        
        this.props.addStats(this.props.volunteer._id, newStats);
        this.props.completeAsk(this.props.ask._id);
        this.props.history.push('/profile');
    }

    render() {
        if (!this.props.ask) {
            return null
        }
        return (
          <div className="AO-form-container">
            <div className="AO-form">
              <form className="fullForm askForm" onSubmit={this.handleSubmit}>
                <h1 className="formTitle">
                  Please leave a review for your volunteer!
                </h1>

                <h2 className="completeFormSection">
                  How did your volunteer do?
                </h2>
                <br />
                <select className="categorySelect" onChange={this.checkSat}>
                  <option value="noShow">Did not show up</option>
                  <option value="notSat">Not satisfied</option>
                  <option value="sat">Satisfied</option>
                  <option value="verySat">Very satisfied</option>
                </select>
                <br />

                <h2 className="completeFormSection">
                  How many hours did the volunteer work?
                </h2>
                <br />
                <input
                  className="formInput"
                  type="number"
                  min="0"
                  max="10"
                  placeholder="Enter number of hours"
                  value={this.state.hoursWorked}
                  onChange={this.update("hoursWorked")}
                />
                <br />

                <button className="submitBtn index-button btn">Submit Review</button>
                <br/>
              </form>
            </div>
          </div>
        );}
}

export default CompleteAskForm;
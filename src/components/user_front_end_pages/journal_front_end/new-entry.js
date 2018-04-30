import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Title from '../title';
import Header from '../header';

class NewEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positivityInput: 0,
            spentInput: 0,
            savedInput: 0,
            meditationInput: 0,
            sleepInput: 0,
            stepsInput: 0,
            dietInput: 0,
            exerciseInput: 0,
            waterInput: 0
        }
    }

    render() {
        return (
            <div className="container">
            <div className="col-md-3 col-md-offset-6" style={{ marginRight: 20, marginTop: 50 }}>
                <Title titleText="Journal"/>
            </div>
            <div className="row">
                <div className="col-md-10 col-md-offset-2">
                <div className="row">
                 <Header headerText="Make a New Entry"/>
                 </div>
                <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="row">
                        <div className="card col-md-3 newEntryCard">
                            <h3>Water</h3>
                            <p>How many cup did you drink today?</p>
                            <input onChange={(e) => { this.setState({ waterInput: e.target.value }) }} value={this.state.waterInput} type="number" className="form-control" />
                        </div>

                        <div className="card col-md-3 col-md-offset-1 newEntryCard">
                            <h3>Exercise</h3>
                            <p>How long did you exercise for today?</p>
                            <input onChange={(e) => { this.setState({ exerciseInput: e.target.value }) }} value={this.state.exerciseInput} type="number" className="form-control" />
                        </div>

                        <div className="card col-md-3 col-md-offset-1 newEntryCard">
                            <h3>Diet</h3>
                            <p>How many calories did you eat today?</p>
                            <input onChange={(e) => { this.setState({ dietInput: e.target.value }) }} value={this.state.dietInput} type="number" className="form-control" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="card col-md-3 newEntryCard">
                            <h3>Steps</h3>
                            <p>How many steps did you take today?</p>
                            <input onChange={(e) => { this.setState({ stepsInput: e.target.value }) }} value={this.state.stepsInput} type="number" className="form-control" />
                        </div>

                        <div className="card col-md-3 col-md-offset-1 newEntryCard">
                            <h3>Sleep</h3>
                            <p>How long did you sleep for?</p>
                            <input onChange={(e) => { this.setState({ sleepInput: e.target.value }) }} value={this.state.sleepInput} type="number" className="form-control" />
                        </div>

                        <div className="card col-md-3 col-md-offset-1 newEntryCard">
                            <h3>Meditation</h3>
                            <p>How long did you meditate today?</p>
                            <input onChange={(e) => { this.setState({ meditationInput: e.target.value }) }} value={this.state.meditationInput} type="number" className="form-control" />
                        </div>
                    </div>

                    <div className="row">

                        <div className="card col-md-3 newBudgetCard">
                            <h3>Budget</h3>
                            <p>How much did you save today? </p>
                            <input onChange={(e) => { this.setState({ savedInput: e.target.value }) }} value={this.state.savedInput} type="number" className="form-control" />
                            <p>And spend? </p>
                            <input onChange={(e) => { this.setState({ spentInput: e.target.value }) }} value={this.state.spentInput} type="number" className="form-control" />
                        </div>

                        <div className="card col-md-7 col-md-offset-1 newPositivityCard">
                            <h3>Positivity</h3>
                            <p>List a positive thing that happend today.</p>
                            <textarea onChange={(e) => { this.setState({ positivityInput: e.target.value }) }} value={this.state.positivityInput} className="form-control" rows="6"  placeholder="Write here..." ></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-md-offset-1" style={{ margin: 15 }}>
                            <button onClick={this.submitEntry.bind(this)} className="btn entryBtn pull-right" type="submit"> Submit </button>
                        </div>
                    </div>
                </div >
            </div >





                </div>
            </div>
        </div>



        )
    }

    //make conditionals for the POST

    submitEntry() {

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        var date = yyyy + '/' + mm + '/' + dd;


        if (this.state.positivityInput.length > 2) {

            var positivity = {
                "dateEntered": date,
                "positivityEntry": this.state.positivityInput,
                "userId": this.props.userId,
            }
            axios.post('http://localhost:5000/api/postivity', positivity)
                .then(
                    axios.get('http://localhost:5000/api/positivity')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

        if (this.state.spentInput > 0 || this.state.savedInput > 0) {

            var budget = {
                "dateEntered": date,
                "savedMoney": this.state.savedInput,
                "spentMoney": this.state.spentInput,
                "userId": this.props.userId,
            }
            axios.post('http://localhost:5000/api/budget', budget)
                .then(
                    axios.get('http://localhost:5000/api/budget')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

        if (this.state.meditationInput > 0) {

            var meditation = {
                "dateEntered": date,
                "meditationHours": this.state.meditationInput,
                "userId": this.props.userId,
            }
            axios.post('http://localhost:5000/api/meditation', meditation)
                .then(
                    axios.get('http://localhost:5000/api/meditation')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

        if (this.state.sleepInput > 0) {

            var sleep = {
                "dateEntered": date,
                "sleepHours": this.state.sleepInput,
                "userId": this.props.userId,
            }
            axios.post('http://localhost:5000/api/sleep', sleep)
                .then(
                    axios.get('http://localhost:5000/api/sleep')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

        if (this.state.stepsInput > 0) {

            var steps = {
                "dateEntered": date,
                "stepsTaken": this.state.stepsInput,
                "userId": this.props.userId,
            }
            axios.post('http://localhost:5000/api/steps', steps)
                .then(
                    axios.get('http://localhost:5000/api/steps')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

        if (this.state.dietInput > 0) {

            var diet = {
                "dateEntered": date,
                "calories": this.state.dietInput,
                "userId": this.props.userId,
            }
            axios.post('http://localhost:5000/api/diet', diet)
                .then(
                    axios.get('http://localhost:5000/api/diet')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

        if (this.state.exerciseInput > 0) {

            var exercise = {
                "dateEntered": date,
                "exerciseHours": this.state.exerciseInput,
                "userId": this.props.userId,
            }
            axios.post('http://localhost:5000/api/exercise', exercise)
                .then(
                    axios.get('http://localhost:5000/api/exercise')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }

        if (this.state.waterInput > 0) {

            var water = {
                "dateEntered": date,
                "cupsOfWater": this.state.waterInput,
                "userId": this.props.userId,
            }
            axios.post('http://localhost:5000/api/water', water)
                .then(
                    axios.get('http://localhost:5000/api/water')
                        .then(response => {
                            // this.setState({ users: response.data });
                            console.log(response.data.length)
                        })
                )
        }
    }
}

const mapStateToProps = state => {
    return {
        userId: state.userId
    }
}

export default connect(mapStateToProps)(NewEntry);
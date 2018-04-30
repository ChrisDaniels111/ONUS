import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Center from 'react-center';


import BoxLink from '../box-link';
import BoxLinkSmall from '../box-link-sm';

import { userDetails } from '../../redux/actions'
import Title from '../title';
import Header from '../header';
import DataDashboard from '../data-dashboard';


class JournalDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            userWater: '',
            userExercise: '',
            userDiet: '',
            userSteps: '',
            userSleep: '',
            userMeditation: '',
            userSpent: '',
            userSaved: '',
            userPositivity: ''
        }
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-3 col-md-offset-6" style={{ marginRight: 20, marginTop: 50 }}>
                    <Title titleText="Journal" />

                </div>



                <div className="row" style={{ marginLeft: 140 }} >
                    <div className="col-md-12">
                        <Header headerText='Daily Entry' />
                        <Header headerText={this.state.date} />
                        <br/>
                        <div className="row">
                            <input type="date" style={{ display: 'inline', paddingLeft: 10, }} className="input-group date" onChange={(e) => { this.setState({ date: e.target.value }) }} value={this.state.date} />
                            <button style={{ paddingLeft: 10, display: 'inline' }} onClick={this.dateSubmitted.bind(this)} className="btn"> Submit </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-10 col-md-offset-2"style={{ paddingTop:40 }}>

                    <div className="row">
                        <div className="card col-md-3 entryCard" >
                            <div>
                                <h3>Water</h3>
                                <p> {this.state.userWater} </p>
                            </div>
                        </div>

                        <div className="card col-md-3 entryCard">
                            <div>
                                <h3>Exercise</h3>
                                <p> {this.state.userExercise} </p>
                            </div>
                        </div>

                        <div className="card col-md-3 entryCard">
                            <div>
                                <h3>Diet</h3>
                                <p> {this.state.userDiet} </p>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="card col-md-3 entryCard">
                            <div>
                                <h3>Steps</h3>
                                <p> {this.state.userSteps} </p>
                            </div>
                        </div>

                        <div className="card col-md-3 entryCard">
                            <div>
                                <h3>Sleep</h3>
                                <p> {this.state.userSleep} </p>
                            </div>
                        </div>

                        <div className="card col-md-3 entryCard">
                            <div>
                                <h3>Meditation</h3>
                                <p> {this.state.userMeditation} </p>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="card col-md-3 entryCard">
                            <div>
                                <h3>Budget</h3>
                                <p style={{ display: 'inline' }}>Saved:</p>
                                <p style={{ display: 'inline' }}> {this.state.userSaved} </p>
                                <br />
                                <p style={{ display: 'inline', }}>Spent:</p>
                                <p style={{ display: 'inline' }}> {this.state.userSpent} </p>
                            </div>
                        </div>

                        <div className="card col-md-6 entryCard">
                            <div>
                                <h3>Positivity</h3>
                                <p> {this.state.userPositivity} </p>
                            </div>
                        </div>
                    </div >
                </div >


                < div className="row" >
                    <div className="col-md-12">
                        <DataDashboard />
                    </div>
                </div >


            </div >
        )
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/users/' + this.props.userId)
            .then(response => {
                console.log(response.data)
                this.props.sendLoggedInUser(response.data);
            })
    }

    dateSubmitted() {

        for (var i = 0; i < this.props.user.waterEntries.length; i++) {

            var parts = this.state.date.split('/');
            var parts2 = this.props.user.waterEntries[i].dateEntered.substring(0, 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2) {
                { this.setState({ userWater: this.props.user.waterEntries[i].cupsOfWater }) }
            }
        }

        for (var i = 0; i < this.props.user.exerciseEntries.length; i++) {

            var parts = this.state.date.split('/');
            var parts2 = this.props.user.exerciseEntries[i].dateEntered.substring(0, 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2) {
                { this.setState({ userExercise: this.props.user.exerciseEntries[i].exerciseHours }) }
            }
        }

        for (var i = 0; i < this.props.user.dietEntries.length; i++) {

            var parts = this.state.date.split('/');
            var parts2 = this.props.user.dietEntries[i].dateEntered.substring(0, 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2) {
                { this.setState({ userDiet: this.props.user.dietEntries[i].calories }) }
            }
        }

        for (var i = 0; i < this.props.user.stepsEntries.length; i++) {

            var parts = this.state.date.split('/');
            var parts2 = this.props.user.stepsEntries[i].dateEntered.substring(0, 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2) {
                { this.setState({ userSteps: this.props.user.stepsEntries[i].stepsTaken }) }
            }
        }


        for (var i = 0; i < this.props.user.sleepEntries.length; i++) {

            var parts = this.state.date.split('/');
            var parts2 = this.props.user.sleepEntries[i].dateEntered.substring(0, 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2) {
                { this.setState({ userSleep: this.props.user.sleepEntries[i].sleepHours }) }
            }
        }

        for (var i = 0; i < this.props.user.meditationEntries.length; i++) {

            var parts = this.state.date.split('/');
            var parts2 = this.props.user.meditationEntries[i].dateEntered.substring(0, 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2) {
                { this.setState({ userMeditation: this.props.user.meditationEntries[i].meditationHours }) }
            }
        }

        for (var i = 0; i < this.props.user.budgetEntries.length; i++) {

            var parts = this.state.date.split('/');
            var parts2 = this.props.user.budgetEntries[i].dateEntered.substring(0, 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2) {
                { this.setState({ userSpent: this.props.user.budgetEntries[i].spentMoney }) }
                { this.setState({ userSaved: this.props.user.budgetEntries[i].savedMoney }) }
            }
        }

        for (var i = 0; i < this.props.user.positivityEntries.length; i++) {

            var parts = this.state.date.split('/');
            var parts2 = this.props.user.positivityEntries[i].dateEntered.substring(0, 10);

            var d2 = Date.parse(parts)
            var d1 = Date.parse(parts2);

            if (d1 == d2) {
                { this.setState({ userPositivity: this.props.user.positivityEntries[i].positivityEntry }) }
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        userId: state.userId,
        user: state.user
    }
}


const mapDispatchToProps = dispatch => {
    return {
        sendLoggedInUser: object => dispatch(userDetails(object))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JournalDay);
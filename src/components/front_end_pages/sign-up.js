import React from 'react';
import Center from 'react-center';
import { connect } from 'react-redux';
import axios from 'axios'
import { Redirect } from 'react-router-dom';

class SignUP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            password: '',
            password1: '',
            image_url: '',
            age: 0,
            gender: '',
            goalCalories: 0,
            goalExercise: 0,
            goalMeditationHours: 0,
            goalSleepHours: 0,
            goalCupsOfWater: 0,
            goalSteps: 0,
            redirect: false,
        }
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to="/sign_in" />;
        }
        
        return (
            <Center>
                <div style={{ marginBottom: 150, paddingTop: 30, textAlign: 'center' }}>
                    <form>

                        <div className="form-group form-inline" style={{ paddingTop: 30 }}>
                            <h2 id="front-pageText"> Enter Name </h2>

                            <input onChange={(e) => { this.setState({ name: e.target.value }) }} value={this.state.name} type="text" className='form-control' placeholder="First Name" required />

                            <input onChange={(e) => { this.setState({ lastName: e.target.value }) }} value={this.state.lastName} type="text" style={{ marginLeft: 20 }} className='form-control' placeholder="Last Name" required />
                        </div>

                        <div className="form-group" style={{ paddingTop: 40 }} >
                            <h2 id="front-pageText"> Email Address </h2>

                            <input onChange={(e) => { this.setState({ email: e.target.value }) }} value={this.state.email} type="email" className='form-control' placeholder='Email Address' required />
                        </div>

                        <div className="col-md-12" style={{ paddingTop: 30, paddingBottom: 40 }} >
                            <div className="col-md-6">

                                <div style={{ paddingTop: 40 }}>
                                    <h2 id="front-pageText"> Age </h2>
                                </div>

                                <input onChange={(e) => { this.setState({ age: e.target.value }) }} value={this.state.age} type="number" placeholder="Age" className="form-control" />
                            </div>

                            <div style={{ paddingLeft: 30 }} className="col-md-6" >
                                <div style={{ paddingTop: 40 }}>
                                    <h2 id="front-pageText"> Gender </h2>
                                </div>
                                <input onChange={(e) => { this.setState({ gender: e.target.value }) }} value={this.state.gender} type="text" placeholder="Gender" className="form-control" />
                            </div>
                        </div>

                        <div >
                            <div style={{ paddingTop: 40 }}>
                                <h2 id="front-pageText"> Choose Password </h2>
                            </div>
                            <div className="form-inline" style={{ paddingTop: 20 }} >
                                <input onChange={(e) => { this.setState({ password1: e.target.value }) }} value={this.state.password1} type="password" placeholder="Password" className='form-control' required />
                            </div>
                        </div>

                        <div >
                            <div style={{ paddingTop: 40 }}>
                                <h2 id="front-pageText"> Confirm Password </h2>
                            </div>
                            <div className="form-inline" style={{ paddingTop: 20 }} >
                                <input onChange={(e) => { this.setState({ password: e.target.value }) }} value={this.state.password} type="password" placeholder="Confirm Password" className='form-control' required />
                            </div>
                        </div>

                        <div >
                            <div style={{ paddingTop: 40 }}>
                                <h2 id="front-pageText"> Ideal calories </h2>
                            </div>
                            <div className="form-inline" style={{ paddingTop: 20 }} >
                                <input onChange={(e) => { this.setState({ goalCalories: e.target.value }) }} value={this.state.goalCalories} type="number" className='form-control' />
                            </div>
                        </div>

                        <div >
                            <div style={{ paddingTop: 40 }}>
                                <h2 id="front-pageText"> Ideal hours of exercise </h2>
                            </div>
                            <div className="form-inline" style={{ paddingTop: 20 }} >
                                <input onChange={(e) => { this.setState({ goalExercise: e.target.value }) }} value={this.state.goalExercise} type="number" className='form-control' />
                            </div>
                        </div>

                        <div >
                            <div style={{ paddingTop: 40 }}>
                                <h2 id="front-pageText"> Ideal hours of meditation </h2>
                            </div>
                            <div className="form-inline" style={{ paddingTop: 20 }} >
                                <input onChange={(e) => { this.setState({ goalMeditationHours: e.target.value }) }} value={this.state.goalMeditationHours} type="number" className='form-control' />
                            </div>
                        </div>

                        <div >
                            <div style={{ paddingTop: 40 }}>
                                <h2 id="front-pageText"> Ideal hours of sleep </h2>
                            </div>
                            <div className="form-inline" style={{ paddingTop: 20 }} >
                                <input onChange={(e) => { this.setState({ goalSleepHours: e.target.value }) }} value={this.state.goalSleepHours} type="number" className='form-control' />
                            </div>
                        </div>

                        <div>
                            <div style={{ paddingTop: 40 }}>
                                <h2 id="front-pageText"> Ideal cups of water </h2>
                            </div>
                            <div className="form-inline" style={{ paddingTop: 20 }} >
                                <input onChange={(e) => { this.setState({ goalCupsOfWater: e.target.value }) }} value={this.state.goalCupsOfWater} type="number" className='form-control' />
                            </div>
                        </div>

                        <div >
                            <div style={{ paddingTop: 40 }}>
                                <h2 id="front-pageText"> Ideal steps </h2>
                            </div>
                            <div className="form-inline" style={{ paddingTop: 20 }} >
                                <input onChange={(e) => { this.setState({ goalSteps: e.target.value }) }} value={this.state.goalSteps} type="number" className='form-control' />
                            </div>
                        </div>

                        <div style={{ marginTop: 50 }} >
                            <button onClick={this.postNewUser.bind(this)} className="btn" style={{ backgroundColor: 'black', fontSize: 25 }} id="menu-item"> SIGN   UP ! ! </button>
                        </div>

                    </form>
                </div>
            </Center>
        )
    }

    postNewUser() {

        if (this.state.password != this.state.password1) {
            alert("Passwords do not match")
        }

        else {
            var user = {
                name: this.state.name,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                image_url: this.state.url,
                age: this.state.age,
                gender: this.state.gender,
                goalCalories: this.state.goalCalories,
                goalExercise: this.state.goalExercise,
                goalMeditationHours: this.state.goalMeditationHours,
                goalSleepHours: this.state.goalSleepHours,
                goalCupsOfWater: this.state.goalCupsOfWater,
                goalSteps: this.state.goalSteps,
            }
            axios.post('http://localhost:5000/api/users', user)
                .then(
                    console.log(user),
                    this.setState({ redirect: true }),
            )
            alert("Account created. Please login")
        }
    }
}

export default SignUP
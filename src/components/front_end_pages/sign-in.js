import React from 'react';
import Center from 'react-center';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { loadUser } from '../redux/actions'
import UserMainPage from '../user_front_end_pages/user-main-page'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            users: [],
            redirect: false
        }
    }
    render() {

        if (this.state.redirect) {
            return <Redirect to="/user" />;
        }

        return (
            <Center>
                <div style={{ marginBottom: 200, textAlign: 'center' }}>
                    <div className="form-group" style={{ paddingTop: 50 }} >
                        <div style={{ paddingBottom: 10 }}>
                            <label id="front-pageText"> Email </label>
                        </div>
                        <input onChange={(e) => { this.setState({ email: e.target.value }) }} value={this.state.email} type="email" className='form-control' placeholder='Email Address' />
                    </div>

                    <div >
                        <div style={{ paddingTop: 40 }}>
                            <label id="front-pageText"> Password </label>
                        </div>
                        <div className="form-inline" style={{ paddingTop: 20 }} >
                            <input onChange={(e) => { this.setState({ password: e.target.value }) }} value={this.state.password} type="password" placeholder="Password" className='form-control' />
                        </div>
                    </div>

                    <div style={{ marginTop: 50 }} >
                        <button onClick={this.logIn.bind(this)} className="btn" style={{ backgroundColor: 'black', fontSize: 25 }} id="menu-item" > SIGN   IN </button>
                    </div>
                    
                </div>
            </Center>
        )
    }

    componentDidMount() {
        axios.get('http://10.0.1.55:5000/api/users')
            .then(response => {
                var users = response.data
                this.setState({ users: users });
                console.log(this.state.users)
            })
    }

    logIn() {
        console.log(this.state.password);
        console.log(this.state.email);

        let found = false;

        for (var i = 0; i < this.state.users.length; i++) {
            if (this.state.users[i].email == this.state.email && this.state.users[i].password == this.state.password) {
                console.log(this.state.users[i].id);
                this.props.sendStateToRedux(this.state.users[i].id)
                this.setState({ redirect: true })
                found = true

                break;
            }
        }
        if (!found) {
            alert("Email and password do not match. Please try again or create an account")
        }
    }
}


const mapDispatchToProps = dispatch => {
    return {
        sendStateToRedux: apiResponse => dispatch(loadUser(apiResponse))
    }
}


export default connect(null, mapDispatchToProps)(SignIn)
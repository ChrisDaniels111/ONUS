import React from 'react';
import Center from 'react-center';
import Title from './title';
import Header from './header';



class SettingsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="container">
                <div className="col-md-3 col-md-offset-6" style={{ marginRight: 20, marginTop: 50 }}>
                    <Title titleText="Settings" />
                </div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-4">

                        <form>

                            <div className="form-group" style={{ paddingTop: 10, paddingLeft:10 }}>
                                <div className='form-inline' style={{ paddingTop: 10 }} >
                                    <label> <Header headerText="Name : " /> </label>
                                    <input type="text" style={{ marginLeft: 20 }} className='form-control' placeholder="First Name" />
                                    <input type="text" style={{ marginLeft: 20 }} className='form-control' placeholder="Last Name" />
                                </div>
                            </div>

                            <div className="col-md-12" style={{ paddingTop: 30 }} >
                                <div className="row">
                                    <div className="col-md-3 form-inline" >
                                        <label> <Header headerText="Age : " /> </label>
                                        <input type="number" className="form-control" />
                                    </div>


                                    <div style={{ paddingLeft: 40 }} className="col-md-3" >
                                        <label> <Header headerText="Gender : " /> </label>
                                        <input type="text" placeholder="Gender" className="form-control" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-md-6" style={{ paddingTop: 50 }} >
                                        <label> <Header headerText="Email Address : " /> </label>
                                        <input type="email" className='form-control' placeholder='Email Address' />
                                    </div>
                                </div>

                                <div className="row" style={{ paddingLeft: 10 }}>
                                    <div style={{ paddingTop: 40 }}>
                                        <label> <Header headerText="Password: " /> </label>
                                    </div>
                                    <div className="form-inline" style={{ paddingTop: 20 }} >
                                        <input type="password" placeholder="Password" className='form-control' />
                                        {/* <div className="form-inline" style={{ paddingTop: 30 }} > */}
                                            <input type="password" style={{ marginLeft: 20 }} placeholder="Confirm Password" className='form-control' />
                                        {/* </div> */}
                                    </div>
                                   
                                </div>
                                <div className="pull-right" style={{ marginTop: 40, marginRight: 150 }} >
                                        <a href="/user">
                                            <button className="btn entryBtn" >Edit</button>
                                        </a>
                                    </div>

                            </div>

                        </form>


                    </div>
                </div>
            </div>




        )
    }
}


export default SettingsPage
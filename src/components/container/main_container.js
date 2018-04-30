import React from 'react';

import { Link, Switch, Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Center from 'react-center';

import Container from './container'
import SecondContainer from './second_container';


class MainContainer extends React.Component {

    constructor(props) {
        super(props)

        this.FirstCont = <Container />
        this.SecondCont = <SecondContainer />

    }


        firstPageRender() {

            if (location.pathname === "/") {
                return (
                    this.FirstCont
                )
            }
            else if (location.pathname === "/about") {
                return (
                    this.FirstCont
                )
            }
            else if (location.pathname === "/blog") {
                return (
                    this.FirstCont
                )
            }
            else if (location.pathname === "/sign_in") {
                return (
                    this.FirstCont
                )
            }
            else if (location.pathname === "/sign_up") {
                return (
                    this.FirstCont
                )
            }
        }
     
        secondPageRender() {
     
            if (location.pathname === "/user") {
                return (
                    this.SecondCont
                )
            }
            else if (location.pathname === "/settings") {
                return (
                    this.SecondCont
                )
            }
            else if (location.pathname === "/journal_directory") {
                return (
                    this.SecondCont
                )
            }
            else if (location.pathname === "/planner_directory") {
                return (
                    this.SecondCont
                )
            }
            else if (location.pathname === "/new_entry") {
                return (
                    this.SecondCont
                )
            }
            else if (location.pathname === "/day") {
                return (
                    this.SecondCont
                )
            }
        }


    render() {
        return (
            <div>
                {this.firstPageRender(this)}
                {this.secondPageRender(this)}
                
            </div>
        )
    }
}

export default MainContainer
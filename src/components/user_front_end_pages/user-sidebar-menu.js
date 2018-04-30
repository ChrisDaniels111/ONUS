import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import UserMainPage from './user-main-page';
import SettingsPage  from './settings-page';
import JournalDirectory from './journal_front_end/journal-directory';
import NewEntry from './journal_front_end/new-entry';
import PlannerToDo from './planner_front_end_pages/planner-to-do';


class UserSideBarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    dropdownClick() {
        var dropdown = document.getElementsByClassName("dropdown-btn");

        for (var i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    }



    render() {
        return (
            <div className="sidenav">
                <img id="placeholderImg" src="./logo2.png" />

                <a href="/user">Home</a>
                <a href="/settings">Settings</a>
                <button className="dropdown-btn" onClick={this.dropdownClick}>Journal
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-container">
                    <a href="/journal_directory">View Directory</a>
                    <a href="/new_entry">Make New Entry</a>                   
                </div>
                <button className="dropdown-btn" onClick={this.dropdownClick}>Planner
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-container">
                    <a href="/planner_directory">View Directory</a>
                    <a href="#">Todo List</a>
                    <a href="#">Add New Planner</a>
                </div>
                <a href="/">Main</a>

            </div>

        )

    }
}

export default UserSideBarMenu
import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';


// USER FRONT END PAGES IMPORTS //
import UserSideBarMenu from '../user_front_end_pages/user-sidebar-menu';
import UserMainPage from '../user_front_end_pages/user-main-page';
import SettingsPage from '../user_front_end_pages/settings-page';
import JournalDirectory from '../user_front_end_pages/journal_front_end/journal-directory';
import PlannerDirectory from '../user_front_end_pages/planner_front_end_pages/planner-directory';
import NewEntry from '../user_front_end_pages/journal_front_end/new-entry';
import JournalDay from '../user_front_end_pages/journal_front_end/journal-day';


// USER FRONT END PAGES IMPORTS END //



class SecondContainer extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div>
                <UserSideBarMenu />
                <div>
                    <div className="container">

                        <Switch>
                            <Route path="/user" component={UserMainPage} />
                            <Route path="/settings" component={SettingsPage} />
                            <Route path="/journal_directory" component={JournalDirectory} />
                            <Route path="/planner_directory" component={PlannerDirectory} />
                            <Route path="/new_entry" component={NewEntry} />
                            <Route path='/day'  component={JournalDay}  />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default SecondContainer
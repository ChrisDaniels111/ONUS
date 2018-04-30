import React from 'react';
import Center from 'react-center';


class MenuBar extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div style={{ paddingTop: 20 }} >
                <nav className="nav-primary"  >
                    <div className="container-fluid"  >
                        <div className="navbar-header" style={{ paddingRight: 650 }}  >
                            <a href="/user">
                                <img id="placeholderImg" src="./logo2.png" />
                            </a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li> <a href="/" id="menu-item" > Home </a> </li>
                            <li> <a href="/about" id="menu-item" > About </a> </li>
                            <li> <a href="/blog" id="menu-item" > Blog </a> </li>
                            <li> <a href="/sign_in" id="menu-item" > Sign In </a> </li>
                            <li> <a href="/sign_up" id="menu-item" > Sign Up </a> </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default MenuBar











import React, {Component} from 'react';
import './Header.css';
//Header component added
class Header extends Component {
    render(){
        return(
            <div>
               <header className="app-header">
                    <p className="logo">
                      Image Viewer
                    </p>
                </header>
            </div>
        )
    }
}

export default Header;
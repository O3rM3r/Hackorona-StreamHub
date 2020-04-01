import React, { Component } from 'react';
import './header.css';

class Header extends Component{
    constructor(){
        super()
        this.state={

        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){

    }

    render(){
        return (
            <div className="header-container">
                <input 
                name="searchInput"
                type="text"
                placeholder="Search..."
                className="header-search"/>
            </div>
        )
    }
}

export default Header;

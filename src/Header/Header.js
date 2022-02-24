import React from 'react';
import {NavLink,Link} from 'react-router-dom'
import AboutMe from '../components/pages/AboutMe';
import MyPortfolio from '../components/pages/Portfolio';
import MyContacts from '../components/pages/ContactInfo';
import MyResume from '../components/pages/Resume';
import './header.css'

const Header = () => {
    return(
        <nav>
            <div className = 'div-header'>
                <div style = {{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <NavLink to='/'>About Me:<AboutMe/></NavLink>
                    <NavLink to="/">My Portfolio:<MyPortfolio/></NavLink>
                    <NavLink to="/">My Contacts:<MyContacts/></NavLink>
                    <NavLink to="/">My Resume:<MyResume/></NavLink>
                    </div>
            </div>
        </nav>
    );
}

export default Header;
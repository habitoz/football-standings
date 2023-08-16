import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import MenuIcon from '../../assets/menu.svg';

export default function Header() {
  return (
    <nav className="Nav">
      <NavLink className="Link AppLogo" to="/">
        <img className="MenuIcon" src={MenuIcon} alt="" />
        <p className="AppName">F standing</p>
      </NavLink>
      <ul className="NavItems">
        <li><NavLink className="Link" to="/">Rockets</NavLink></li>
        <li><NavLink className="Link" to="/missions">Missions</NavLink></li>
        <li><NavLink className="Link" to="/profile">My Profile</NavLink></li>
      </ul>
    </nav>
  );
}

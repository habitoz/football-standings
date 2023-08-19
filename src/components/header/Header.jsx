import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '../../assets/menu.svg';
import { chengePage, toogleSearchForm } from '../../redux/feature/app-info/appInfoSlice';

export default function Header() {
  const { activePage } = useSelector((state) => state.appInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
    dispatch(chengePage('League'));
  };
  return (
    <nav className="Nav">
      {
        activePage === 'League' && (
          <NavLink className="Link AppLogo" to="/">
            <img className="MenuIcon" src={MenuIcon} alt="" />
          </NavLink>
        )
      }
      {
        activePage !== 'League' && (
          <button className="backButton" type="button" onClick={() => handleBack()}>

            <i className="fa fa-arrow-left" />
          </button>
        )
      }
      <p className="AppName">{activePage}</p>
      {
        activePage === 'League' ? (
          <button className="searchBtn" type="button" onClick={() => dispatch(toogleSearchForm())}>
            <i className="fa fa-search" />
          </button>
        ) : <p />
      }
      <ul className="NavItems" />
    </nav>
  );
}

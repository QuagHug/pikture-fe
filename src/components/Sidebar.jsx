import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink, Link } from "react-router-dom"
import { RiHomeFill } from "react-icons/ri"
import { HiOutlineLogout } from "react-icons/hi"
import { HiArrowNarrowLeft } from "react-icons/hi"

import "./Sidebar.css"

const Sidebar = (props) => {
  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("userObject");
    navigate("/login");
  } 

  return (
    <nav className={props.toggle ? "SidebarActive" : "Sidebar"}>
      <img src={require("../img/Pikture.png")} alt="" width="140px" height="140px" id="sidebarLogo"/>
      <div>
        <div className="sidebarText">CATEGORIES:</div> 
        <NavLink to="/" className={ navData => navData.isActive ? "activeNavLink" : "navLink" }>
          <RiHomeFill className="homeLogo"/>
          Home
        </NavLink>   
        <NavLink to="/pet" className={ navData => navData.isActive ? "activeNavLink" : "navLink" }>Pet</NavLink>
        <NavLink to="/gaming" className={ navData => navData.isActive ? "activeNavLink" : "navLink" }>Gaming</NavLink>
        <NavLink to="/coding" className={ navData => navData.isActive ? "activeNavLink" : "navLink" }>Coding</NavLink>
        <NavLink to="/other" className={ navData => navData.isActive ? "activeNavLink" : "navLink" }>Other</NavLink>
        <button id="closeButton" onClick={props.handleToggle}>
          <HiArrowNarrowLeft size={20}/>
        </button>
        <HiOutlineLogout className="logoutButton" size={30} onClick={handleLogout} />
      </div>
    </nav>  
  )
}

export default Sidebar
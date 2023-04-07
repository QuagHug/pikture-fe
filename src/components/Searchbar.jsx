import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HiSearch } from "react-icons/hi";

import "./Searchbar.css"


const Searchbar = (props) => {
  const navigate = useNavigate();

  function navigateSearch() {
    navigate("/search");
  }

  return (
    <div id="Searchbar">
        <HiSearch size={30} className="searchIcon"/>
        <div className="searchContainer">
            <input type="text" placeholder="Search" className="searchInput" onClick={navigateSearch} onChange={props.handleSearch}/>
        </div>
    </div>
  )
}

export default Searchbar
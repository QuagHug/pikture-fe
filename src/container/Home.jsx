import React, { useState, useRef, useEffect } from 'react';
import { HiMenu, HiPlusSm } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";

import { Link, Route, Routes, useNavigate } from "react-router-dom";

import Sidebar from '../components/Sidebar'
import Searchbar from '../components/Searchbar';
import UserProfile from '../components/UserProfile'
import Feed from '../components/Feed';
import CreatePost from '../components/CreatePost';

import "./Home.css"
import Search from '../components/Search';

const Home = () => {

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();

  function handleToggleSidebar() {
    setToggleSidebar(!toggleSidebar);
  }

  function handleSearch(event) {
    setSearchKey(event.target.value)
  }

  useEffect(() => {
    const userObject = sessionStorage.getItem("userObject");
    if(!userObject) navigate("/login");
  }, [])
  

  return (
    <div className="Home">
      <Sidebar className="sidebar" toggle={toggleSidebar} handleToggle={handleToggleSidebar}/>
      <div id="userView">
        <div id="navbar">
          <HiMenu className="menuIcon" size={30} onClick={handleToggleSidebar}></HiMenu>
          <Searchbar handleSearch={handleSearch}/>
          <img id="userImg" src="https://lh3.googleusercontent.com/a/AGNmyxaZMGx1RzBGuAw188oPsZwHk1KbH5VGeIdJ57_V=s96-c" alt="" width="50x" height="50px" referrerPolicy="no-referrer"/>
          <Link className="addButton" to="create-post">
            <HiPlusSm size={20} className="addImg"></HiPlusSm>
          </Link>
        </div>
        <Routes>
          <Route path="create-post" element={<CreatePost/>} />
          <Route path="user-profile" element={<UserProfile/>} />
          <Route path="search" element={<Search searchKey={searchKey} />} />
          <Route path="/" element={<Feed/>} />
        </Routes>
      </div>
    </div>
  ) 
}

export default Home
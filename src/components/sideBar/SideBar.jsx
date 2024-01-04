import React from "react";
import { FaHome, FaCode, FaDatabase, FaCog, FaFileCode } from "react-icons/fa";
import "./SideBar.css";

const Sidebar = () => {
  // const iconsList = [FaHome, FaCode, FaDatabase, FaCog, FaFileCode];

  function handleClick(){
    alert("Hola")
  }


  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FaHome className="sidebar-icon" onClick={handleClick}/>
      </div>
      <div className="sidebar-item">
        <FaCode className="sidebar-icon" />
      </div>
      <div className="sidebar-item">
        <FaDatabase className="sidebar-icon" />
      </div>
      <div className="sidebar-item">
        <FaCog className="sidebar-icon" />
      </div>
      <div className="sidebar-item">
        <FaFileCode className="sidebar-icon" />
      </div>
    </div>
  ); 
}

export default Sidebar;

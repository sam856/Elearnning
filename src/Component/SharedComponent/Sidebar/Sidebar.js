import React from 'react'
import '../../../Style/Sidebar.css'
import { Link } from "react-router-dom";

import * as SideBarIcons_Ci from "react-icons/ci";
import * as SideBarIcons_io from "react-icons/io";
import * as SideBarIcons_im from "react-icons/im";
import * as SideBarIcon_Md from "react-icons/md";
import * as SideBarIcon_Bi from "react-icons/bi";






const Sidebar = () => {
  return (
    <div className='navbar'>
      
      <ul className='SidebarList'>
          <div className='IconStyle'><SideBarIcons_Ci.CiUser /></div>
          <div className='TextStyle'> <li>  <Link to={"/"}>  All instractor </Link> </li></div>
          <div className='IconStyle'><SideBarIcons_io.IoMdPersonAdd /></div>
          <div className='TextStyle'><li>  <Link to={"/"}>  Add instractor </Link> </li> </div>
          <div className='IconStyle'><SideBarIcons_im.ImBooks /></div>
          <div className='TextStyle'><li>  <Link to={"/AllCourses"}>  All Courses </Link> </li></div>
          <div className='IconStyle'><SideBarIcon_Bi.BiMessageSquareAdd /></div>
          <div className='TextStyle'><li>  <Link to={"/"}>  Add course </Link> </li></div>
          <div className='IconStyle'><SideBarIcon_Md.MdAssignmentAdd /></div>
          <div className='TextStyle'><li>  <Link to={"/AssignCoues"}>  AssignCoues </Link> </li></div>
          <div className='IconStyle'><SideBarIcon_Bi.BiLogIn /></div>
          <div className='TextStyle'><li>  <Link to={"/"}>  Logout </Link> </li></div>


      </ul>


    </div>
  );
}

export default Sidebar
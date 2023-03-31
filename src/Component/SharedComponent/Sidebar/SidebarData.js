import React from "react";
import * as SideBarIcons_Ci from "react-icons/ci";
import * as SideBarIcons_io from "react-icons/io";
import * as SideBarIcons_Gi from "react-icons/gi";
import * as SideBarIcon_Md from "react-icons/md";
import * as SideBarIcon_Bi from "react-icons/bi";





export const SidebarData = [

    {
        title: 'All instractor',
        path: '/',
        icons: <SideBarIcons_Ci.CiUser />,
      



    },

    {
        title: 'Add instractor',
        path: '/',
        icons: <SideBarIcons_io.IoMdPersonAdd />,
      



    },
    {
        title: 'All courses',
        path: '/',
        icons: <SideBarIcons_Gi.GiBookshelf />,

      
    },
    {
        title: 'Add course',
        path: '/',
        icons: <SideBarIcon_Bi.BiMessageSquareAdd />,

      
    },
    {
        title: 'Assign Course',
        path: '/',
        icons: <SideBarIcon_Md.MdAssignmentAdd />,



    },
    {
        title: 'Logout ',
        path: '/',
        icons: <SideBarIcon_Bi.BiLogIn />,
        


    }


]

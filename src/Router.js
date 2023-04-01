import { createBrowserRouter } from "react-router-dom";
import App from './App.js';
import AssignCourse from '../src/Pages/AssignCourse';
import VeiwCourses from "./Pages/VeiwCourses.js";
 

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
           
            
            {
                path: '/AllCourses',
                element: <VeiwCourses />
            },
           
            {
                path: '/AssignCoues',
                element: <AssignCourse />,
            },
           
        ]
    },
   

]);
import { createBrowserRouter } from "react-router-dom";
import App from './App.js';
import AssignCourse from '../src/Pages/AssignCourse';
 

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // Nesting routes => Here the things in app will appear in all pages
        children: [
           
            
            {
                path: '/AllCourses',
                element: <veiwCourses />
            },
           
            {
                path: '/AssignCoues',
                element: <AssignCourse />,
            },
           
        ]
    },
   

]);
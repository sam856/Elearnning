import React from 'react';
import Sidebar from './Component/SharedComponent/Sidebar/Sidebar';
import Navbar from './Component/SharedComponent/TopNav/Navbar';
import './Style/App.css';




import { Outlet } from 'react-router-dom';






function App() {
  return (
    <>

     <Navbar />
     <Outlet />
     <Sidebar />


    </>
  );
}

export default App;

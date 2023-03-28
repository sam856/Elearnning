import React  from 'react'
import '../../../../../Style/Sidebar.css'
import { SidebarData } from './SidebarData';




const Sidebar = () => {
  return (
    <div className='navbar'>
       <ul className='SidebarList'>
      {
      SidebarData.map((val,key)=>{
      return <li key = {key} 
      className="row"
      onClick={()=>
      {
        window.Location.pathname=val.path}
        
      }> 
      <div className='IconStyle'>{val.icons}</div>
      <div  className='TextStyle'>{val.title}</div>

      </li>

      }
      
      
    )}
    </ul>
    
    </div>
  );
}

export default Sidebar
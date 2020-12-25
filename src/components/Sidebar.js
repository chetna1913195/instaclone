import React from 'react'
import '../styles/_sidebar.scss'
import Profile from "./Profile";
import Suggestion from "./Suggestion";
import Footer from "./Footer";
import image from "../images/profile.jpg";

function Sidebar() {
    return (
       
         
      <div className="sidebar">
        <Profile
          username="Chetna_saxena30"
          caption="Chetna Saxena"
          urlText="Switch"
          iconSize="big"
          image={image}
        />
        <Suggestion />
        <Footer />
      </div>
      
        
    )
}

export default Sidebar

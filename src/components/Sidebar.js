import React from 'react'
import '../styles/_sidebar.scss'
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestion from "./Suggestion";
import Footer from "./Footer";
import image from "../images/profile.jpg";

function Sidebar() {
    return (
       
          <Sticky topOffset={-80}>
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
    </Sticky>   
        
    )
}

export default Sidebar

import React from 'react'
import "../styles/_navigation.scss"
import logo from '../images/instagramlogo.png'
import HomeIcon from "@material-ui/icons/Home"
import TelegramIcon from "@material-ui/icons/Telegram"
import ExploreIcon from "@material-ui/icons/Explore"
import FavoriteIcon from "@material-ui/icons/Favorite"
import SearchIcon from "@material-ui/icons/Search"
import {IconButton,Avatar} from "@material-ui/core"
import ProfileIcon from './ProfileIcon'
import  image from '../images/profile.jpg'


function Navigation() {
    return (
        <div className="navigation">
        <div className="container">
          <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="input">
          <SearchIcon className="icon"/>
           <input type="text" placeholder="Search" />
           </div>
           <div className="navigation--logo">
               <IconButton>
                   <HomeIcon></HomeIcon>
               </IconButton>
               <IconButton>
                   <TelegramIcon />
               </IconButton>
               <IconButton>
                   <ExploreIcon />
               </IconButton>
               <IconButton>
                   <FavoriteIcon />
               </IconButton>
              
               
           </div>
           <ProfileIcon iconsize="small" storyborder={true} image={image} />
        </div>
    )
}

export default Navigation

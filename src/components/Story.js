import React from 'react'
import '../styles/_story.scss'
import ProfileIcon from './ProfileIcon'
import User from '../data/User'
function Story() {
    let accountName=User[Math.floor(Math.random()* User.length)].username;
    if(accountName.length > 10){
        accountName=accountName.substring(0,10)+"...";
    }
    return (
        <div className="story">
        <ProfileIcon iconsize="big" storyborder={true}/>
        <span className="accountName">{accountName}</span>
            
        </div>
    )
}

export default Story;

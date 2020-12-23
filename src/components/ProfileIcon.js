import React from 'react'
import '../styles/_profileIcon.scss'
function ProfileIcon(props) {
    const { iconsize, storyborder, image} = props;
function getRandomInt(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random() * (max-min+1))+min;
}
let RandomId=getRandomInt(1,70);
let profileImage=image
          ?image
          :`https://i.pravatar.cc/150?img=${RandomId}`;
    return (
        <div className={storyborder ? "storyborder" : ""}>
        <img className={`profileIcon ${iconsize}`} src={profileImage} alt="profile"/>
             </div>
    )
}

export default ProfileIcon

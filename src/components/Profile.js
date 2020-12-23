import React from 'react'
import '../styles/_profile.scss'
import ProfileIcon from "./ProfileIcon";
import User from "../data/User";

function Profile(props) {
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideAccountName,
    image,
  } = props;

  let accountName = username
    ? username
    : User[Math.floor(Math.random() * User.length)].username;

  return (
    <div className="profile">
      <ProfileIcon
        iconsize={iconSize}
        storyborder={storyBorder}
        image={image}
      />
      {(accountName || caption) && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName">{accountName}</span>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      <a href="/">{urlText}</a>
    </div>
  );
}

    
export default Profile



import React from 'react'
import '../styles/_suggestion.scss'
import Profile from "./Profile";
function Suggestion() {
    return (
        <div className="suggestion">
          <div className="titleContainer">
        <div className="title">Suggestions For You</div>
        <a href="/">See All</a>
      </div>

      <Profile
        caption="Followed by chetna1001 + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by jahan12 + 1 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by akshita12 + 7 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by shreya1001 + 4 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />   
        </div>
    )
}

export default Suggestion

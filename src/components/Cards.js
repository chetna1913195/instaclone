import React from 'react'
import '../styles/_cards.scss'

import Stories from './Stories'
import Card from './Card';
function Cards() {
    const commentsOne = [
        {
          user: "netrika213",
          text: "Woah dude, this is awesome! 🔥",
          id: 1,
        },
        {
          user: "arpit201",
          text: "Like!",
          id: 2,
        },
        {
          user: "ishika027",
          text: "Niceeeee!",
          id: 3,
        },
      ];
    
      const commentsTwo = [
        {
          user: "ananya52",
          text: "Amazing content, keep it up!",
          id: 4,
        },
      ];
    
      const commentsThree = [
        {
          user: "sumit052",
          text: "Love this!",
          id: 5,
        },
      ];
    
      return (
        <div className="cards">
          <Stories />
    
          <Card
            accountName="chetna1001"
            storyBorder={true}
            image="https://picsum.photos/800/900"
            comments={commentsOne}
            likedByText="ankit01"
            likedByNumber={89}
            hours={16}
          />
          <Card
            accountName="garima1001"
            image="https://picsum.photos/800"
            comments={commentsTwo}
            likedByText="aakriti01"
            likedByNumber={47}
            hours={12}
          />
          <Card
            accountName="lakshay1001"
            storyBorder={true}
            image="https://picsum.photos/800/1000"
            comments={commentsThree}
            likedByText="akshita12"
            likedByNumber={90}
            hours={4}
          />
          
        </div>
    )
}

export default Cards

import React from 'react'
import { useEffect, useState } from 'react'

function Stories() {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then(data => data.json())
      .then(data => setStories(data))
      .catch(err => console.log(err))
  }, []);


  return (
    <div className='story d-flex'>
      {stories.length > 0 ? (
        stories.map((story) => (
          <div key={story.id} className='mx-1 story-wrapper'>

            <div className='story-ring'>
              <div className='story-gap'>
                <img src={story.profilePic} alt="profile pic" className="story-dp" />
              </div>
            </div>

            <p className='story-username'>{story.username}</p>
          </div>
        ))
      )
        : "Loading Stories"}
    </div>
  )
}

export default Stories
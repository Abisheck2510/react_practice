import React, { useEffect, useState } from 'react'


function Suggestions() {

  const [profile, setProfile] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {

    fetch("http://localhost:3000/profile")
      .then(data => data.json())
      .then(data => setProfile(data))
      .catch(err => console.log(err))


    fetch("http://localhost:3000/suggestions")
      .then(data => data.json())
      .then(data => setSuggestions(data))
      .catch(err => console.log(err))

  }, []);

  return (
    <div>
      <div className='suggestions w-65 mx-auto my-5' style={{ fontSize: "15px" }}>
        {profile ?
          <div className='d-flex mb-2'>
            <img className='dp rounded-circle' src={profile.profile_pic} alt="profile pic" />
            <h5 className='ms-1 mt-1' style={{ fontFamily: "Roboto, sans-serif" }}>{profile.username}</h5>
            <p className='ms-auto text-primary'>Switch</p>
          </div>
          : <p>Loading Profile</p>
        }

        <div className='d-flex justify-content-between mt-4'>
          <p>Suggested for you</p>
          <b>See All</b>
        </div>

        {suggestions.length > 0 ?
          <div>
            {suggestions.map(suggestion => (
              <div className='my-1' key={suggestion.id}>
                <div className='d-flex mb-2'>
                  <img className='dp rounded-circle' src={suggestion.profile_pic} alt="profile pic" />
                  <h5 className='ms-1 fs-6 mt-1' style={{ fontFamily: "Roboto, sans-serif" }}>{suggestion.username}</h5>
                  <p className='ms-auto text-primary'>Follow</p>
                </div>

              </div>
            ))}
          </div>
          : "Loading Suggestions"}

      </div>
    </div>
  )
}

export default Suggestions
import React from 'react'

function Sidebar() {
    return (
        <div className='m-4 position-fixed'>
            <div className='d-flex flex-column gap-4'>
                <img className="logo-text" src="src/assets/instagram_text1.png" alt="" />
                <div><i className="bi bi-house-door"></i>Home</div>
                <div><i className="bi bi-search"></i>Search</div>
                <div><i className="bi bi-compass"></i>Explore</div>
                <div><i className="bi bi-collection-play"></i>Reels</div>
                <div><i className="bi bi-chat-dots"></i>Messages</div>
                <div><i className="bi bi-bell"></i>Notifications</div>
                <div><i className="bi bi-plus-square"></i>Create</div>
                <div><i className="bi bi-person-circle"></i>Profile</div>
            </div>
            <div className='position-fixed bottom-0 d-flex flex-column gap-4 mb-3'>
                <div><i className="bi bi-threads"></i>Threads</div>
                <div><i className="bi bi-list"></i>More</div>
            </div>
        </div>
    )
}

export default Sidebar
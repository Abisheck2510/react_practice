import React from 'react'

function Sidebar() {
    return (
        <div className='m-4'>
            <div className='d-flex flex-column gap-4'>
                <img className="logo-text" src="src/assets/instagram_text1.png" alt="" />
                <div><i class="bi bi-house-door"></i>Home</div>
                <div><i class="bi bi-search"></i>Search</div>
                <div><i class="bi bi-compass"></i>Explore</div>
                <div><i class="bi bi-collection-play"></i>Reels</div>
                <div><i class="bi bi-chat-dots"></i>Messages</div>
                <div><i class="bi bi-bell"></i>Notifications</div>
                <div><i class="bi bi-plus-square"></i>Create</div>
                <div><i class="bi bi-person-circle"></i>Profile</div>
            </div>
            <div className='position-absolute bottom-0 d-flex flex-column gap-4'>
                <div><i class="bi bi-threads"></i>Threads</div>
                <div><i class="bi bi-list"></i>More</div>
            </div>
        </div>
    )
}

export default Sidebar
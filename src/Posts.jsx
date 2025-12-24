import React from 'react'
import { useEffect, useState } from 'react';

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/posts")
            .then(data => data.json())
            .then(json => setPosts(json))
            .catch(err => console.log(err))

    }, []);

    return (
        <div className='d-flex justify-content-center'>
            {posts.length > 0 ?
                <div>
                    {posts.map(post => (
                        <div className='my-4' key={post.id}>
                            <div className='d-flex mb-2'>
                                <img className='dp rounded-circle' src={post.user.profile_pic} alt="profile pic" />
                                <h5 className='ms-1 fs-6 mt-1' style={{ fontFamily: "Roboto, sans-serif" }}><b>{post.user.username}</b></h5>
                                <p className='ms-auto my-auto'><i class="bi bi-three-dots"></i></p>
                            </div>
                            <img className='post-image rounded-2' src={post.image} alt="post" />
                            <div className='my-2 mx-2 icon-bold'>
                                <i className="bi bi-heart fs-5"></i>
                                <i className="bi bi-chat fs-5"></i>
                                <i className="bi bi-repeat fs-5"></i>
                                <i className="bi bi-send fs-5"></i>
                            </div>
                            <div>
                                <b>{post.likes} likes</b>
                            </div>
                            <p>{post.caption}</p>
                        </div>
                    ))}
                </div>
                : "Loading Posts"}
        </div>
    )
}

export default Posts;
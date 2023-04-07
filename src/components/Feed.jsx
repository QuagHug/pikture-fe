import React, { useState, useEffect } from 'react'
import MasonryLayout from './MasonryLayout'
import axios from 'axios'
import "./Feed.css"

const Feed = () => {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("https://localhost:7280/api/Post");
      setPosts(response.data);
    }
    fetchPosts();
  }, [])
  
  return (
    <div class="Feed">
        <MasonryLayout posts={posts} />
    </div>
  )
}

export default Feed
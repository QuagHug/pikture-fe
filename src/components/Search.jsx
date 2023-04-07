import React, { useState, useEffect } from 'react'
import MasonryLayout from './MasonryLayout'
import axios from 'axios'
import "./Feed.css"

const Search = (props) => {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("https://localhost:7280/api/Post/search", {
        params: {
            key: props.searchKey
        }
      });
      setPosts(response.data);
    }
    fetchPosts();
  }, [props.searchKey])
  
  return (
    <div class="Feed">
        <MasonryLayout posts={posts} />
    </div>
  )
}

export default Search
import React, { useState, useEffect } from 'react'
import MasonryLayout from './MasonryLayout'
import axios from 'axios'
import "./Feed.css"

const Search = (props) => {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(process.env.REACT_APP_PIKTURE_API_URL + "api/Post/search", {
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
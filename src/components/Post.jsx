import React, { useState, useEffect  } from 'react'
import "./Post.css"
import axios from 'axios';

const Post = (props) => {

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get(process.env.REACT_APP_PIKTURE_API_URL + `api/Post/${props.post.id}`, { responseType: 'blob' });
      setImageUrl(URL.createObjectURL(response.data));
    }
    fetchImage();
  }, [])
  
  return (
    <div id="Post">
      <img className="postImg" src={imageUrl} alt="" />
      <img className="postAvatarImg" src={props.post.userAvatarUrl} alt="" width="30px" height="30px"/>
      <div className="postUserName">{props.post.userName}</div>
    </div>
  )
}

export default Post
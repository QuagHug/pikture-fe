import React, { useState, useEffect  } from 'react'
import "./Post.css"
import axios from 'axios';

const Post = (props) => {

  return (
    <div id="Post">
      <img className="postImg" src={props.post.imageUrl} alt="" />
      <img className="postAvatarImg" src={props.post.userAvatarUrl} alt="" width="30px" height="30px"/>
      <div className="postUserName">{props.post.userName}</div>
    </div>
  )
}

export default Post
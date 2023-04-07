import React, { useState } from 'react'
import axios from 'axios';
import "./CreatePost.css"
import { HiCloudUpload } from "react-icons/hi";

const CreatePost = () => {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const [uploadResult, setUploadResult] = useState(null);

  function handleImageUpload(event) {
    const file = event.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImageURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setUploadResult(null);
    const user = JSON.parse(sessionStorage.getItem("userObject"));
    const formData = new FormData();

    formData.append("image", image);
    formData.append("userEmail", user.email);
    formData.append("userName", user.given_name + ' ' + user.family_name);
    formData.append("userAvatarUrl", user.picture);
    formData.append("title", document.querySelector('input[name="title"]').value);
    formData.append("category", document.querySelector('select[name="category"]').value);
    
    axios.post("https://localhost:7280/api/Post", formData)
      .then(response => {
        setUploadResult(response.data);
      })
      .catch(error => {
        setUploadResult(error.response.data);
      });
  }

  return (
    <div id="CreatePost" >
      <div className="imageUploadContainer" style={{ 
        backgroundImage: `url(${imageURL})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "380px 200px"
      }}>
        <input type="file" onChange={handleImageUpload} className="imageUpload"/>
      </div>

      <div className="createPostInfo">
        <input type="text" placeholder="Add your title" name="title"/>
        {/* <input type="text" placeholder="Description"/> */}
        <select name="category">
          <option value="pet">Pet</option>
          <option value="gaming">Gaming</option>
          <option value="coding">Coding</option>
        </select>
        <HiCloudUpload className="uploadButton" size={50} onClick={handleSubmit}/>
      </div>
      <div className="uploadResultContainer">
      { uploadResult && uploadResult }
      </div>
    </div>
  )
}

export default CreatePost
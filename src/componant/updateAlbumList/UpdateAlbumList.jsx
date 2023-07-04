import React, { useState } from 'react'
import './updateAlbumList.css'; //css file

export default function UpdateAlbumList({ update, updateTheAlbum, albumCard }) {


  const [updateModal, setUpdateModal] = useState(true); //this state is handle the update modal
  const [updatedUserId, setUpdatedUserId] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");


  // this function is executes when the add buuton got clicked
  const handleAddUpdate = () => {
    if (updatedTitle.length >= 1) {
      updateTheAlbum(albumCard.id, updatedUserId, updatedTitle, albumCard);
      handleRemoveUpdate();
    } else {
      return;
    }
  }

  // this function executes when the above cross button got clicked
  const handleRemoveUpdate = () => {
    update(updateModal);
    setUpdateModal(updateModal);
  }
  return (
    <>
      <div className="update-album-container">

        <h1>Update your Album</h1>
        <div className="updateInput">
          <label>Enter your Id</label>
          <input type="number" className='updateNumber'

          // onchange event handler for id
            onChange={(e) => {
              setUpdatedUserId(e.target.value);
            }} />
          <label>Enter your Title</label>
          <input type="text" className='updateText'

             // onchange event handler for title
            onChange={(e) => {
              setUpdatedTitle(e.target.value);
            }}
          />
        </div>
        {/* update button */}
        <button onClick={handleAddUpdate} className='updateBtn'>Update</button>
        {/* cross button */}
        <button onClick={handleRemoveUpdate} title='remove popup' className="removeupdate">+</button>
      </div>

    </>
  )
}

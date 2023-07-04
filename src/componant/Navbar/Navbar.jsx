
import { useState } from 'react'
import AddAlbumList from '../addAlbumList/AddAlbumList';
import './navbar.css'; //css file

export default function Navbar({addAlbumToList}) {

  const [modal , setModal] =useState(false);//this modal is handling the update modal

  //this function toggle the modal
  const handleModal = () =>{
    setModal(!modal)
  }

  //this function remove the modal
  const removeModal = () =>{
    setModal(false)
  }
  return (
    <>
    <div className='navbar'>
        <nav>
            <h2>AlbumListApp</h2>
            <button onClick={handleModal}>Add Album</button>
        </nav>
    </div>


{/* add albumlist  modal */}
    { modal && 
        <AddAlbumList addAlbumToList={addAlbumToList} removeModal={removeModal} />
     }
</>
  )
}

import './albumlist.css';
import UpdateAlbumList from '../updateAlbumList/UpdateAlbumList'; //update the album componant imported here
import { useState } from 'react';


export default function Albumlist({ albums, deleteTheAlbumList, updateTheAlbum, handleAlbumCard, albumCard }) {

  //this state and below this state  handling the update modal
  const [updateModal, setUpdateModal] = useState(false);
  const handleUpdateModal = (value) => {
    setUpdateModal(!value);
  }

  return (
    <>

      <div className='albumcontainer'>
        <div className="boxs">

          {/* here i have maped the albums collection */}
          {albums.map((ele, key) => {
            return (
              <div className="box" data-id={ele.id} key={key}>
                <div className="textContent">
                  <span className='title'>{ele.title}</span>
                </div>

                {/* update button */}
                <div className="buttons">
                  <button
                    onClick={() => {
                      handleAlbumCard(ele)
                      handleUpdateModal(updateModal)
                    }
                    }
                  >update</button>

                  {/* delete button */}
                  <button className='deleteBtn' onClick={() => {
                    deleteTheAlbumList(ele.id)
                    alert("deleted")
                  }}>delete</button>
                </div>
              </div>
            )
          })}

        </div>
      </div>

      {/* this modal is updateAlbum list modal */}
      {updateModal && (<div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
          <UpdateAlbumList
            update={handleUpdateModal}
            updateTheAlbum={updateTheAlbum}
            albumCard={albumCard} />
        </div>
      </div>)}

    </>
  )
}

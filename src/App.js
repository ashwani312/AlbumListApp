import React, { useEffect, useState } from 'react'
import './app.css'
import Albumlist from './componant/albumlist/Albumlist'; //AlbumList componant
import Navbar from './componant/Navbar/Navbar'; //Navbar componant
 


export default function App() {

  const [albums, setAlbums] = useState([]);  //albums to store all the fetched album
  const [albumCard, setAlbumCard] = useState({}); //albumcard is particular card of the albums


  //use EffectHook
  useEffect(() => {
    const fetchURL = async () => {
      const url = "https://jsonplaceholder.typicode.com/albums"; // this is a jsonplaceholder api
      const response = await fetch(url);
      const data = await response.json()
      setAlbums(data)
    }
    fetchURL()
  }, []);

  //------------------addAlbumList function to add  albums----------------
  const addAlbumToList = (userId, title) => {
    console.log("added")
    const length = albums.length;
    const lastId = albums[length - 1].id;
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        id: lastId + 1,
        title: title,
      }),

    }).then((response) => response.json()).then((json) => json);
    const newAlbumList = {
      userId: userId,
      id: lastId + 1,
      title: title,
    }
    const allAlbumlist = [newAlbumList, ...albums]
    setAlbums(allAlbumlist)
  };



  //-----------------------delete the album function to delete an album---------------
  const deleteAlbumFromList = (id) => {
    console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, { method: 'DELETE' })
    const newAlbum = albums.filter((album) => album.id !== id);
    setAlbums(newAlbum);
  }


  //update the album function to update the album
  const updateTheAlbum = (id, userId, title, albumItem) => {
    const index = albums.indexOf(albumCard);
    console.log(index);
    let updatedAlbumList = fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: title,
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => json);
    updatedAlbumList = {
      id,
      userId,
      title
    }
    albums[index] = updatedAlbumList;
    setAlbums(albums);
  }

  //-------------handleAlbumCardFunction to handle only one album------
  const handleAlbumCard = (ele) => {
    setAlbumCard(ele);
  }



  return (
    <div className="appContainer">
      <div className='app'>
          <div className="navbarComponant">

            {/* Navbar componant */}
            <Navbar addAlbumToList={addAlbumToList} />
          </div>
            {/* update the album componant */}
            <Albumlist
              albums={albums}
              deleteTheAlbumList={deleteAlbumFromList}
              updateTheAlbum={updateTheAlbum}
              handleAlbumCard={handleAlbumCard}
              albumCard={albumCard} />
      </div>
    </div>

  )
}

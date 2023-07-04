import React, { useState } from 'react';
import './addAlbumList.css'; //album list css file

export default function AddAlbumList({addAlbumToList, removeModal}) {
    const [userId, setUserId] = useState("");   //new userId
    const [title, setTitle] =useState("");   // new title

    return (
        //addAlbum jsx code
        <div className='addAlbumList'>
            <div className="addAlbumListBox">
                <div className="addAlbumListElement">

                    {/* main Heading of add album */}
                    <h1>Add your Album</h1>

                    {/* userId input tag */}
                    <input type="number" className='numberInput' placeholder='Enter Id here' required
                    // onchange event handler for userId
                    onChange={(e)=>{
                        setUserId(e.target.value);
                    }}
                    />
                    <input type="text" className='textInput' placeholder='Enter Your Title here' required
                    // onchange event handler for Title
                    onChange={(e)=>{
                       setTitle(e.target.value)
                    }}
                    />

                    {/* add buutton */}
                    <button className='addButton'
                    onClick={()=>{
                        if(title.length >= 1 && userId.length >= 1){
                            removeModal()
                            addAlbumToList(userId, title)                  
                        }else{
                            return
                        }
                    }}
                    >Add</button>
                    <button className='removeaddalbum' onClick={()=>{
                        removeModal()
                    }}>+</button>                       
                </div>
          
            </div>

        </div>
    )
}

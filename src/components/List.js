import React, { useEffect, useState } from 'react'
import {Context} from '../Context/Context.js'
import { useContext } from 'react'
import jp from '../1.jpg.jpg'


function List() {
  const [alert,setAlert]=useState(false)
  const data = useContext(Context)
  console.log(data.list)

  const addWatched = (e)=>{
    let a = data.watched.find(m=>m.name === e.target.title)
    if(a === undefined){
      data.setWatched([...data.watched,{name:e.target.title,img:e.target.id}])
      setAlert(true)
    setTimeout(()=>{
        setAlert(false)
    },1000)
   
    }
    e.target.className = "fa-solid fa-eye-slash"
    
  }
 
  return (
    <div className='container'>
      {alert && <div class="alert alert-success alert-dismissible fade show" role="alert">İzlenenlere eklendi...</div>}
      <div className='row'>
        
          {data.list.map((m)=>(
            <div className='col-lg-3'>
              <div className='cards'>
                   <img src={`https://image.tmdb.org/t/p/w200${m.img}`}></img>
                   <i onClick={addWatched} title={m.name}  id={m.img} className="fa-solid fa-eye"></i>
              </div>
              </div>
          ))}
        
      </div>
   </div>
  )
}

export default List
//watched
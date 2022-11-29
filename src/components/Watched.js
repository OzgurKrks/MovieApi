import React from 'react'
import { useContext } from 'react'
import {Context} from '../Context/Context'
function Watched() {
  const data = useContext(Context)
  console.log(data.watched)

  const deleteMovie =(e)=>{
    data.setWatched(data.watched.filter(m=>m.name !==e.target.name))
  }
  
  return (
   <div className='container'>
    <div className='row'>
      {data.watched.map((m)=>(
        <div className='col-lg-3 p-5'>
         <div className='cardss'>
          <img id='image' src={`https://image.tmdb.org/t/p/w200${m.img}`}></img>
          <button onClick={deleteMovie} name={m.name} style={{"width":"200px"}} className='btn btn-danger'>sil</button>
       </div>
        </div>
      ))}
    </div>
   </div>
  )
}

export default Watched

//
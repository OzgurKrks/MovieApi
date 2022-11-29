import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import {Context} from '../Context/Context.js'

function Search() {
  const [alert,setAlert]=useState(false)
  const [results,setResults] = useState()
  

  const data = useContext(Context)
  

 const onChange = (e)=>{
  e.preventDefault()
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=c65ec8ffaebe1ee7034995facb92c678&language=en-US&page=1&include_adult=false&query=${e.target.value}`).
  then((res)=>res.json()).then((data)=>{
  setResults(data.results)})
  

 }

 const addList = (i)=>{
 
 
 let a = data.list.find(m=>m.name === i.target.name)
 if(a === undefined){
  data.setList([...data.list,{name:i.target.name,img:i.target.value}])
  setAlert(true)
  setTimeout(()=>{
      setAlert(false)
  },1000)
 }

}

 

  return (
    <div  className='container'>
      {alert && <div class="alert alert-success alert-dismissible fade show" role="alert">Listeye eklendi...</div>}
      <div className='input'>
      <input onChange={onChange} placeholder='search movie' id="inp"/>
      </div>
      <div id='card-wrap'>
      <div id='cards'>
      {results ? results.map((m,i)=>(
        <div className='row' key={i}>
        <div className='col-3'>
          <img src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}></img>
        </div>
        <div id='title' className='col-6'>
          
          <h3>{m.title}</h3>
          <h4>{m.release_date}</h4>
      
          <button   name={m.title} value={m.poster_path} onClick={addList} className='btn btn-success'>Listeye ekle</button>
        </div>
      </div>
      )):<h1></h1>}
      </div>
      </div>
    </div>
  )
}

export default Search
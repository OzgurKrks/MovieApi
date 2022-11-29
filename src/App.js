import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import List from './components/List'
import Watched from './components/Watched'
import {Routes,Route} from 'react-router-dom'
import {Context} from './Context/Context.js'

function App() {
  const [list,setList] = useState([])
  const [watched,setWatched] = useState([])

  const value = {
    list,setList,watched,setWatched
  }
  return (
    <div >
    <Navbar/>
    <Context.Provider value={value}>
    <Routes>
      <Route path='/' element={<Search/>}/>
      <Route path='/list' element={<List/>}/>
      <Route path='/watched' element={<Watched/>}/>
    </Routes>
    </Context.Provider>

    </div>
  )
}

export default App
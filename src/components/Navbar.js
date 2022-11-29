import React from 'react'
import {Link} from 'react-router-dom'
import '../components/Navbar.css'

function Navbar() {
  return (
    <div id='navbar'>
        <div id='container' className='container'>
            <div>
               <Link to="/"> <h2>MOVIES</h2></Link>
            </div>
            <div id='buttons'>
            <Link to="/list"> <button className='btn btn-success'>Liste</button></Link>
            <Link to="/watched"> <button className='btn btn-success'>İzlenenler</button></Link> 
            </div>
        </div>
    </div>
  )
}

export default Navbar
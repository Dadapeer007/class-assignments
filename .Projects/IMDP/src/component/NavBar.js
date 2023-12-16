import React from 'react'
import Logo from "../filmlogo.png"
import {Link} from "react-router-dom"
function NavBar() {
  return (
<div className="flex border place-items-center space-x-8 pl-3 py-4" style={{ background: '#2c3e50', color: 'white' }}>
  <img src={Logo} className='w-14'/> 
  <Link to="/" className='text-white-400'>🎬 Movies</Link>
  <Link to="/watchlist" className='text-white-400'>⏯ WatchList</Link>
  <Link to="/About" className='text-white-400'>📜 About</Link>
  <Link to="/" className='text-white-400'>📞 contact</Link>
</div>


  )
}

export default NavBar

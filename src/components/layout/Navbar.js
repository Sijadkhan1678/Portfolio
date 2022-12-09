import React from 'react'

 const Navbar = () => {
  return (
    <div //style={{backgroundColor:"green"}}
    >
          <header className='nav-container'>
      <div className='logo-container'>logo</div>
      
       <ul className='nav-items'>
           <li><a href="#">Home</a></li>
           <li><a href="#">Projects</a></li>
           <li><a href="#">About</a></li>
           
       </ul>
     
    </header>
    </div>

  )
}

export default Navbar

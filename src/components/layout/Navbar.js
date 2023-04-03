import React from 'react'

 const Navbar = () => {
  return (
    <div
    style={{boxShadow:"0px 5px 5px red"}}  
    >
          <header className='nav-container' color='white' >
      <div className='logo-container'><h2>Sijad <span style={{color: "red"}}>Khan</span></h2></div>
      
       <ul className='nav-items'>
           <li><a href="#">Home</a></li>
           <li><a href="#skills">Skills</a></li>
           <li><a href="#project">Portfolio</a></li>
           <li><a href="#about">About</a></li>
           
       </ul>
     
    </header>
    </div>

  )
}

export default Navbar

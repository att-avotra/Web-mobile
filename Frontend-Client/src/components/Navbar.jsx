import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [Clicked, setclicked] = useState("")
  return (
    <nav className={`w-screen h-14  flex  items-center fixed top-0 z-10 bg-body ${Clicked != "product" ? 'justify-center' :'border-b-2 border-gray-300'}`}>
      <div className={`w-full  ${Clicked != "product" ? "max-w-7xl" : ""}  flex flex-row justify-between items-center px-6 py-4`}>
        <div>
          <p className='text-xl text-bold-blue'>LOGO</p>
        </div>
        <div className='flex flex-row gap-4 items-center text-sm'>
          <Link to="/home">  <p className={Clicked == "home" ? `text-bleu` : `cursor-pointer`} onClick={() => setclicked("home")}>Home</p></Link>
          <Link to="/product">
            <p className={Clicked == "product" ? `text-bleu` : `cursor-pointer`} onClick={() => setclicked("product")}>Product</p>
          </Link>
          <Link to="/home/#about-us">
            <p className={Clicked == "about" ? `text-bleu` : `cursor-pointer`} onClick={() => setclicked("about")}>About</p>
          </Link>
          <Link to="/home/#contact-us">
            <p className={Clicked == "contact" ? `text-bleu` : `cursor-pointer`} onClick={() => setclicked("contact")}>Contact</p>
          </Link>
          <Link to="/login"><button className="bouton-bleu" onClick={() => setclicked("")}>Login</button></Link>
          <Link to="/sign-up"><button className="bouton-white font-bold" onClick={() => setclicked("")}>Sign Up</button></Link>
        </div>
      </div>
    </nav >
  )
}
export default Navbar
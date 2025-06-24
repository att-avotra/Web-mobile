import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
function Navbar({ cartIds }) {
  const [Clicked, setclicked] = useState("")
  const nbShoppingCart = cartIds.length || 0;
  return (
    <nav className={`w-screen h-14  flex  items-center fixed top-0 z-10 bg-body ${Clicked != "product" ? 'justify-center' : 'border-b-2 border-gray-300'}`}>
      <div className={`w-full  ${Clicked != "product" ? "max-w-7xl" : "mx-10 py-2"}  flex flex-row justify-between items-center px-6 py-4`}>
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
          <Link to="/product/cart">
            <div className="relative" onClick={() => setclicked("")}>
              <i className='text-3xl text-blue-600'><FaShoppingCart></FaShoppingCart></i>
              {nbShoppingCart > 0 && <span className="p-2 top-[-8px] left-5 w-6 h-6 bg-red-600 text-white font-bold absolute rounded-full flex items-center justify-center">{nbShoppingCart}</span>}
            </div>
          </Link>
          <Link to="/login"><button className="bouton-bleu" onClick={() => setclicked("")}>Login</button></Link>
          <Link to="/sign-up"><button className="bouton-white font-bold" onClick={() => setclicked("")}>Sign Up</button></Link>

        </div>
      </div>
    </nav >
  )
}
export default Navbar
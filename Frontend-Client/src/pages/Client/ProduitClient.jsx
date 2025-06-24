import React, { useState } from 'react'
import { FaHeart, FaChevronCircleLeft, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaChevronCircleRight, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useOutletContext } from 'react-router-dom'
import { FaTshirt, FaPlus, FaBook, FaGamepad } from 'react-icons/fa';
import { FaChair } from "react-icons/fa6";
import { FaStar, FaStore, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { GiCarrot, GiToyMallet, GiCakeSlice, GiLipstick } from 'react-icons/gi';
import { MdPhoneIphone, MdFastfood } from 'react-icons/md';
import data from '/src/data/ListProduct'
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
function ProduitClient({ className, rating = 4.5 }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const { cartIds = [], toggleCart = () => { } } = useOutletContext();
  const stars = [];
  const filteredData = data.filter(item => item.status === "most-sold");
  const newProduct = data.filter(item => item.status === "new-product")
  const simpleProduct = data.filter(item => item.status === "simple-product")
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-400" />);
    }
  }
  return (
    <>
      <div className="w-full flex flex-row gap-2">
        <nav className="fixed w-64 p-2 top-14 h-screen left-0 flex flex-col gap-2">
          <p className="">CATEGORY</p>
          <div className="p-2 w-full flex justify-between items-center hover:bg-gray-200 cursor-pointer rounded">
            <div className="flex gap-2 items-center">
              <i className='text-blue-400'> <FaStore></FaStore> </i>
              <p>Tous les produits</p>
            </div>
            <div className='cursor-pointer'>
              <i className='font-medium'> <FaPlus></FaPlus> </i>
            </div>
          </div>
          <div className="p-2 w-full flex justify-between items-center hover:bg-gray-200 cursor-pointer rounded">
            <div className="flex gap-2 items-center">
              <i className='text-orange-400'> <GiCarrot></GiCarrot> </i>
              <p>Legumes</p>
            </div>
            <div className='cursor-pointer'>
              <i className='font-medium'> <FaPlus></FaPlus> </i>
            </div>
          </div>

          <div className="p-2 w-full flex justify-between items-center hover:bg-gray-200 cursor-pointer rounded">
            <div className="flex gap-2 items-center">
              <i className='text-orange-400'> <GiCakeSlice></GiCakeSlice> </i>
              <p>Patisserie</p>
            </div>
            <div className='cursor-pointer'>
              <i className='font-medium'> <FaPlus></FaPlus> </i>
            </div>
          </div>
          <div className="p-2 w-full flex justify-between items-center hover:bg-gray-200 cursor-pointer rounded">
            <div className="flex gap-2 items-center">
              <i className='text-orange-400'> <FaTshirt /> </i>
              <p>Vetements</p>
            </div>
            <div className='cursor-pointer'>
              <i className='font-medium'> <FaPlus></FaPlus> </i>
            </div>
          </div>
          <div className="p-2 w-full flex justify-between items-center hover:bg-gray-200 cursor-pointer rounded">
            <div className="flex gap-2 items-center">
              <i className=''> <	MdPhoneIphone /></i>
              <p>Électronique</p>
            </div>
            <div className='cursor-pointer'>
              <i className='font-medium'> <FaPlus></FaPlus> </i>
            </div>
          </div>
          <div className="p-2 w-full flex justify-between items-center hover:bg-gray-200 cursor-pointer rounded">
            <div className="flex gap-2 items-center">
              <i className='text-orange-400'> <GiToyMallet /> </i>
              <p>Jouets</p>
            </div>
            <div className='cursor-pointer'>
              <i className='font-medium'> <FaPlus></FaPlus> </i>
            </div>
          </div>
          <p className="">PRODUIT PLUS VENDUS</p>
          <div className="p-2 flex  flex-row gap-3 hover:bg-gray-200 cursor-pointer rounded ">
            <div className="overflow-hidden w-1/3  rounded">
              <img src="/src/assets/Interface/1.png" alt="" className='h-full object-cover rounded' />
            </div>
            <div className="flex flex-col gap-2">
              <p className='text-sm'>Anamamy</p>
              <div className={`flex gap-1 ${className}`}>{stars}</div>
              <p className='text-sm'>1000 Ar</p>
            </div>
          </div>
          <div className="p-2 flex flex-row gap-3 hover:bg-gray-200 cursor-pointer rounded">
            <div className="overflow-hidden w-1/3 rounded">
              <img src="/src/assets/Interface/06.png" alt="" className='h-full object-cover rounded' />
            </div>
            <div className="flex w-[75% ] flex-col gap-2">
              <p className='text-sm'>Cake Au Fromage</p>
              <div className={`flex gap-1 ${className}`}>{stars}</div>
              <p className='text-sm'>2300Ar</p>
            </div>
          </div>
        </nav>
        <div className="ml-64 mt-12 w-full h-screen flex flex-col items-center gap-2 p-4">
          <div className="flex flex-col gap-2">
            <p className='font-bold text-xl'>Les produits le plus achété(e)</p>
            <div className='grid grid-cols-4 gap-4 '>
              {filteredData.map((item, index) => (
                <div key={index} className="flex flex-col  p-3 mx-3 max-w-56 bg-white shadow-lg rounded-2xl overflow-hidden w-fit h-fit">
                  <img src={item.images} alt={item.nom_produit} className="w-full object-cover rounded h-48 " />
                  <p className="text-orange-600">{item.nom_produit}</p>
                  <p className="text-gray-400">{item.description}</p>
                  {/* <p>{item.nom_produit}</p> */}
                  <p className="font-bold text-lg">{item.prix} {item.unite}</p>
                  <div className="flex items-center w-full justify-between text-2xl">
                    <button onClick={() => setLiked(!liked)} className="cursor-pointer text-gray-500 hover:scale-110 transition">
                      {liked ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <button onClick={() => setSaved(!saved)} className="text-gray-500 hover:scale-110 transition cursor-pointer">
                      {saved ? <BsBookmarkFill /> : <BsBookmark />}
                    </button>
                    <button
                      className={`text-gray-600 hover:scale-110 transition cursor-pointer ${cartIds.includes(item.id) ? "text-orange-600" : ""}`}
                      onClick={() => {
                        toggleCart(item.id)
                      }}
                    >
                      <FaShoppingCart />
                    </button>
                    <button className='bouton-bleu text-sm'>Savoir plus</button>
                  </div>
                </div>
              ))}
            </div>
            <p className='font-bold text-xl'>Nouveau produits</p>
            <div className='grid grid-cols-4 gap-4 '>
              {newProduct.map((item, index) => (
                <div key={index} className="flex flex-col  p-3 mx-3 max-w-56 bg-white shadow-lg rounded-2xl overflow-hidden w-fit h-fit">
                  <img src={item.images} alt={item.nom_produit} className="w-full object-cover rounded h-48 " />
                  <p className="text-orange-600">{item.nom_produit}</p>
                  <p className="text-gray-400">{item.description}</p>
                  {/* <p>{item.nom_produit}</p> */}
                  <p className="font-bold text-lg">{item.prix} {item.unite}</p>
                  <div className="flex items-center w-full justify-between text-2xl">
                    <button onClick={() => setLiked(!liked)} className="cursor-pointer text-gray-500 hover:scale-110 transition">
                      {liked ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <button onClick={() => setSaved(!saved)} className="text-gray-500 hover:scale-110 transition cursor-pointer">
                      {saved ? <BsBookmarkFill /> : <BsBookmark />}
                    </button>
                    <button
                      className={`text-gray-600 hover:scale-110 transition cursor-pointer ${cartIds.includes(item.id) ? "text-orange-600" : ""}`}
                      onClick={() => {
                        toggleCart(item.id)
                      }}
                    >
                      <FaShoppingCart />
                    </button>
                    <button className='bouton-bleu text-sm'>Savoir plus</button>
                  </div>
                </div>
              ))}
            </div>
            <p className='font-bold text-xl'>Autres...</p>
            <div className='grid grid-cols-4 gap-4 '>
              {simpleProduct.map((item, index) => (
                <div key={index} className="flex flex-col  p-3 mx-3 max-w-56 bg-white shadow-lg rounded-2xl overflow-hidden w-fit h-fit">
                  <img src={item.images} alt={item.nom_produit} className="w-full object-cover rounded h-48 " />
                  <p className="text-orange-600">{item.nom_produit}</p>
                  <p className="text-gray-400">{item.description}</p>
                  {/* <p>{item.nom_produit}</p> */}
                  <p className="font-bold text-lg">{item.prix} {item.unite}</p>
                  <div className="flex items-center w-full justify-between text-2xl">
                    <button onClick={() => setLiked(!liked)} className="cursor-pointer text-gray-500 hover:scale-110 transition">
                      {liked ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <button onClick={() => setSaved(!saved)} className="text-gray-500 hover:scale-110 transition cursor-pointer">
                      {saved ? <BsBookmarkFill /> : <BsBookmark />}
                    </button>
                    <button
                      className={`text-gray-600 hover:scale-110 transition cursor-pointer ${cartIds.includes(item.id) ? "text-orange-600" : ""}`}
                      onClick={() => {
                        toggleCart(item.id)
                      }}
                    >
                      <FaShoppingCart />
                    </button>
                    <button className='bouton-bleu text-sm'>Savoir plus</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProduitClient
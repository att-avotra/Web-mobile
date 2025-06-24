import React, { useState } from 'react'
import { useRef } from "react";
import data from '/src/data/ListProduct'
import CountUp from 'react-countup';
import { FaHeart, FaChevronCircleLeft, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaChevronCircleRight, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useOutletContext } from 'react-router-dom'
import "slick-carousel/slick/slick-theme.css";
function HomeClient() {
  const [liked, setLiked] = useState(false);
  const { cartIds = [], toggleCart = () => { } } = useOutletContext();
  const [saved, setSaved] = useState(false);
  const filteredData = data.filter(item => item.status === "most-sold");
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,         // Un seul produit visible
    slidesToScroll: 1,
    arrows: false,            // Boutons next/prev visibles
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className='w-full mt-14  flex justify-center items-center z-8'>
      <div className='w-full max-w-7xl flex flex-col items-center px-6 py-4'>
        <section id='introduction' className='w-full h-full grid grid-cols-2 gap-1 max-h-[100vh]'>
          <div className="py-8 flex flex-col h-full gap-10">
            <h1 className="text-3xl text-bleu w-30">Achats en ligne</h1>
            <p className='text-xl'>
              Achetez vos produits preferez chez nous!

            </p>
            <p className='text-xl'>
              Nous vous offrons une large gamme de produits frais et de qualité, livrés directement chez vous. Profitez de la commodité des achats en ligne tout en soutenant les producteurs locaux.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col w-auto p-2  bg-white shadow rounded">
                <span className="text-orange-400 font-bold">Produit disponible</span>
                <span className='text-gray-600 text-center text-2xl'><CountUp end={2000} prefix="+" duration={2}></CountUp></span>
              </div>
              <div className="flex flex-col w-auto p-2  bg-white shadow rounded">
                <span className="text-blue-600 font-bold">
                  Clients Satisfaits
                </span>
                <span className='text-gray-600 text-center text-2xl'><CountUp end={400} prefix="+" duration={2}></CountUp></span>
              </div>
              <div className="flex flex-col w-auto p-2  bg-white shadow rounded">
                <span className="text-orange-400 font-bold">
                  Commande Traitées
                </span>
                <span className='text-gray-600 text-center text-2xl'><CountUp end={67800} prefix="+" duration={2}></CountUp></span>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <button className="bouton-bleu py-3">Savoir Plus...</button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/src/assets/Interface/online-shop.png" alt="" className='h-[75%] object-contain' />
          </div>
        </section>

        <section id="produit-populaire" className='flex w-full  flex-col'>
          <p className="text-xl text-orange-600 font-bold">
            Produits plus achetée en 2025
          </p>
          <div className='flex items-center justify-between w-full mt-4'>
            <button className="text-blue-600 cursor-pointer me-5 text-3xl hover:text-blue-800 transition" onClick={() => sliderRef.current.slickPrev()}>
              <FaChevronCircleLeft />
            </button>
            <div className="pt-10 max-w-[95%] flex justify-center items-center">
              <Slider {...settings} ref={sliderRef} className="w-full">
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
              </Slider>

            </div>
            <button className="text-blue-600 cursor-pointer text-3xl hover:text-blue-800 transition" onClick={() => sliderRef.current.slickNext()}>
              <FaChevronCircleRight />
            </button>
          </div>
        </section>
        <section id="about-us" className='w-full flex flex-col mt-10'>
          <h2 className="text-3xl text-orange-600 font-bold">A propos de nous</h2>
          <div className="flex flex-row items-center justify-between mt-5 ">
            <p className="text-lg text-gray-700 max-w-2xl">
              Nous sommes une entreprise dédiée à la vente en ligne de produits frais et de qualité. Notre mission est de vous offrir une expérience d'achat agréable et pratique, tout en garantissant la fraîcheur et la qualité de nos produits.
              Nous travaillons directement avec les producteurs locaux pour vous proposer une large gamme de fruits, légumes, et autres produits alimentaires. Notre équipe est passionnée par l'alimentation saine et durable, et nous nous engageons à vous fournir le meilleur service possible.
            </p>
            <div className="w-56 h-56 bg-blue-500 rounded-full">

            </div>
          </div>
        </section>
        <section id='contact-us' className='w-full flex flex-col'>
          <h2 className="text-3xl text-orange-600 font-bold mt-10 ">Contactez-nous</h2>
          <div className='flex flex-row items-center justify-between mt-5'>
            <div className='w-1/2'>
              <p className="text-lg text-gray-700 mt-5 w-[95%]">Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter. Nous sommes là pour vous aider !</p>
              <p>Vous pouvez nous contacter sur les autres plateformes comme:</p>
              <ul className=" flex gap-6  mt-2">
                <li><a href="https://www.facebook.com" target='_blank' className="text-blue-600 hover:underline"> <FaFacebook className="hover:text-blue-600 transition text-4xl" /></a></li>
                <li><a href="https://www.instagram.com" className="text-blue-600 hover:underline">  <FaInstagram className="hover:text-pink-500 transition text-4xl" /></a></li>
                <li><a href="https://www.twitter.com" className="text-blue-600 hover:underline"> <FaTwitter className="hover:text-sky-500 transition text-4xl" /></a></li></ul>
            </div>
            <div className='w-1/2'>
              <form className="mt-5 flex flex-col max-w-md">
                <input type="text" placeholder="Votre nom" className="border border-gray-300 p-2 rounded mb-3" />
                <input type="email" placeholder="Votre email" className="border border-gray-300 p-2 rounded mb-3" />
                <textarea placeholder="Votre message" className="border border-gray-300 p-2 rounded mb-3 h-32"></textarea>
                <button type="submit" className="bouton-bleu py-2">Envoyer</button>
              </form>
            </div>
          </div>

        </section>
        <footer id="footer" className='w-full relative bottom-0 mt-32'>
          <div className="w-full bg-gray-800 text-white py-6  flex flex-row mt-10">
            <div className="max-w-7xl mx-auto flex flex-col ">
              <h2 className="text-2xl mb-4">Restez Connecté</h2>
              <p className="text-lg mb-2">Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles et offres spéciales.</p>
              <form className="flex flex-col items-center w-full max-w-md">
                <input type="email" placeholder="Votre email" className="border border-gray-300 p-2 rounded mb-3 w-full" />
                <button type="submit" className="bouton-bleu py-3 w-full">S'abonner</button>
              </form>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
              <p className="text-lg mb-2">© 2025 Votre Entreprise. Tous droits réservés.  </p>
              <p className="text-sm">Politique de confidentialité | Conditions d'utilisation</p>

            </div>
          </div>
        </footer>
      </div >
    </div >
  )
}

export default HomeClient
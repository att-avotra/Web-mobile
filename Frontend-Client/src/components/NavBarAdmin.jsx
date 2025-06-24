import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../Context/SidebarContext';
import { MdDashboard } from 'react-icons/md'
import { FaBoxOpen } from 'react-icons/fa'
import { FaShoppingCart, FaChevronCircleRight, FaChevronLeft } from 'react-icons/fa'
import { MdCategory } from 'react-icons/md'
import { BsClipboardCheck } from 'react-icons/bs'
import HeaderBar from './HeaderBar';
function NavBarAdmin() {
  const { isReduire, setIsReduire } = useSidebar();
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (path) => pathname === path || pathname.startsWith(`${path}/`);

  const baseClasses = `flex items-center h-10 p-2 rounded-sm transition-all duration-200 hover:scale-105 hover:bg-gray-200 cursor-pointer`;
  const activeClasses = "transition-all duration-700 bg-gray-200 text-bleu font-semibold ";

  const navLinks = [
    { to: "/admin/dashboard", label: "Dashboard", icon: <MdDashboard /> },
    { to: "/admin/product", label: "Produit", icon: <FaBoxOpen /> },
    { to: "/admin/order", label: "Commande", icon: <FaShoppingCart /> },
    { to: "/admin/product-categories", label: "Cat.Produit", icon: <MdCategory /> },
    { to: "/admin/parametre", label: "Paramètre", icon: <BsClipboardCheck /> },
    // { to: "/classe", label: "Classe", icon: "icons8-école-48.png" },
    // { to: "/mention", label: "Mention", icon: "mention.png" },
    // { to: "/parcours", label: "Parcours", icon: "icons8-partage-de-connaissances-50.png" },
    // { to: "/edt", label: "Emploi du temps", icon: "icons8-objet-avec-durée-50.png" },
    // { to: "/rapport", label: "Rapport", icon: "evaluation.png" },
    // { to: "/utilisateur", label: "Utilisateurs", icon: "utilisateur.png" },
  ];

  return (
    <>
      <nav className={`${isReduire ? "z-[51] container bg-white w-16 h-screen fixed top-0 left-0 p-2 flex flex-col gap-4 transition-all duration-700" : "container bg-white z-[51] w-52 h-screen fixed top-0 left-0 p-2 flex flex-col gap-3 transition-all duration-700"}`}>
        {/* Logo + bouton réduire */}
        <div className="flex flex-row justify-between items-center ">
          <h1 className='text-orange-600 font-bold text-xl'>Adm</h1>
          <p className={`${isReduire ? "w-3 ms-1 cursor-pointer rotate-[180deg]" : "me-1 w-4 cursor-pointer rotate-360"} transition-all duration-700`}
            onClick={() => setIsReduire(!isReduire)}><FaChevronLeft ></FaChevronLeft></p>
        </div>

        {/* Liens dynamiques */}
        {navLinks.map(({ to, label, icon }) => (
          <Link to={to} key={to}>
            <div className={`${baseClasses} ${isActive(to) ? activeClasses : ""}`}>
              <span
                className={`flex items-center transition-all duration-700 text-orange-600 ${isReduire && isActive(to) ? "justify-center w-full transition-all duration-700" : isReduire ? "justify-center w-full" : "me-1 transition-all duration-700"
                  }`}
              >
                {icon}
              </span>

              <p className={`${isReduire ? "opacity-0 pointer-events-none" : "opacity-100"} transition-all duration-700`}>
                {label}
              </p>
            </div>
          </Link>
        ))}
      </nav>
      <HeaderBar />
    </>
  );
}

export default NavBarAdmin
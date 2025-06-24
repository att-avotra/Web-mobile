import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function RoutesLayout() {
  const [cartIds, setCartIds] = useState([]);

  const toggleCart = (id) => {
    setCartIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      <Navbar cartIds={cartIds} />
      <Outlet context={{ cartIds, toggleCart }} />
    </>
  )
}

export default RoutesLayout
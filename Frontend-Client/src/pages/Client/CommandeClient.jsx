import React from 'react'

function CommandeClient() {
  return (
    <div className='w-full mt-14  flex justify-center items-center z-8'>
      <div className='w-full max-w-7xl flex flex-row gap-2  px-6 py-4'>
        <div className="w-1/2">
          <div className="h-auto bg-white p-2 rounded-xl shadow">
            <p className="text-blue-600 text-center font-bold">Vos commande</p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="h-auto bg-white p-2 rounded-xl shadow">
            <p className="text-blue-600 text-center font-bold">Votre Facturation</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommandeClient
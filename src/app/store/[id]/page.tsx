import Container from '@/components/Container'
import React from 'react'

function Product() {
  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-lg rounded-xl overflow-hidden bg-gradient-to-b from-gray-800 via-purple-900 to-black text-white">
        
        <div className="col-span-9 rtl text-right p-6">
          <h2 className="font-bold text-2xl mb-2">محصول 1</h2>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nisi aliquid architecto unde, cupiditate maiores adipisci similique dolorum placeat vitae numquam earum corrupti nostrum ut corporis quas quis dolore? Autem.
          </p>
          <p className="font-bold mb-4">
            قیمت: <span className="text-purple-400">20$</span>
          </p>

          <div className="flex items-center mt-4">
            <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
              +
            </button>
            <span className="mx-4">2</span>
            <button className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition-colors duration-300">
              -
            </button>
          </div>
        </div>

        <div className="col-span-3">
          <img
            src="https://static.vecteezy.com/ti/photos-gratuite/t2/27001092-ensemble-de-jaune-fleurs-tournesols-avec-feuilles-botanique-image-floral-conception-pour-numerique-contenu-photo.jpg"
            alt="محصول 1"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </Container>
  )
}

export default Product

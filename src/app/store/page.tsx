import Container from '@/components/Container'
import Productitem from '@/components/Productitem'
import React from 'react'

function Store() {
  const data = [
    {
      id: "1",
      img: "https://static.vecteezy.com/ti/photos-gratuite/t2/27001092-ensemble-de-jaune-fleurs-tournesols-avec-feuilles-botanique-image-floral-conception-pour-numerique-contenu-photo.jpg",
      title: 'Sunflower',
      description: "Beautiful yellow sunflowers with green leaves.",
      price: 20,
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=800&q=60",
      title: 'Nature View',
      description: "A breathtaking natural landscape captured in golden light.",
      price: 34,
    },
    {
      id: "3",
      img: "https://numerique.umontpellier.fr/wp-content/uploads/2024/07/Image-3-scaled.jpg",
      title: 'AI Generated Art',
      description: "High-quality AI-generated artwork in vivid colors.",
      price: 85,
    },
    {
      id: "4",
      img: "https://r2.flux1.ai/fluxai/2024/08/car-3.webp",
      title: 'Futuristic Car',
      description: "Modern concept car created with advanced AI tools.",
      price: 44,
    }
  ]

  return (
    <Container>
      
      <h1 className="text-right text-2xl font-semibold py-4">فروشگاه</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <Productitem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </Container>
  )
}

export default Store

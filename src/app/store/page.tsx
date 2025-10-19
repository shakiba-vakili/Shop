import Container from '@/components/Container'
import Productitem, { IProductItemProps } from '@/components/Productitem'
import Link from 'next/link'
import React from 'react'

async function Store() {
const result = await fetch("http://localhost:3004/products")
const data= await result.json() as IProductItemProps[]
  return (
    <Container>
    
      <h1 className="text-right text-white text-2xl font-semibold py-4">فروشگاه</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <Link href={`/store/${item.id}`}       key={item.id}>
          <Productitem
            {...item}
            />
            </Link>
        ))}
      </div>
    </Container>
  )
}

export default Store

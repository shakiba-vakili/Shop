import React from "react";
import Container from "@/components/Container";
import { IProductItemProps } from "@/components/Productitem";

interface IProductProps {
  params: { id: string };
  searchParams?: Record<string, string | string[] | undefined>;
}

async function Product({ params }: IProductProps) {
  const { id } = params;

  const result = await fetch(`http://localhost:3004/products/${id}`)


  const data = (await result.json()) as IProductItemProps;

  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-lg rounded-xl overflow-hidden bg-gradient-to-b from-gray-800 via-purple-900 to-black text-white">
        <div className="col-span-9 rtl text-right p-6">
          <h2 className="font-bold text-2xl mb-2">{data.title}</h2>
          <p className="text-gray-300 mb-4">{data.description}</p>
          <p className="font-bold mb-4">
            قیمت: <span className="text-purple-400">{data.price}$</span>
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
            src={data.img}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
}

export default Product

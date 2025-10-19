export interface IProductItemProps {
  id: string
  img: string
  title: string
  description: string
  price: number
}

function Productitem({ img, title, price }: IProductItemProps) {
  return (
    <div className="shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-lg bg-white">
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-3 text-right rtl">
        <h1 className="font-bold text-lg mb-1">{title}</h1>
        <p className="text-gray-600 text-sm">
          قیمت: <span className="text-sky-800 font-semibold">{price}$</span>
        </p>
      </div>
    </div>
  )
}

export default Productitem

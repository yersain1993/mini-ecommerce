import { useCartStore, type CartItem } from "../../stores/useCartStore";
import React from "react";
interface ProductCardProps {
  product: CartItem;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
}) => {

  const add = useCartStore((state) => state.add);

  const handleAddToCart = () => {
    add(product);
    console.log(product)
  };



  return (
    <div className='flex flex-col w-auto max-w-80 h-[700px] items-center p-4 text-sky-300 border-2 border-sky-600 rounded-3xl bg-sky-200 scale-90'>
      <img src={product.images[0]} alt={product.slug} loading="lazy" className="border-2 border-sky-300 max-h-72 max-w-52"/>
      <div className="h-full flex flex-col justify-between">
        <div className="h-full flex flex-col justify-around mt-1">
          <h1 className="text-sky-900 text-2xl font-bold">{product.title}</h1>
          <p className="text-sky-950 text-sm">{product.description}</p>
          <p className="text-sky-900 text-2xl font-bold text-center">${product.price}</p>
        </div>
        <div className="flex justify-around m-1">
          <button className="flex bg-sky-900 hover:bg-sky-600 text-white active:bg-white active:text-sky-900 font-bold p-4 w-3/4 rounded items-center justify-around"
            onClick={handleAddToCart}
          >
            <p>
              Añadir al carrito
            </p>
            <span className="material-symbols-outlined">
              shopping_cart_checkout
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
import { useCartStore } from "../../stores/useCartStore";

const ProductCart: React.FC = () => {

  const { items, increase, decrease, remove, clear } = useCartStore();
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  console.log(totalPrice);
  return (
    <div className="w-full absolute z-10 p-5">
      <section>
        <ul className="w-full h-full flex flex-col items-center justify-center">
            {items ? (
                items.map((item: any) => (
                <li key={item.id} className="flex flex-col items-center">
                    <img src={item.images[0]} alt={item.title} className="size-28"/>
                    <h2>{item.title}</h2>
                    <span>${item.price}</span>
                    <div className="w-full flex justify-evenly">
                      <button onClick={() => increase(item.id)}>+</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => decrease(item.id)}>-</button>
                    </div>
                    <span>Subtotal: ${item.price * item.quantity}</span>
                    <button onClick={() => remove(item.id)}>Eliminar</button>
                </li>
                ))
                
            ) : (
                <p>No hay productos en el carrito</p>
            )}
        </ul>
        <span>Total: ${totalPrice}</span>
        <div className="flex flex-col text-center">
          
          <button onClick={() => clear()}>Pagar</button>
        </div>
      </section>
    </div>
    
  )
};

export default ProductCart;
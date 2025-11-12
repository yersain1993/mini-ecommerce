import React from "react";
import { useCartStore } from "../../stores/useCartStore";

const ProductCart: React.FC = () => {
  const {
    items,
    isPaid,
    increase,
    decrease,
    remove,
    clear,
    purchase,
    resetPurchase,
  } = useCartStore();

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePurchase = () => {
    if (items.length === 0) return;
    clear();
    purchase();
  };

    const handleNewPurchase = () => {
    resetPurchase();
  };


  return (
    <div className="w-full h-full absolute z-10 p-5">
      <section className="flex flex-col items-center">
        {isPaid ? (
          <div className="flex flex-col items-center justify-between">
            <p className="text-2xl text-green-700 font-bold mt-10">
            ¡Gracias por su compra!
          </p>
            <button
              className="bg-sky-200 px-3 mt-10 rounded-full text-sky-900 active:bg-sky-600 active:text-sky-200 font-bold"
              onClick={handleNewPurchase}
            >
              Comprar de nuevo
            </button>
          </div>
        ) : (
          <>
            {items.length > 0 ? (
              <>
                <ul className="w-full flex flex-wrap items-center justify-center gap-3.5">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex flex-col items-center p-3 rounded-t-2xl border border-sky-200 shadow-sm"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="size-28 object-contain"
                      />
                      <h2 className="font-semibold">{item.title}</h2>
                      <span>${item.price}</span>

                      <div className="w-full flex justify-evenly items-center mt-1">
                        <button
                          className="bg-sky-200 px-3 rounded-l-full text-sky-900 active:bg-sky-600 active:text-sky-200 font-bold"
                          onClick={() => increase(item.id)}
                        >
                          +
                        </button>
                        <span className="font-bold">{item.quantity}</span>
                        <button
                          className="bg-sky-200 px-3 rounded-r-full text-sky-900 active:bg-sky-600 active:text-sky-200 font-bold"
                          onClick={() => decrease(item.id)}
                        >
                          -
                        </button>
                      </div>

                      <span className="mt-1">
                        Subtotal: ${item.price * item.quantity}
                      </span>

                      <button
                        className="text-3xl text-sky-500 active:text-sky-50 active:scale-90 mt-2"
                        onClick={() => remove(item.id)}
                      >
                        <i className="bx bx-trash-alt"></i>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col text-center mt-5">
                  <span className="text-lg font-semibold text-sky-900">
                    Total: ${totalPrice}
                  </span>
                  <button
                    className="bg-sky-950 px-5 py-2 mt-3 rounded-full text-sky-300 active:bg-sky-600 active:text-sky-200 font-bold"
                    onClick={handlePurchase}
                  >
                    Pagar
                  </button>
                </div>
              </>
            ) : (
              <p className="text-sky-500 text-3xl font-bold text-center mt-10">
                No hay productos en el carrito
              </p>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default ProductCart;

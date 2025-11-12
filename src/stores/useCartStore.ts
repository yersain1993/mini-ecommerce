import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
    id: number;
    title: string;
    price: number;
    description: string;
    images?: string[];
    quantity: number;
}

interface CartState {
    items: CartItem[];
    isPaid: boolean;

    add: (item: Omit<CartItem, "quantity">) => void; // CONSULTAR SOBRE OMIT
    remove: (id: number) => void;
    clear: () => void;
    purchase: () => void;
    resetPurchase: () => void;

    increase: (id: number) => void;
    decrease: (id: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
    items: [],
    isPaid: false,

    add: (item) => {
      const items = get().items;
      const exists = items.find((i) => i.id === item.id);

      if (exists) {
        return set({
          items: items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        });
      }

      set({ items: [...items, { ...item, quantity: 1 }] });
    },

    remove: (id) =>
      set({
        items: get().items.filter((i) => i.id !== id),
      }),

    increase: (id) =>
      set({
        items: get().items.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      }),

    decrease: (id) =>
      set({
        items: get().items
          .map((i) =>
            i.id === id ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0),
      }),

    clear: () => set({ items: [] }),
    
    purchase: () => set({isPaid: true}),
    resetPurchase: () => set({ isPaid: false }),

}),

    {
      name: "cart-storage", // 🔹 clave del localStorage
      partialize: (state) => ({ items: state.items }), // 🔹 solo guardamos el carrito (no isPaid)
    }
  )
  );

import { create } from "zustand";


interface Category {
    id: number;
    name: string;
    slug: string;
}

export interface CartItem {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: Category;
    thumbnail: string;
    images?: string[];
    quantity: number;
}

interface CartState {
    items: CartItem[];

    add: (item: Omit<CartItem, "quantity">) => void; // CONSULTAR SOBRE OMIT
    remove: (id: number) => void;
    clear: () => void;

    increase: (id: number) => void;
    decrease: (id: number) => void;

    totalItems: number;
    totalPrice: number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

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

  // Getters (automated)
  get totalItems() {
    return get().items.reduce((sum, i) => sum + i.quantity, 0);
  },

  get totalPrice() {
    return get().items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  },
}));

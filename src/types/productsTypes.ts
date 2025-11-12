export interface Category {
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
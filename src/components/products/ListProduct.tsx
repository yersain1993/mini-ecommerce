import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import LoaderSpiner from '../ui/LoaderSpiner'
import { productsServices } from "../../services/productsServices";



export default function ListProduct() {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await productsServices()
      setProductsData(data)
    }
    loadData()
  }, []);

  const productsDataSliced = productsData.slice(0,46);

  const isProduct = productsData.length === 0;

  return (
    <div className='text-sky-300'>
        <ul className={`flex flex-wrap gap-2 ${isProduct ? 'h-screen' : ''} items-center justify-center mt-4`}>
          {isProduct  ? (
            <LoaderSpiner/>
          ) : 
          (
            productsDataSliced.map((product: any) => (
              <li key={product.id}>
                <ProductCard
                product={product}
                />
              </li>
            ))
          )
          }
            
        </ul>
    </div>
  )
}
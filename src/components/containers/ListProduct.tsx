import { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import LoaderSpiner from '../common/LoaderSpiner'
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

  const productsDataSliced = productsData.slice(0,50);

  console.log(productsData.length);
  return (
    <div className='text-sky-300'>
        <h1 className='text-center text-2xl'>
          BIENVENIDO USUARIO, ACONTINUACIÓN PODRAS VER TODO LO QUE TENEMOS PAERA OFRECERTE
        </h1>
        <ul className={`flex flex-wrap gap-4 ${!productsData.length ? 'h-screen' : ''} items-center justify-center mt-4`}>
          {!productsData.length ? (
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
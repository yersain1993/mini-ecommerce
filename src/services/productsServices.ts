import { axiosInstances } from '../api/axiosInstance';

export const productsServices = async () => {
  try {
    const res = await axiosInstances.get('products');
    //array de objetos de productos
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
import api from '../../services/api';

import { useEffect } from 'react';

export function Home() {
  const { userStore: { products, setProducts } } = useStores();

  const getProducts = async () => {
    try {
      const result = await api.get('/products');

      if (result.status !== 200) {
        throw 'Falha ao efetuar o login';
      }

      const { data } = result;
      setProducts(data);
    } catch (error) {
      if (error.request) {
        console.log('error', error.request.response);
      }
    }
  }
  
  useEffect(() => { getProducts() }, []);

  const productsInfo = products;

  return (
    <div>
      home
    </div>
  ) 
}
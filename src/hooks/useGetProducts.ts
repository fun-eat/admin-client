import { useEffect, useState } from 'react';

import { ProductResponse, getProducts } from '../apis/product';

export const useGetProducts = (productId?: number) => {
  const [products, setProducts] = useState<ProductResponse[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(productId);
      setProducts(data);
    };

    fetchProducts();
  }, [productId]);

  return products;
};

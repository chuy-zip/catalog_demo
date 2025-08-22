import { useState, useEffect, useCallback } from 'react';

const useProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error('Error al cargar los productos');
        }
        const data = await response.json();
        setProductsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Función memoizada para obtener productos por marca
  const getProductsByBrand = useCallback((brand) => {
    return productsData.filter(product => 
      product.brand && brand && 
      product.brand.toLowerCase() === brand.toLowerCase()
    );
  }, [productsData]);

  // Función memoizada para obtener todas las marcas únicas
  const getBrands = useCallback(() => {
    const brands = [...new Set(productsData.map(product => product.brand))];
    return brands.sort();
  }, [productsData]);

  return { 
    products: productsData, 
    loading, 
    error, 
    getProductsByBrand, 
    getBrands 
  };
};

export default useProducts;
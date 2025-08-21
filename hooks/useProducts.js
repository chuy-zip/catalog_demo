import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
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
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Función para obtener productos por marca
  const getProductsByBrand = (brand) => {
    return products.filter(product => product.brand === brand);
  };

  // Función para obtener todas las marcas únicas
  const getBrands = () => {
    const brands = [...new Set(products.map(product => product.brand))];
    return brands.sort();
  };

  return { products, loading, error, getProductsByBrand, getBrands };
};

export default useProducts;
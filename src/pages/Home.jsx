import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a la Fake Store API para obtener todos los productos
      async function fetchProducts() {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
          setFilteredProducts(response.data);
        } catch (error) {
          console.error('Error al obtener los productos:', error);
        }
      }

      fetchProducts();
  }, []);

  useEffect(() => {
    // Filtra los productos por nombre o categoría
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome {token.user.user_metadata.full_name}</p>
      <input
        type="text"
        placeholder="Buscar productos por nombre o categoría"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {/* Renderiza los productos filtrados */}
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h3>{product.title}</h3>
            </Link>
            <p>{product.category}</p>
            <img src={product.image} alt="product" width={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

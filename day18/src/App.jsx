import React,{ useEffect,useState} from 'react'
import axios from 'axios';
export default function App() {
  let [products, setProducts] = useState([]);

  async function fetchProducts() {
    // try {
    //   let res = await fetch("https://dummyjson.com/products");
    //   let data = await res.json();
    //   setProducts(data.products);
    // } catch (error) {
    //   console.error("Error fetching products:", error);
    // }
    try {
      let res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
      console.log(res.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
      
    }

  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.images[0]} alt={product.title} style={{ width: '100px' }} />
          </div>
        ))}
      </div>
      <button onClick={fetchProducts}>fetch products</button>
    </div>
  )
}

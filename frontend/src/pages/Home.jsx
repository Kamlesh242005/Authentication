import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleSuccess, handleError } from '../Util'
import { ToastContainer } from 'react-toastify'

const Home = () => {
  const [loggedUser, setLoggedUser] = useState('')
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setLoggedUser(localStorage.getItem("name") || "")
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("jwtToken")
    localStorage.removeItem("name")
    handleSuccess("Logout successful!")
    setTimeout(() => {
      navigate('/login')
    }, 1000)
  }

const fetchProducts = async () => {
  try {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      handleError("No token found, please login again.");
      navigate("/login");
      return;
    }

    const url = "https://authentication-api-vert.vercel.app/product";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    const result = await response.json();
    console.log("Fetch result:", result);

    if (response.ok && Array.isArray(result)) {
      setProducts(result);
    } else {
      handleError("Failed to fetch products!");
    }

  } catch (err) {
    console.error("Fetch error:", err);
    handleError("Something went wrong while fetching products");
  }
};



  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Welcome, {loggedUser}</h1>
      <button onClick={handleLogout}>Logout</button>

      <div>
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} style={{border:"1px solid #ccc", margin:"10px", padding:"10px", borderRadius:"5px"}}>
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>

      <ToastContainer />
    </div>
  )
}

export default Home

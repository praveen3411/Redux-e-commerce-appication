import { Box, Button, filter } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import loadingsymbol from "../assets/loadingsymbol.svg";

export default function Products() {
  const [productsone, setProductsone] = useState([]);
  const [filtering, setFiltering] = useState(productsone);
  const [loading, setLoading] = useState(false);
  let newfunction = async () => {
    try {
      setLoading(true);
      const respones = await fetch(`https://fakestoreapi.com/products`);
      setProductsone(await respones.clone().json());
      setFiltering(await respones.json());
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newfunction();
  }, []);
  let Loading = () => {
    return (
      <>
        <img
          width={"200px"}
          height="200px"
          src={loadingsymbol}
          alt="loading ..."
        />
      </>
    );
  };

  let filterProducts = (cat) => {
    const updatedlist = productsone.filter((item) => item.category === cat);
    setFiltering(updatedlist);
  };

  let ShowProducts = () => {
    return (
      <>
        <Box className="container d-flex justify-content-center mb-5 pb-5">
          <Button
            className="btn btn-outline-dark me-2"
            onClick={() => setFiltering(productsone)}
          >
            All
          </Button>
          <Button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("men's clothing")}
          >
            Men's Clothing
          </Button>
          <Button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("women's clothing")}
          >
            Women's Cloting
          </Button>
          <Button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("jewelery")}
          >
            Jwellery's
          </Button>
          <Button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("electronics")}
          >
            Electronic
          </Button>
        </Box>
        {filtering.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card h-100 text-center p-4">
              <img
                height={"250px"}
                src={item.image}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {item.title.substring(0, 12)}...
                </h5>
                <p className="card-text lead fw-bold">${item.price}</p>
                <Link to={`/product/${item.id}`} className="btn btn-outline-dark">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <Box>
      <Box className="container my-5 py-5">
        <Box className="row">
          <Box className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest-Products</h1>
            <hr />
          </Box>
        </Box>
        <Box className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </Box>
      </Box>
    </Box>
  );
}

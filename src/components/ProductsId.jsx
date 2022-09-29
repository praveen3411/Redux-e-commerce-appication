import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import lo from "../assets/loadingsymbol.svg";
import { useDispatch, useSelector } from "react-redux";
import { addcartitem } from "../redux/cart/cart.actions";

export default function ProductsId() {
  let parms = useParams();
  const [storing, setStoring] = useState([]);
  const [loading, setLoading] = useState(false);
  let cartitems = useSelector((store) => store.cart);
  let dispatch = useDispatch();
  let newfunctions = (products) => {
    dispatch(addcartitem(products));
  };
  console.log(cartitems);
  let newfunction = async () => {
    try {
      setLoading(true);
      let response = await fetch(
        `https://fakestoreapi.com/products/${parms.id}`
      );
      let send = await response.json();
      setStoring(send);
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
        <img width={"200px"} height="200px" src={lo} alt="loading ..." />
      </>
    );
  };
  let Showproducts = () => {
    return (
      <>
        <div className="container" style={{ display: "flex" }}>
          <div className="col-md-6">
            <img
              src={storing.image}
              alt={storing.title}
              height="400px"
              width={"400px"}
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{storing.category}</h4>
            <h1 className="display-5">{storing.title}</h1>
            <p className="lead fw-bolder">
              Rating {storing.rating && storing.rating.rate}{" "}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">${storing.price}</h3>
            <p className="lead">{storing.description}</p>
            <Button
              className="btn btn-outline-dark me-10 px-4 py-2"
              onClick={() => newfunctions(storing)}
            >
              Add to cart
            </Button>
            <Link to={"/cart"} className="btn btn-dark me-10 px-4 py-2 ms-4">
              Go to cart
            </Link>
          </div>
        </div>
      </>
    );
  };
  return (
    <Box>
      <br />
      <br />
      <br />
      <br /> {loading ? <Loading /> : <Showproducts />}
    </Box>
  );
}

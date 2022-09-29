import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "../redux/cart/cart.actions";

export default function Cart() {
  const state = useSelector((store) => store.cart);
  let dispatch = useDispatch();
  let handlebutton = (products) => {
    dispatch(deleteCart(products));
  };
  console.log(state);
  return (
    <Box>
      {state.map((item) => (
        <div className="container" style={{ display: "flex" }}>
          <div className="co  l-md-6">
            <img
              src={item.image}
              alt={item.title}
              height="400px"
              width={"400px"}
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{item.category}</h4>
            <h1 className="display-5">{item.title}</h1>
            <p className="lead fw-bolder">
              Rating {item.rating && item.rating.rate}{" "}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">
              {item.qty} X ${item.price} = {item.qty * item.price}
            </h3>
            <button
              className="btn btn-outline-dark me-4"
              onClick={() => handlebutton(item)}
            >
              <i className="fa fa-minus" />
            </button>
            <button
              className="btn btn-outline-dark me-4"
              onClick={() => handlebutton(item)}
            >
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
      ))}
    </Box>
  );
}

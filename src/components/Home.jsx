import { Box } from "@chakra-ui/react";
import React from "react";
import shopppingtwo from "../assets/shoppingtwo.svg";
import Products from "./Products";
export default function Home() {
  return (
    <Box className="hero">
      <div className="card">
        <img
          height={"590px"}
          src={shopppingtwo}
          className="card-img"
          alt="BackGroundImage"
        />
        <div className="card-img-overlay d-flex flex-row flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 ">
              NEW SEASON <span style={{ color: "#6C63FF" }}>AR</span>RIVALS
            </h5>
            <p className="card-text lead fs-2">
              CHECKOUT ALL THE NEW TREND
              <span style={{ color: "#6C63FF" }}>S & O</span>FFERS 💃
            </p>
          </div>
        </div>
      </div>
      <Products />
    </Box>
  );
}

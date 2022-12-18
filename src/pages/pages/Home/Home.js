import React, { useEffect } from "react";
import Feature from "./Feature";
import Header from "./Header";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {


  return (
    <div>
      <Header />
      <Feature />
      <Pricing />
      <Testimonial />
    </div>
  );
};

export default Home;

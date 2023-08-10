import React from "react";
import Slider from "./Slider";
import SearchBar from "./SearchBar";
import Steps from "./Steps";
import ProfileBody from "./ProfileBody";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Slider />
      <SearchBar />
      <Steps />
      <ProfileBody />
      <Testimonial />
    </div>
  );
};

export default Home;

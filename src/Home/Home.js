import React from "react";
import Slider from "./Slider";
import SearchBar from "./SearchBar";
import Steps from "./Steps";
import ProfileBody from "./ProfileBody";

const Home = () => {
  return (
    <div>
      <Slider />
      <SearchBar />
      <Steps />
      <ProfileBody />
    </div>
  );
};

export default Home;

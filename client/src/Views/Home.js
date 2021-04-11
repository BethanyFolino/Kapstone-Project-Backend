import React from "react";
import Navigation from "../Components/Navigation";
import Search from "../Components/Search";
import { useStore } from "../Store/Store";

const Home = () => {
  const user = useStore((state) => state.user);
  return (
    <div className="home">
      <Navigation />
      <Search />
    </div>
  );
};

export default Home;

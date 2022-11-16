import React, { useState } from "react";
import Banner from "../../components/banner/Banner";
import Hero from "../../components/hero/Hero";
import Info from "../../components/info/Info";
import "./home.scss";
import Upcomming from "../../components/upcoming/Upcomming";
import { recommended2 } from "../../dummyData";

const Home = () => {
  const [fourPlus, setFourPlus] = useState(recommended2);

  return (
    <div>
      <Hero />
      <section className="section2">
        <Info />
      </section>
      <section className="section2">
        <Banner />
        <Upcomming
          items={fourPlus}
          title="'Rodzina jakich wiele, poznacie ją na co dzień, poznacie ją w niedzielę'"
        />
      </section>
    </div>
  );
};

export default Home;

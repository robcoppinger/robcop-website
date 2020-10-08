import React from "react";
import "./Home.css";
import HeroImg from "../../assets/images/hero.jpg";
import { Card } from "../../components/Card.tsx";
import Headshot from "../../assets/images/headshot.jpg";

export const Home = () => (
  <>
    <img className="hero" src={HeroImg} />
    <Card
      style={{
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingTop: "12rem",
        textAlign: "center",
      }}
    >
      <div className="headshot">
        <img src={Headshot} style={{ width: "100%" }}></img>
      </div>
      <h1>Rob Coppinger</h1>
      <h3 className='subtitle'>Software Developer</h3>
    </Card>
    <div style={{ height: "20rem" }}></div>
  </>
);

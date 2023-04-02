import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>About페이지이임</div>
      <Outlet />
    </>
  );
};

export default About;

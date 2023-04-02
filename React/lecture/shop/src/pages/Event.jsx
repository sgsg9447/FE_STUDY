import React from "react";
import { Outlet } from "react-router-dom";

const Event = () => {
  return (
    <>
      <div>Event</div>
      <Outlet />
    </>
  );
};

export default Event;

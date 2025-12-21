import React from "react";
import Component2 from "./Component2";
import { AppContext } from "../Context/AppContext";

const Component1 = () => {
  const contextValues = {
    a: "Value A",
    b: "Value B",
    c: "Value C",
    d: "Value D",
    e: "Value E",
    f: "Value F",
  };

  return (
    <AppContext.Provider value={contextValues}>
      <Component2 />
    </AppContext.Provider>
  );
};

export default Component1;

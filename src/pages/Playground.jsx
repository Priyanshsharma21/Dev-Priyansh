import React, { useState, useEffect } from "react";
import { Spinner } from "../components";
import Spline from "@splinetool/react-spline";

const Playground = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false)
    }, 15000);
  }, []);

  return (
    <div className="w-full h-screen">
      {isLoading ? (
        <Spinner />
      ) : (
        <Spline
          scene="https://prod.spline.design/yVUeGOevL5FX0KXv/scene.splinecode"
        />
      )}
    </div>
  );
};

export default Playground;

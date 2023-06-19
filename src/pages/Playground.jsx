import React, { useState, useEffect } from "react";
import { Spinner } from "../components";
import Spline from "@splinetool/react-spline";

const Playground = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false)
    }, 6000);
  }, []);

  return (
    <div className="w-full h-screen">
      {isLoading ? (
        <Spinner />
      ) : (
        <Spline scene="https://prod.spline.design/ni3bhslHllYqgfZT/scene.splinecode" />
      )}
    </div>
  );
};

export default Playground;

import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import LazyLoader from '../LazyLoader';

const Devpriyansh = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full">
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-full">
          <LazyLoader />
        </div>
      ) : (
        <Spline scene="https://prod.spline.design/kdw0QyrVpSlktXmH/scene.splinecode" />
      )}
    </div>
  );
}

export default Devpriyansh;

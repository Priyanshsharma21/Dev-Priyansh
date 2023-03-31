import React, { useEffect } from 'react'

const Stars = () => {

  useEffect(()=>{
      function createStars() {
        var numStars = 100;

        var starsContainer = document.getElementById("stars");

        for (var i = 0; i < numStars; i++) {
            var star = document.createElement("div");

            star.classList.add("star");

            star.style.top = Math.floor(Math.random() * 100) + "%";
            star.style.left = Math.floor(Math.random() * 100) + "%";
            star.style.width = Math.floor(Math.random() * 3) + "px";
            star.style.height = star.style.width;

            starsContainer.appendChild(star);
        }
      }

      createStars()

    window.onload = createStars;

  },[])


  return (
    <>
    <div id="stars"></div>
    </>
  )
}

export default Stars

















// import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";


// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//     <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//       <PointMaterial
//         transparent
//         color='#f272c8'
//         size={0.002}
//         sizeAttenuation={true}
//         depthWrite={false}
//       />
//     </Points>
//   </group>
//   )
// }

// const StarsCanvas = () => {
//   return (
//     <div className='w-full h-auto absolute inset-0 z-[-1]'>
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;


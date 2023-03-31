import React from 'react'
import Tilt from "react-tilt";

const BallCanvas = ({icon,name}) => {
  return (
    <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 150,
    }}
    className='w-[100px] h-[100px] rounded-full bg-[#333333bb] p-4 ball_card'
  >
      <img src={icon} alt="tech Icons" title={name} className="w-full h-full object-cover " />
    </Tilt>
  )
}

export default BallCanvas
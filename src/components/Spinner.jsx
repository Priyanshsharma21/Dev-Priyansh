import React from 'react'

const Spinner = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        
        <div className="flex mt-40 flex-col items-center">
        <div className="text-white flex">
          <div className="loading_text mr-2">Game is Loading</div>
          <div id="loader">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div className="instruction mt-5">
          <div className="game_ins text-white font-semibold text-center text-[0.9rem]">Game Rules</div>
          <ul className="ins_ul">
            <li className='text-slate-300 text-justify mt-2'>W - Forward</li>
            <li className='text-slate-300 text-justify mt-2'>S - Backward</li>
            <li className='text-slate-300 text-justify mt-2'>D - Right</li>
            <li className='text-slate-300 text-justify mt-2'>A - Left</li>
            <li className='text-slate-300 text-justify mt-2'>Space - Jump</li>
          </ul>
        </div>
        </div>

        
    </div>
  )
}

export default Spinner
"use client"
import React, { useEffect, useRef } from 'react'

import './page.scss'

export default function Home() {
  const svgRef = useRef(null)
  



  useEffect(()=> {
    // svgRef.current.setAttribute('style')
    // svgRef.current.style.strokeDashoffset = 0
    // svgRef.current.style.strokeDashArray = 0.5
    // console.log('window ', window.innerHeight)
    window.addEventListener('scroll', (e)=> {
      if( !svgRef || !svgRef.current ) return
      // console.log("window.innerHeight ", document.body.scrollHeight)
      // console.log("scroll ", window.scrollY)
      // console.log("scroll at ", window.scrollY / (document.body.scrollHeight - window.innerHeight) )
      // svgRef.current.style.strokeDashoffset = 1 - (window.scrollY / (document.body.scrollHeight - window.innerHeight))
    })
  }, [])


  return (
    <div className='page'>
      <h1>
        Starting Soon
      </h1>

      

      {/* <svg width="212" height="186" className='vogo_svg' viewBox="0 0 212 186" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={svgRef}
          className='vogo_path'
          d="M99.0718 3.99999C102.151 -1.33335 109.849 -1.33333 112.928 4L210.526 173.045C214.734 180.333 206.281 188.341 199.231 183.747L110.367 125.846C107.713 124.116 104.287 124.116 101.633 125.846L12.7695 183.747C5.71862 188.341 -2.73387 180.333 1.4739 173.045L99.0718 3.99999Z"
          fill="#D9D9D9"
          pathLength={1}
        />
      </svg> */}

      <svg
        width="195.2" height="66.801"
        viewBox="0 0 195.2 66.801"
        xmlns="http://www.w3.org/2000/svg"
        className='vogo_svg'
      >
        <g
          id="svgGroup"
          strokeLinecap="round"
          fillRule="evenodd"
          fontSize="9pt"
          stroke="#000"
          strokeWidth="0.25mm"
          fill="#000"
          style={{
            stroke: '#000',
            strokeWidth: '0.2rem',
            fill: '#000',
          }}
        >
          <path
            ref={svgRef}
            className='vogo_path'
            d="M 121.3 70 L 134 34.2 L 121.9 0 L 133.5 0 L 140.9 22.6 L 141.1 22.6 L 148.7 0 L 159.1 0 L 147 34.2 L 159.7 70 L 148.1 70 L 140.1 45.6 L 139.9 45.6 L 131.7 70 L 121.3 70 Z M 34.4 70 L 34.4 0 L 64.4 0 L 64.4 10 L 45.4 10 L 45.4 28.5 L 60.5 28.5 L 60.5 38.5 L 45.4 38.5 L 45.4 60 L 64.4 60 L 64.4 70 L 34.4 70 Z M 0 70 L 0 0 L 29.1 0 L 29.1 10 L 11 10 L 11 29.5 L 25.2 29.5 L 25.2 39.5 L 11 39.5 L 11 70 L 0 70 Z M 70.7 70 L 70.7 0 L 81.7 0 L 81.7 60 L 99.8 60 L 99.8 70 L 70.7 70 Z M 105.1 70 L 105.1 0 L 116.1 0 L 116.1 70 L 105.1 70 Z"
            vectorEffect="non-scaling-stroke"
            fill='red'
            pathLength={1}
          />
        </g>
      </svg>
    </div>
  )
}

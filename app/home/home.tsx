"use client"
import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'


import {EffectComposer} from '../utils/EffectComposer'
import {Glitch, ToneMapping} from '../utils/effects'
import { useControls } from 'leva'
import { Vector2 } from 'three/src/math/Vector2'


// styles
import './home.scss'


const containerVariants = {
    initial: {
        opacity: 0,
        y: 150
    },
    animate: {
        opacity: 1,
        y: 0,

        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.9,
        },
    },
}
const itemVariants = {
    initial: {
        opacity: 0,
        y: 150
    },
    animate: {
        opacity: 1,
        y: 0,
    },
}

export default function HomePage() {
    const router = useRouter()

    const svgRef = useRef(null)


    // wobbly ball
    const ballConfig = useControls("Ball", {
        color: "#00b0e8",
        emisive: "black",
        transparent: true,
        opacity: {
            min: 0,
            max: 1,
            step: .1,
            value: 0.9,
        },
        roughness: {
            min: 0,
            max: 1,
            step: .1,
            value: 0,
        },
    })
  

    const onKeyPress = (event) => {
        console.log("clicked key ", event)

        const routes = [
            "guitar",
            "truck",
            "bike",
        ]
        const randomRoute = Math.floor(Math.random() * routes.length)
        console.log("randomRoute ", randomRoute)
        // navigate to it
        router.push(routes[randomRoute])
    }


    useEffect(()=> {
        document.addEventListener('keydown', onKeyPress)

        return ()=> {
            document.removeEventListener('keydown', onKeyPress)
            document.removeEventListener('scroll', null)
        }
    }, [onKeyPress])

    return (
        <div className='page'>

            <Canvas shadows style={{ width: '100vw', height: '100vh' }}>
                <ambientLight />
      
                <EffectComposer>
                    <Glitch
                        duration={new Vector2(0.6, 1.0)}
                        delay={new Vector2(1.5, 3.5)}
                    />
                    <ToneMapping />
                    {/* <DotScreen scale={200} /> */}
                    {/* <Scanline density={0.005} /> */}
                    {/* <ColorAverage blendFunction={BlendFunction.DARKEN} /> */}
                    {/* <Noise blendFunction={BlendFunction.DARKEN} /> */}
                </EffectComposer>
           
                <mesh>
                    <sphereGeometry args={[ 2, 120, 120 ]} />
                    <MeshDistortMaterial
                        attach="material"
                        color={ballConfig.color}
                        emissive={ballConfig.emisive}
                        transparent={ballConfig.transparent}
                        opacity={ballConfig.opacity}
                        distort={.3}
                        speed={1.8}
                        roughness={ballConfig.roughness}
                    />
                </mesh>

                <pointLight args={[ 'red' ]} />

                <OrbitControls />

                <color args={[ 'lightblue' ]} attach='background' />
            </Canvas>

        

            <motion.div
                className='page_content'
                variants={containerVariants}
                initial="initial"
                animate="animate"
            >

                <motion.h4
                    className=''
                    variants={itemVariants}
                >
                    Welcome to the
                </motion.h4>
                <motion.p
                    className='title_2'
                    variants={itemVariants}
                >
                    Glitch.
                </motion.p>

                
                <motion.p
                    className='page_content__instruction'
                    variants={itemVariants}
                >
                    <motion.small>
                        Press any [<strong>key</strong>] and &apos;something&apos; will happen. &apos;Something&apos;.
                    </motion.small>
                </motion.p>

            </motion.div>

        </div>
    )
}

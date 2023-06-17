"use client"
import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, MeshDistortMaterial } from '@react-three/drei';
import { Cloud, Environment, Float, Stars, Text, useProgress } from '@react-three/drei/core';


import { useWindowWidth } from '@react-hook/window-size';
import { motion } from 'framer-motion';


// styles
import { containerVariants, itemVariants } from '../styles/variants';

// components
import X2Drone from '../components/drones/x2_drone'
import VSpacerComponent from '../components/v_spacer/component';
import AppbarComponent from '../components/appbar/component';



const BALL_SCALE = 1.4
const Ball = ()=> {
  const [pos, setPos] = useState(50)
  const [color, setColor] = useState("black") // "darkgrey"
  

  useFrame(()=> {
    setPos((state)=> {
      return (state > 8) ? state -= .5 : state
    })
  })
  

  useEffect(()=> {
    setInterval(()=> {
        setColor( (state)=> state == "black" ? '#28143D' : 'black' )
    }, 5000)
  }, [])

  return (
    <mesh
      position={[ -0, 0, -(pos) ]}
      scale={[ BALL_SCALE, BALL_SCALE, BALL_SCALE ]}
    >
      <sphereGeometry args={[ 3.2, 80, 80 ]} />
      <meshLambertMaterial color="blue" opacity={0.5} />
      
      <MeshDistortMaterial
        attach="material"
        color={ color }
        distort={.4}
        speed={1.8}
        roughness={0}
      />
    </mesh>
  )
}


const Ring = ({ startingZPosition, index }: { startingZPosition: number, index: number })=> {
    const width = useWindowWidth()
    const isMobile = width < 768
    const [pos, setPos] = useState(-20 + startingZPosition)
    const [show, setShow] = useState(true)

    const meshRef = useRef(null)

    useFrame(()=> {
        setPos((state)=> {
            if( pos === -3 && index != 1 ) {
                // console.log("at the point ", index);
                setShow(false)
            }
            return ( state < -3 ) ? state += .5 : state
        })
    })

    if( !show ) {
        return <></>
    }
    return (
        <mesh
            position={[ 0, 0, pos ]}
            ref={meshRef}
            scale={isMobile ? [ .5, .5, .5 ] : [ 1, 1, 1 ]}
        >
            <torusGeometry args={[ 5, .1, 20, 40, ]} />
            <meshLambertMaterial color="green" />
        </mesh>
    )
}


function StarWarsOne() {
    const width = useWindowWidth()
    const isMobile = width < 768

    const [showBlob, setShowBlob] = useState(false)
    const [showDrone, setShowBDrone] = useState(false)
    const [showText, setShowText] = useState(false)


    useEffect(()=> {
        setTimeout(()=> setShowBlob(true), 1500)
        setTimeout(()=> setShowBDrone(true), 3900)
        setTimeout(()=> setShowText(true), 4900)
    }, [])
    
    return (
        <div className="page" style={{ height: '100vh' }}>
            

            {/* appbar */}
            <AppbarComponent />

            <Canvas shadows style={{ height: '100%', maxHeight: '960px', borderRadius: '8px' }}>

                {/* Environment */}
                <Environment
                    near={1}
                    far={1000}
                    resolution={256}
                    background
                >
                <Stars radius={150} depth={50} fade speed={1} count={5000} factor={4} saturation={0} />
                    {/* <Sky /> */}
                    <color attach="background" args={[ "lightblue" ]} />
                </Environment>


                {/* <OrbitControls /> */}
                <ambientLight intensity={.9} />
                <directionalLight position={[ 0, 5, 2 ]} intensity={1} />

                <Cloud
                    opacity={0.2}
                    speed={0.4} // Rotation speed
                    width={50} // Width of the full cloud
                    depth={15} // Z-dir depth
                    segments={50} 
                />

                <Stars
                    radius={100} depth={5} count={5000} factor={4} saturation={0} fade speed={1} />


                <Suspense fallback={null}>
                    <Float
                        speed={2}
                        rotationIntensity={1}
                        floatIntensity={.5}
                        floatingRange={[-.5, .5]}
                    >
                    {
                        showDrone && 
                            <group scale={isMobile ? [ .5, .5, .5 ] : [ 1, 1, 1 ]}>
                                <X2Drone />
                            </group>
                    }
                    </Float>
                </Suspense>

                { 
                    showBlob && 
                        <group  scale={isMobile ? [ .3, .3, .3 ] : [ 1, 1, 1 ]}>
                            <Ball />
                        </group>
                }

                {
                    Array.from({ length: 100 }).map((_, i)=> {

                        return (
                            <Ring
                                key={i}
                                startingZPosition={-5 * (i + 1)}
                                index={i+1} 
                            />
                        )
                    })
                }


                <Float
                    speed={.5} // Animation speed, defaults to 1
                    rotationIntensity={.3} // XYZ rotation intensity, defaults to 1
                    floatIntensity={.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    floatingRange={[1, 1.5]}
                >
                    {
                        showText &&
                            <group>
                                <group position={isMobile ?  [ 0, -4, -2 ] : [ -50, -2, -50 ]}>
                                <Text
                                    font="/assets/fonts/Nasalization_Rg_Regular.json"
                                    fontSize={isMobile ? .5 : 4}
                                    outlineColor={"black"}
                                    outlineWidth={.02}
                                    color={'rgba(255,255,255,0.1)'}
                                >
                                    Sector XXXXII.
                                    <meshBasicMaterial
                                        color="rgba(255,255,255,0.1)"
                                        transparent
                                        opacity={.8}
                                    />
                                </Text>
                            </group>
                            <group position={isMobile ?  [ 0, -4.7, -2 ] :[ 45, -2, -50 ]}>
                                <Text
                                    font="/assets/fonts/Nasalization_Rg_Regular.json"
                                    fontSize={isMobile ? .4 : 4}
                                >
                                    Is Here.
                                    <meshBasicMaterial color="#28143D" />
                                </Text>
                            </group>
                        </group>
                    }
                </Float>

                    
                <ModelsLoader />
            </Canvas>

            <motion.div
                className='floating_content'
                variants={containerVariants}
                initial="initial"
                animate="animate"
            >

                <motion.h4
                    className=''
                    variants={itemVariants}
                >
                    OOps,
                </motion.h4>
                <VSpacerComponent space={-.5} />

                <motion.p
                    className='title_4 floating_content__title'
                    variants={itemVariants}
                >
                    This is CLASSIFIED.
                </motion.p>
                <VSpacerComponent space={-.5} />
                
                <motion.p
                    className='floating_content__instruction'
                    variants={itemVariants}
                >
                    <motion.small>
                        But wtf, It's in the year 2043 and humanity kinda fucked up so now sector 42 is here.
                    </motion.small>
                </motion.p>


            </motion.div>

        </div>
    )
}


const ModelsLoader = ()=> {
    const { progress } = useProgress()

    console.log("progress ", progress)

    if( progress == 100 ) {
        return (
            <></>
        )
    }
    return (
        <group>
            <Html
                center
                className='canvas_loader'
            >
                <h1>
                    {progress} %
                </h1>
                <p>
                    Loaded
                </p>
            </Html>
        </group>
    )
    return (
        <Html center>{progress} % loaded</Html>
    )
    return (
        <div></div>
    )
}


export default StarWarsOne

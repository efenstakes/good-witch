"use client"

import { AccumulativeShadows, Box, Environment, Float, Lightformer, OrbitControls, Plane, RandomizedLight, Shadow, Stage, Text, Text3D, useHelper } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { MutableRefObject, Ref, useRef, useState } from 'react'
import * as THREE from 'three'
import { useWindowWidth } from '@react-hook/window-size'
import { motion } from 'framer-motion'


// components
import TruckModel from '../components/truck/component'
import ConfiguratorComponent from '../components/configurator/component'
import ColorPickerComponent from '../components/color_picker/component'
import VSpacerComponent from '../components/v_spacer/component'
import AppbarComponent from '../components/appbar/component'
import CanvasLoader from '../components/canvas_loader/component'


// models
import { IConfiguratorOption } from '../models/configuration'

// variants
import { itemVariants, containerVariants } from '../styles/variants'

// styles
import './page.scss'


const Chasis = "Chasis"
const FrontBackBumper = "Front & Back Bumpers"
const TireRim = "Tire & Rim Color"
const Roof = "Roof"
const TruckPage = () => {
    const width = useWindowWidth()
    const isMobile = width < 768
    const [rotation, setRotation] = useState(new THREE.Vector3( Math.PI, -Math.PI / 2, Math.PI ))

    const [ configOptions, setConfigOptions ] = useState<Array<IConfiguratorOption>>(
        [
            {
                title: Chasis,
                colors: [ '#1e1e1e', '#A58962', 'white', '#E9D69E', '#87898C', '#A4A5A6', '#BA3B2E' ],
                selectedColor: '#E9D69E'
            },
            {
                title: FrontBackBumper,
                colors: [ '#1e1e1e', '#A58962', 'white', '#E9D69E', '#87898C', '#A4A5A6', '#BA3B2E' ],
                selectedColor: 'white'
            },
            {
                title: TireRim,
                colors: [ '#1e1e1e', '#A58962', '#E9D69E', '#87898C', '#A4A5A6', '#BA3B2E' ],
                selectedColor: '#1e1e1e'
            },
            {
                title: Roof,
                colors: [ '#1e1e1e', '#A58962', 'white', '#E9D69E', '#87898C', '#A4A5A6', '#BA3B2E' ],
                selectedColor: 'white'
            },
        ]
    )


    const onSelectedColor = (title: string, color: string) => {
        switch (title) {
            case Chasis:
                // setRotation((r)=> {
                //     r.y = Math.PI / 2
                //     return r
                // })
                break;

            case Roof:
                // setRotation((r)=> {
                //     r.y = Math.PI / 2
                //     r.x = -Math.PI / 2
                //     return r
                // })
                break;
                
            case "Front & Back Bumpers":
                break;
                
            case "Tire & Rim Color":
                break;
        
        
            default:
                break;
        }
        setConfigOptions((state)=> {
            return state.map(opt=> {
                if( opt.title === title ) {
                    opt.selectedColor = color
                }
                return opt
            })
        })
    }

    const getFrontBumperColor = ()=> {
        return configOptions.find(c=> c.title === FrontBackBumper)!.selectedColor
    }

    // const getBackWindowColor = ()=> {
    //     return configOptions.find(c=> c.title === BackWindowColor)!.selectedColor
    // }

    const getRoofBorderColor = ()=> {
        return configOptions.find(c=> c.title === Roof)!.selectedColor
    }

    const getTiresRimsColor = ()=> {
        return configOptions.find(c=> c.title === TireRim)!.selectedColor
    }

    const getChasisColor = ()=> {
        return configOptions.find(c=> c.title === Chasis)!.selectedColor
    }


    return (
        <div className='page'>

            {/* appbar */}
            <AppbarComponent />


            <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }} style={{ width: '100vw', height: '100vh' }}>
                <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
                <ambientLight />
                <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.9} scale={10}>
                    <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
                </AccumulativeShadows>
                {/** PerfMon will detect performance issues */}
                {/* Renders contents "live" into a HDRI environment (scene.environment). */}
                <Environment resolution={256} background blur={1}>
                    <Lightformers />
                </Environment>
                <CameraRig />

                
                <OrbitControls autoRotate />

                <group position={[ 0, -1.2, -2 ]}>
                    <TruckModel
                        frontBackBumpersColor={getFrontBumperColor()}
                        backwindowColor={getFrontBumperColor()}
                        roofBorderColor={getRoofBorderColor()}
                        tiresColor={getTiresRimsColor()}
                        chasisColor={getChasisColor()}
                        rotation={rotation}
                    />
                    <OrbitControls />
                </group>

                
                <group position={[ 0, 1, -9 ]}>
                    <Text
                        font="/fonts/Rubik_Light_Regular.json"
                        scale={3.8}
                        position={[ -2, 0, -4 ]}
                    >
                        Truck
                        <meshBasicMaterial color="pink" />
                    </Text>
                </group>

                <CanvasLoader />
            </Canvas>

            {/* <ConfiguratorComponent>
                {
                    configOptions.map((config, i)=> {

                        return (
                            <ColorPickerComponent
                                key={i}
                                options={config}
                                onSelectedColor={ onSelectedColor }
                            />
                        )
                    })
                }
            </ConfiguratorComponent> */}

            <motion.div
                className='truck_content'
                variants={containerVariants}
                initial="initial"
                animate="animate"
            >

                <motion.h4
                    className=''
                    variants={itemVariants}
                >
                    You are now,
                </motion.h4>
                <VSpacerComponent space={-.5} />

                <motion.p
                    className='title_4 truck_content__name'
                    variants={itemVariants}
                >
                    Martian,
                </motion.p>
                <VSpacerComponent space={-.5} />
                
                <motion.p
                    className='truck_content__instruction'
                    variants={itemVariants}
                >
                    <motion.small>
                        You won a <strong>Cyber Bike</strong>. Customize it to your liking and prepare for delivery.
                    </motion.small>
                </motion.p>

                <ConfiguratorComponent>
                    {
                        configOptions.map((config, i)=> {

                            return (
                                <ColorPickerComponent
                                    key={i}
                                    options={config}
                                    onSelectedColor={ onSelectedColor }
                                />
                            )
                        })
                    }
                </ConfiguratorComponent>

            </motion.div>
        </div>
    )
}

const Lights = ()=> {
    const light = useRef<any>(null)
    useHelper(light, THREE.SpotLightHelper, 'cyan')

    return (
        <group>
            <ambientLight />
            <spotLight ref={light} color={'red'} intensity={1} position={[5, 10, 4]} castShadow/>
            <spotLight color={'white'} castShadow position={[ -1, 3, -4 ]} />
        </group>
    )
}
function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.position.lerp(v.set(Math.sin(t / 5), 0, 12 + Math.cos(t / 5) / 2), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}
function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef<any>(null)
  useFrame((state, delta) => (group.current!.position!.z += delta * 10) > 20 && (group.current.position.z = -60))
  return (
    <>
      {/* Ceiling */}
      <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer key={i} form="circle" intensity={2} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
          ))}
        </group>
      </group>
      {/* Sides */}
      <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
      <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
      <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
      {/* Accent (red) */}
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer form="ring" color="red" intensity={1} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
      </Float>
      {/* Background */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
      </mesh>
    </>
  )
}


export default TruckPage

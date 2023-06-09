"use client"
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { motion } from 'framer-motion'


// components
import GuitarModel from '../components/guitar/component'
import ConfiguratorComponent from '../components/configurator/component'
import ColorPickerComponent from '../components/color_picker/component'
import { IConfiguratorOption } from '../models/configuration'
import VSpacerComponent from '../components/v_spacer/component'
import AppbarComponent from '../components/appbar/component'
import CanvasLoader from '../components/canvas_loader/component'


// styles
import './page.scss'

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

const HumbuckerSelectorPickup = "Humbucker & Selector Pickups"
const VolumeToneControls = "Volume & Tone Controls"
const NeckColor = "Neck"
const BodyColor = "Body"
export default function HomePage() {

    const [ configOptions, setConfigOptions ] = useState<Array<IConfiguratorOption>>(
        [
            {
                title: BodyColor,
                colors: [ '#1e1e1e', '#A58962', 'white', '#E9D69E', '#87898C', '#A4A5A6', '#BA3B2E' ],
                selectedColor: null,
            },
            {
                title: NeckColor,
                colors: [ '#1e1e1e', '#502000',  ],
                selectedColor: null,
            },
            {
                title: VolumeToneControls,
                colors: [ '#1e1e1e', '#A58962', '#E9D69E', '#BA3B2E' ],
                selectedColor: null,
            },
            {
                title: HumbuckerSelectorPickup,
                colors: [ '#1e1e1e', '#A58962', 'white', '#E9D69E', '#87898C', '#A4A5A6', '#BA3B2E' ],
                selectedColor: null,
            },
        ]
    )


    const onSelectedColor = (title: string, color: string) => {
        setConfigOptions((state)=> {
            return state.map(opt=> {
                if( opt.title === title ) {
                    opt.selectedColor = color
                }
                return opt
            })
        })
    }

    const getNeckColor = ()=> {
        return configOptions.find(c=> c.title === NeckColor)!.selectedColor
    }

    const getBodyColor = ()=> {
        return configOptions.find(c=> c.title === BodyColor)!.selectedColor
    }

    const getVolumeToneControls = ()=> {
        return configOptions.find(c=> c.title === VolumeToneControls)!.selectedColor
    }

    const getHumbuckerSelectorPickup = ()=> {
        return configOptions.find(c=> c.title === HumbuckerSelectorPickup)!.selectedColor
    }
    
    return (
        <div>

            {/* appbar */}
            <AppbarComponent />


            <Canvas shadows style={{ width: '100vw', height: '100vh' }}>
                <ambientLight />
                <GuitarModel
                    neck={getNeckColor()}
                    body={getBodyColor()}
                    volumeToneControls={getVolumeToneControls()}
                    humbuckerSelectorPickup={getHumbuckerSelectorPickup()}
                />
                
                <spotLight args={[ 'green' ]} />

                <Text
                    font="/assets/fonts/Hyperion_Bold_Bold.json"
                    scale={3.8}
                    position={[ 0, 0, -12 ]}
                    fontSize={1.2}
                >
                    The Martians.
                    <meshStandardMaterial
                        color="whitesmoke"
                        transparent
                        opacity={.6}
                    />
                </Text>

                <OrbitControls />

                <color args={[ 'lightblue' ]} attach='background' />

                <CanvasLoader />
            </Canvas>

        
            <motion.div
                className='guitar_content'
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
                    className='title_4 guitar_content__name'
                    variants={itemVariants}
                >
                    Dave
                </motion.p>
                <VSpacerComponent space={-.5} />
                
                <motion.p
                    className='guitar_content__instruction'
                    variants={itemVariants}
                >
                    <motion.small>
                        You are a music manager for The Martian Band. Customize their guitar for their new world tour.
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

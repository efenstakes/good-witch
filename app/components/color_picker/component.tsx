

import React from 'react'
import clsx from 'clsx'

import { IConfiguratorOption } from '@/app/models/configuration'


import './component.scss'
import { motion } from 'framer-motion'



const containerVariants = {
    initial: {
        opacity: 0,
        y: 150
    },
    animate: {
        opacity: 1,
        y: 0,

        transition: {
            staggerChildren: 0.01,
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



type ColorPickerComponentProps = {
    options: IConfiguratorOption
    onSelectedColor: (arg0: string, arg1: string)=> void
}
const ColorPickerComponent = ({ options: { title, colors, selectedColor }, onSelectedColor }: ColorPickerComponentProps) => {
    return (
        <motion.div
            className='color_section'
            variants={containerVariants}
            initial={"initial"}
            animate="animate"
        >

            <motion.p
                className='color_section__title'
                variants={itemVariants}
            >
                <strong>
                    {title}
                </strong>
            </motion.p>

            <motion.div
                className="color_section__color_container"
                variants={containerVariants}
                initial={"initial"}
                animate="animate"
            >
                {
                    colors.map((color)=> {

                        return (
                            <motion.div
                                key={color}
                                onClick={()=> onSelectedColor(title, color)}
                                className={
                                    clsx(
                                        [ 'color_section__color' ],
                                        {
                                            'color_section__color_selected': selectedColor === color,
                                        }
                                    )
                                }
                                variants={itemVariants}
                                style={{
                                    backgroundColor: color,
                                }}
                            />
                        )
                    })
                }
            </motion.div>
            
        </motion.div>
    )
}

export default ColorPickerComponent

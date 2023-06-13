"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { GrLinkedinOption, GrGithub } from 'react-icons/gr'

import { containerVariants, itemVariants } from '../../styles/variants'

import './component.scss'


const AppbarComponent = () => {
    return (
        <motion.div
            className='sappbar'
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            
            <motion.div variants={itemVariants}>
                <Link
                    className="appbar__icon_container"
                    href="https://www.linkedin.com/in/felix-ndunda-0ba841108/"
                    target='_blank'
                >
                    <GrLinkedinOption className='appbar__icon' />
                </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
                <Link
                    className="appbar__icon_container"
                    href="https://github.com/efenstakes"
                    target='_blank'
                >
                    <GrGithub className='appbar__icon' />
                </Link>
            </motion.div>
            
        </motion.div>
    )
}

export default AppbarComponent

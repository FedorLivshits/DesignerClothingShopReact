import React from 'react';
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'

const FadeInWhenVisible: React.FC<React.ReactNode> = ({children}) => {
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        } else {
            // @ts-ignore
            controls.stop('visible')
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{duration: .4}}
            variants={{
                visible: {x: 0, opacity: 1},
                hidden: {x: -200, opacity: 0}
            }}
        >
            {children}
        </motion.div>
    )
}
export default FadeInWhenVisible
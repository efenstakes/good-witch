

export const containerVariants = {
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


export const itemVariants = {
    initial: {
        opacity: 0,
        y: 150
    },
    animate: {
        opacity: 1,
        y: 0,
    },
}

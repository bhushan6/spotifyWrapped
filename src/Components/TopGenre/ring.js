import React from 'react'
import {motion} from "framer-motion"

function Ring({dia, genre, percent}) {

    const circum = dia*Math.PI;

    return (
        <motion.div className ="Ring">
            <motion.svg
                className="progress-ring"
                width={dia}
                height={dia}
            >
                    <motion.circle
                        className="progress-ring__circle"
                        stroke="white"
                        strokeWidth="15"
                        fill="transparent"
                        initial={{strokeDashoffset:circum}}
                        animate={{
                            strokeDashoffset:circum-percent/100*circum,
                            transition:{delay:5, duration:0.7}
                        }}

                        exit={{
                            strokeDashoffset:circum,
                            transition:{duration:0.7}
                        }}
                        
                        
                        strokeDasharray={`${circum} ${circum}`}
                        // strokeDashoffset={circum-percent/100*circum}
                        r={dia/2-8}
                        cx={dia/2}
                        cy={dia/2}
                        style={{rotate:'-90deg', transformOrigin: "50% 50%"}}
                    />
            </motion.svg>
            <div className="genre-sticker">
                <motion.h1
                    initial={{y:"110%"}}
                    animate={{
                        y:'0%',
                        transition: {
                            duration:0.7, delay:4
                        }

                    }}
                    exit={{
                        y:'-110%',
                        transition: {
                            duration:0.7
                        }
                    }}
                >
                    {genre}
                </motion.h1>
            </div>
        </motion.div>
    )
}

export default Ring

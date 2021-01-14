import React, { useEffect, useState } from 'react'
import './Start.css'
import {motion} from 'framer-motion'
import { useSpring, animated} from 'react-spring'
import { Link } from 'react-router-dom'

function Start({spotify}) {
  
    const [name, setName] = useState(null)

    const main = {
        in : {opacity:0},
        anim: {
                opacity:1,
                transition:{
                    duration: 0.2,
                    staggerChildren: 1.5
                }
            },
        // out: {
        //     y: -500,
        //     transition: {
        //         duration:2         
        //     }
        // }
    }

    const textCont = {
        in : {y: 200},
        anim: {
            y:0,
            transition: {
                duration: 3,
                staggerChildren: 0.2,
                delayChildren:0.5
            }
        },
        out: {
            y: -500,
            transition: {
                duration:2         
            }
        }
    }

    const text = {
        in : {y:100},
        anim: {
            y: 0,
            transition: {
                duration:1,
            }
        }
    }

    const btn = {
        in: {opacity:0},
        anim: {
            opacity:1,
            transition:{
                duration:0.7,
                delay: 4.5
            }
        },
        out: {
            opacity:0,
            scale:0.5,
            transition: {
                duration:1
            }
        }
    }

    const calc = (x, y) => [((window.innerHeight / 2) - y )/50, (x - window.innerWidth / 2)/50, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 50 } }))

    async function getme() {
        const user = await spotify.getMe()
        setName(user.display_name)
    }

    useEffect(() => {
        getme()
    }, [])


    

    

    return (
        <motion.div
            className="Start"
            onMouseMove={({ clientX: x, clientY: y }) => {
                set({ xys: calc(x, y) })
            }}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
        >

            <div className="user">
                <motion.p 
                    className="user-name"
                    initial={{opacity:0, scale:0.6}}
                    animate={{opacity:1, scale:1}}
                    exit={{opacity:0, scale:0.6}}
                    transition={{duration:1}}
                >Hi {name}</motion.p>
            </div>

           <animated.div className="spring-cont" style={{ transform: props.xys.interpolate(trans) }}>
           <motion.div 
                className="main"
                
                variants={main}
                initial="in"
                animate="anim"
                exit="out"
            >
                <motion.div className="first-text-cont">
                    <motion.h1 
                        className="title" 
                        variants={textCont}   
                    >
                        <motion.div  variants={text}>A</motion.div>
                        <motion.div variants={text}> lot</motion.div>
                        <motion.div  variants={text}> happened</motion.div>
                        <motion.div variants={text}> on</motion.div >
                        <br/>
                        <motion.div variants={text} > Spotify</motion.div>
                        <motion.div variants={text} > in</motion.div>
                        <motion.div variants={text} > 2020</motion.div>  
                        <motion.div variants={text} >.</motion.div>  
                    </motion.h1>
                </motion.div>
                <motion.div  className="second-text-cont">
                    <motion.h2 className="text" 
                    variants={textCont}
                    >
                        <motion.div variants={text}>Here</motion.div>
                        <motion.div variants={text}> are</motion.div>
                        <motion.div variants={text}> few</motion.div>
                        <motion.div variants={text}> highlights</motion.div>
                        <motion.div variants={text}> from</motion.div>
                        <motion.div variants={text}> year</motion.div>
                        <br/>
                        <motion.div variants={text}> to</motion.div>
                        <motion.div variants={text}> remember</motion.div>
                        <motion.div variants={text}> (or,</motion.div> 
                        <motion.div variants={text}> you</motion.div>   
                        <motion.div variants={text}> know,</motion.div>
                        <motion.div variants={text}> forget)</motion.div>  
                     </motion.h2>
                </motion.div>
                <motion.div variants={btn}>
                <Link to="/top_artist">
                    <button
                        className="start-btn"
                    >
                        Start
                    </button>
                </Link>
                </motion.div>
            </motion.div>
           </animated.div>
        </motion.div>
    )
}

export default Start

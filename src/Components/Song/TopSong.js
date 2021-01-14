import React, {useState, useEffect} from 'react'
import { motion} from 'framer-motion'
import './TopSong.css'
import {FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';

function TopSong({spotify}) {

    const [topSong, setTopSong] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [songCover, setSongCover] = useState(null)
    const [songPreview, setSongPreview] = useState(null)
    const [songs, setSongs] = useState(null)

    const calc = (x, y) => [((window.innerHeight / 2) - y )/50, (x - window.innerWidth / 2)/50, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 50 } }))

    const circleWrapper = {
        in: {
            scale: 0, 
            clipPath: "circle(500%)"
        },
        anim: {
            scale: [null, 1.2, 1],
            clipPath: "circle(0%)",
            transition : {
                delay:0.2,
                duration: 4,
                times:[0, 0.8, 1],
                // ease: [0.43, 0.13, 0.23, 0.1],
                staggerChildren: 0.2
            }
        }
    }

    const circle = {
        in: {rotate: 0, y:"-50%", x: "-50%"},
        anim: {
            // opacity: 0,
            rotate:[null, -15, 0],
            transition : {
                duration: 2,
                times:[0, 0.3, 1],
                // ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    const artistInfo = {
        in : {y:"110%"},
        anim: {
            y:"0%",
            transition:{
                duration:1,
                delay: 4.6
            }
        },
        out: {
            y:"-110%",
            transition:{
                duration:1,
            }
        }
    }


    async function getTopSong() {
        const resp = await spotify.getMyTopTracks()
        const song = resp.items[1]
        setSongs(resp.items)
        setTopSong(song.name)
        setSongCover(song.album.images[1].url)
        setSongPreview(song.preview_url)
        setLoaded(true)
    }



    useEffect(() => {
        getTopSong()
        
    }, [])


    return (
        <motion.div className="TopSong" exit={{opacity:1}} transition={{delay:2}}>
            <motion.div 
                className="initial-animate-screen" 
                variants={circleWrapper} 
                initial="in" 
                animate="anim"
                onAnimationComplete={() => document.querySelector(".initial-animate-screen").classList.add("display-none")}
                >
                <motion.div  className="circle" id="one" variants={circle} 
                // animate={{rotate:[0, -15, 0]}} transition={{duration:2,ease: [0.31, 0.78, 0.83, 0.67] }}
                >
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                </motion.div>
                <motion.div className="circle two" variants={circle} 
                // animate={{rotate:[0, -12, 0]}} transition={{duration:2,ease: [0.31, 0.78, 0.83, 0.67] }}
                >
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                </motion.div>
                <motion.div className="circle three"variants={circle} 
                // animate={{rotate:[0, -9, 0]}} transition={{duration:2,ease:[0.31, 0.78, 0.83, 0.67] }}
                >
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                </motion.div>
                <motion.div className="circle four" variants={circle} 
                // animate={{rotate:[0, -6, 0]}} transition={{duration:2,ease: [0.31, 0.78, 0.83, 0.67] }}
                >
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                </motion.div>
                <motion.div className="circle five" variants={circle} 
                // animate={{rotate:[0, -3, 0]}} transition={{duration:2,ease: [0.31, 0.78, 0.83, 0.67] }}
                >
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                    <h1>The Most Played Song</h1>
                </motion.div>
            </motion.div>

            <motion.div 
                className="top-song-cont"
                onMouseMove={({ clientX: x, clientY: y }) => {
                    set({ xys: calc(x, y) })
                }}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:4.3}}
            >

                <animated.div 
                    className="top-song-card"
                    style={{ transform: props.xys.interpolate(trans) }}
                >
                    <div className="top-song-img">
                        <motion.img 
                            src={loaded? songCover : null} 
                            alt={loaded? `${topSong}'s Cover image` : null}
                            variants={artistInfo} initial="in" animate="anim" exit="out"
                            />
                    </div>
                    <div className="text" style={{transform: "translateZ(0px)"}}>
                        <div >
                            <motion.h2 
                                variants={artistInfo} initial="in" animate="anim" exit="out"
                                >
                                    The Most Played<br/>Song :
                            </motion.h2>
                        </div>
                        <div >
                            <motion.h1 
                                className="song-name"
                                variants={artistInfo} initial="in" animate="anim" exit="out"
                                >
                                    {loaded? topSong : "loading"}
                            </motion.h1>
                        </div>
                        <div style={{transform: "translateZ(75px)"}}>
                            <motion.p
                                variants={artistInfo} initial="in" animate="anim" exit="out"
                                >
                                    Sometimes self love is listrning to the same song for 37 hours
                            </motion.p>
                        </div>
                    </div>
                </animated.div>

            </motion.div>

            <motion.div className="pagination" initial={{opacity:0}} animate={{ opacity:1}} transition={{duration:1}}>
                <div className="prev">
                    <Link to="/top_artist">
                        <FaChevronUp style={{color:"white"}}/>
                    </Link>
                </div>
                <div className="page-no">
                    <p><span>2</span> / 4</p>
                </div>
                <div className="next">
                    <Link to="/top_five_songs">
                        <FaChevronDown style={{color:"white"}}/>
                    </Link>
                </div>
            </motion.div>

            {loaded? (<audio id="audio" src={songPreview} autoPlay loop ></audio>) : null}
        </motion.div>
    )
}

export default TopSong

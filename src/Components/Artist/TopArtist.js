import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import { useSpring, animated} from 'react-spring'
import {FaChevronUp, FaChevronDown } from "react-icons/fa";
import './TopArtist.css'
import { Link } from 'react-router-dom';

function TopArtist({spotify}) {
    const [topArtist, setTopArtist] = useState(null)
    const [loading, setLoading] = useState(false)
    const [album, setAlbum] = useState([])
    const [letters, setLetters] = useState(0)
    const [audioUrl, setAudioUrl] = useState(null)

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
            y:0,
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

    async function getTopArtist () {
        const resp = await spotify.getMyTopArtists();
        const artists = resp.items;
        spotify.getArtistTopTracks(artists[0].id, "us").then(a => setAudioUrl(a.tracks[0].preview_url))
        let letter = 0;
        setTopArtist(artists[0])
        spotify.getArtistAlbums(artists[1].id).then(albumResp => {
            setAlbum(albumResp.items)
            albumResp.items.map(item => {
                letter+=item.name.length
            })
            setLetters(letter)
        })
        setLoading(true)
    }



    useEffect(() => {
        getTopArtist()
    },[])



    return (
        <motion.div className="TopArtist">
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
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                </motion.div>
                <motion.div className="circle two" variants={circle} 
                // animate={{rotate:[0, -12, 0]}} transition={{duration:2,ease: [0.31, 0.78, 0.83, 0.67] }}
                >
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                </motion.div>
                <motion.div className="circle three"variants={circle} 
                // animate={{rotate:[0, -9, 0]}} transition={{duration:2,ease:[0.31, 0.78, 0.83, 0.67] }}
                >
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                </motion.div>
                <motion.div className="circle four" variants={circle} 
                // animate={{rotate:[0, -6, 0]}} transition={{duration:2,ease: [0.31, 0.78, 0.83, 0.67] }}
                >
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                </motion.div>
                <motion.div className="circle five" variants={circle} 
                // animate={{rotate:[0, -3, 0]}} transition={{duration:2,ease: [0.31, 0.78, 0.83, 0.67] }}
                >
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                    <h1>THE MOST STREAMED ARTIST</h1>
                </motion.div>
            </motion.div>
            <motion.div 
                className="top-artist-cont"
                onMouseMove={({ clientX: x, clientY: y }) => {
                    set({ xys: calc(x, y) })
                }}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:4.3}}
                >
                <animated.div 
                    className="top-artist-card"
                    style={{ transform: props.xys.interpolate(trans) }}
                >
                    <div className="artist-img">
                        <motion.img variants={artistInfo} initial="in" animate="anim" exit="out" src={loading? topArtist.images[0].url : null} alt=""/>
                    </div>
                    <div className="text">
                        <div>
                            <motion.h2 variants={artistInfo} initial="in" animate="anim" exit="out">The most streamed<br/>artist of 2020:</motion.h2>
                        </div>
                        <div style={{transform:"translateZ(75px)"}}>
                            <motion.h1 
                                className="artist-name"
                                variants={artistInfo} initial="in" animate="anim" exit="out"
                            >
                                {loading? topArtist.name : "loading"}
                            </motion.h1>
                        </div>
                        <div>
                            <motion.p variants={artistInfo} initial="in" animate="anim" exit="out">Someone got the great taste</motion.p>
                        </div>
                    </div>
                </animated.div>
            </motion.div>
            <motion.div
             className="album-bg"
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                
                transition={{delay:4.5, duration:0.1}}>
                <motion.p exit={{opacity:0, transition: {duration:1.5}}}  style={{fontSize: `${110/(letters/40)}vw`}}>{album.map( a => `${a.name} `)}</motion.p>
            </motion.div>
            <motion.div className="pagination" initial={{opacity:0}} animate={{ opacity:1}} transition={{duration:1}}>
                <div className="prev">
                    <Link to="/">
                        <FaChevronUp style={{color:"white"}}/>
                    </Link>
                </div>
                <div className="page-no">
                    <p><span>1</span> / 4</p>
                </div>
                <div className="next">
                    <Link to="/top_song">
                        <FaChevronDown style={{color:"white"}}/>
                    </Link>
                </div>
            </motion.div>
            {loading? (<audio src={audioUrl} autoPlay loop/>) : null}
        </motion.div>
    )
}

export default TopArtist

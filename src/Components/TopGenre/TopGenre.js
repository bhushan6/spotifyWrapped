import React, { useEffect, useState } from 'react'
import './TopGenre.css'
import {motion} from 'framer-motion'
import Ring from './ring'
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'

function TopGenre({spotify}) {
    const [genre, setGenre] = useState([])
    const [allGenre, setAllGenre] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [letters, setLetters] = useState(0)


    const diaArray = [360, 300, 240, 180, 120]
    const percent = [60, 55, 50, 45, 40]

    const stagger = {
        in : {
            // height: "100%"
        },
        anim : {
            transition: {
                staggerChildren: 1,
            }
        }
    }

    const staggerTwo = {
        in : {
            opacity:1
        },
        anim: {
            height:"0%",
            transition: {
                duration: 0.7,
                delay:2.5
            }
        }
    }

    const slideUp = {
        in : {y: "150%"},
        anim : {
            y: "0%",
            transition: {
                duration: 1
            }
        }
    }

    async function getGenre(){
        const resp = await spotify.getMyTopArtists()
        const artists = resp.items
        const allGenres = []
        artists.map(item => { allGenres.push(...item.genres)})
        const letter = allGenre.map(a => a.length)
        setLetters(letter.reduce((a, b) => a+b, 0))
        setAllGenre(allGenres)
        const misxedGenres = artists.map(item => {return item.genres[0]})
        const topGenre = misxedGenres.filter(function(item, pos) {
            return misxedGenres.indexOf(item) == pos;
        })
        setGenre(topGenre)
        setLoaded(true)
    }

    useEffect(() => {
        getGenre()
    }, [])

    
    return (
        <motion.div className="TopGenre" >
            <motion.div 
                className="initial-animate"
                variants={stagger}
                initial="in"
                animate="anim"
                onAnimationComplete={() => {
                    document.querySelector(".initial-animate").classList.add("display-none")
                    document.querySelector('.h1').classList.add('slideUp')
                }}
                >
                <motion.div
                    className="textOne"
                    variants={staggerTwo}
                >
                    <motion.div variants={slideUp}>
                        You were genre-fluid.
                    </motion.div>
                </motion.div>
                <motion.div
                    className="textTwo"
                    variants={staggerTwo}
                >
                   <motion.div variants={slideUp}>
                        You refused to let one sound define you.
                   </motion.div>
                </motion.div>
            </motion.div>
             <div className="title">
                 <h1 className="h1">Your top genres were</h1>
             </div>
            <motion.div className="top-genre-chart-cont">
                {loaded? genre.slice(0, 5).map((item, index) => (
                    <Ring dia={diaArray[index]} genre={item} key={uuidv4()} percent={percent[index]}/>
                )) : null}
            </motion.div>
            <div className="genre-bg">
                <h1 style={loaded? {fontSize:`${100/(letters/35)}vw`} : {fontSize: "6.5vw"}}>{loaded? allGenre.map(item => {return `${item} `}) : null}</h1>
            </div>
            <motion.div className="pagination" initial={{opacity:0}} animate={{ opacity:1}} exit={{opacity:0}} transition={{duration:1}}>
                <div className="prev">
                    <Link to="/top_five_songs">
                        <FaChevronUp style={{color:"white"}}/>
                    </Link>
                </div>
                <div className="page-no">
                    <p><span>4</span> / 4</p>
                </div>
                <div className="next" style={{opacity:0, pointerEvents: "none"}}>
                    <Link to="/">
                        <FaChevronDown style={{color:"white"}}/>
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default TopGenre

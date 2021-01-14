import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import './TopFiveSongs.css'
import Song from './Song'
import {Link} from 'react-router-dom'
import {FaChevronUp, FaChevronDown} from 'react-icons/fa'

function TopFiveSongs({spotify}) {
    
    const [songs, setSongs] = useState(null)
    const [loaded, setLoaded] =useState(false)
    const [songPreview, setSongPreview] = useState(null)
    const [letters, setLetters] = useState(0)


    const main = {
        in: {opacity:1},
        anim: {
            opacity:1,
            transition: {
                staggerChildren: 5
            }
        }
    }

    const stagger = {
        in:{opacity:1},
        anim:{
            opacity:1,
            height:"0%",
            transition:{
                staggerChildren: 1.5,
                // when:"afterChildren",
                duration:0.6,
                delay:3.5
            }
        },
        out:{
            opacity:0,
            transition:{
                when:'afterChildren'
            }
        }
        
    }
    const staggerTwo = {
        in:{opacity:1},
        anim:{
            opacity:1,
            transition:{
                staggerChildren: 0.5
            }
        },
        
    }

    const slideIn = {
        in: {y:"210%"},
        anim:{
            y:"0%",
            transition:{
                duration:1,
            }
        }
    }

    const songCard = {
        in : {opacity:1},
        anim: {
            opacity:1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }


    async function getTopFiveSongs() {
        
        
            const resp = await spotify.getMyTopTracks({
                limit: 20,
                offset: 0
            })
            console.log(resp.items)
            setSongs(resp.items)
            const letter = resp.items.map(a => a.name.length)
            setLetters(letter.reduce((a, b) => a+b, 0))
            
            setSongPreview(resp.items[7].preview_url)
            setLoaded(true)
        
    }
   

    useEffect(() => {
        getTopFiveSongs()
    }, [])

    const getSong = (number) => {
        console.log("song", songs)
        return (
            <Song songName={songs[number].name} songImg={songs[number].album.images[1].url} songArtist= {songs[number].album.artists[0].name} />
        )
    }


    


    return (
        <motion.div className="TopFiveSongs" exit={{transition:{delay:5}}}>
            <motion.div className="initial-animate" 
                variants={stagger} 
                initial="in" 
                animate="anim"
                exit="out"
                onAnimationComplete={() => {
                    document.querySelector('.initial-animate').classList.add("display-none")
                    document.querySelector(".top-song-list").classList.remove("display-none")
                    document.querySelector(".text-bg").classList.remove("display-none")
                }}
                >
                    <motion.div variants={staggerTwo} className="DIV ONE">
                        <motion.div 
                            variants={slideIn }
                        >
                            But a year Like
                        </motion.div>
                        <motion.div 
                        variants={slideIn}
                        >
                            2020 required backup
                        </motion.div>
                    </motion.div>
                    <motion.div variants={staggerTwo} className="DIV`">
                        <motion.div 
                        variants={slideIn}
                        >
                            These were the other songs
                        </motion.div>
                        <motion.div 
                        variants={slideIn}
                        >
                            you had on repeat...
                        </motion.div>
                    </motion.div>
            </motion.div>
            <motion.div className="top-song-list display-none" variants={songCard}
             initial="in" animate="anim" 
             >
             <div>{loaded? getSong(1) : null}</div>
             <div >{loaded? getSong(2) : null}</div>
             <div >{loaded? getSong(3) : null}</div>
             <div >{loaded? getSong(4) : null}</div>
             <div >{loaded? getSong(5) : null}</div>
            </motion.div>
            <motion.div className="text-bg display-none" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3.6, duration:0.5}}>
                <p style={loaded? {fontSize:`${120/(letters/25)}vw`} : null}>{loaded? songs.map(a => {return a.name}) : "loading"}</p>
            </motion.div>

            <motion.div className="pagination" initial={{opacity:0}} animate={{ opacity:1}} transition={{duration:1}}>
                <div className="prev">
                    <Link to="/top_song">
                        <FaChevronUp style={{color:"white"}}/>
                    </Link>
                </div>
                <div className="page-no">
                    <p><span>3</span> / 4</p>
                </div>
                <div className="next">
                    <Link to="/top_genre">
                        <FaChevronDown style={{color:"white"}}/>
                    </Link>
                </div>
            </motion.div>
            {loaded? (<audio id="audio" src={songPreview} autoPlay loop ></audio>) : null}
           
        </motion.div>
    )
}

export default TopFiveSongs

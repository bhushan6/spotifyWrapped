import React, { useEffect } from 'react'
import "./Song.css"
import { usePalette } from 'react-palette'
import {motion} from 'framer-motion'

function Song({songName, songImg, songArtist}) {
    
const { data, loading, error } = usePalette(songImg)

    const popUp = {
        in: {y:"200%"},
        anim: {
            y:"0%",
            transition: {
                duration:1.2,
                delay:3.6
            },
        out: {
            y:"-200%",
            transition: {
                duration:1.2
            }
        }
        }
    }

    return (
            <motion.div className="Song" style={{backgroundColor:data.darkVibrant}} 
            variants={popUp} initial="in" animate="anim" exit="out" >
                <div className="song-img">
                    <img src={songImg} alt=""/>
                </div>
                <div className="song-info" style={{color:data.lightVibrant}}>
                    <h1 className="song-name">{songName}</h1>
                    <h2 className="song-artist">{songArtist}</h2>
                </div>
            </motion.div>
    )
}

export default Song

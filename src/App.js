import './App.css';
import { Switch, Route, useLocation } from "react-router-dom";
import React, {useState, useEffect} from 'react'
import Login from './LogIn/Login';
import {getTokenFromUrl} from './LogIn/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { AnimatePresence } from 'framer-motion';
import Start from './Components/Start/Start';
import TopArtist from './Components/Artist/TopArtist';
import TopSong from './Components/Song/TopSong';
import TopFiveSongs from './Components/TopFiveSongs/TopFiveSongs';
import TopGenre from './Components/TopGenre/TopGenre'

function App() {

  const location = useLocation()
  

  const spotify = new SpotifyWebApi()
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    
    const _token = hash.access_token
    if(_token){
      setToken(_token)

      spotify.setAccessToken(_token) 
      
    }

    
}, [])

  return (
    
      <>
        {token ? (
          <AnimatePresence exitBeforeEnter >
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={() => <Start spotify={spotify}/> }/>
              <Route  path="/top_artist" component={() => <TopArtist spotify={spotify}/>}/>
              <Route  path="/top_song" component={() => <TopSong spotify={spotify}/> }/>
              {/* <Route  path="/top_song" component={() => <TopSong spotify={spotify}/>}/> */}
              {/* <Route  path="/top_artist" component={ () => <TopArtist spotify={spotify}/>}/> */}
              <Route path="/top_five_songs" component={()=> <TopFiveSongs spotify={spotify} />}/>
              <Route path="/top_genre" component={()=> <TopGenre spotify={spotify} />}/>

            </Switch>
          </AnimatePresence>
        ) : <Login/>}
      </>
    
  );
}

export default App;

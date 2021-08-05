import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useDataLayerValue } from  './DataLayer';


const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();  
    window.location.hash = "";
    const _token = hash.access_token;
    
    if(_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })


      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        });
      })
//37i9dQZEVXcUZxSe9XwiOD
      spotify.getPlaylist('37i9dQZEVXcUZxSe9XwiOD').then(response => 
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        );
    }
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ):(
          <Login/>
        )
      }
      
    </div>
  );
}

export default App;

//23cce95c7ba5442684503cd079a11abf
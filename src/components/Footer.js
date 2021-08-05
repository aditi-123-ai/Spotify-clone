import React from 'react';
import '../css/Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://geo-media.beatport.com/image_size/500x500/0c556527-7b50-4711-b503-7c64ca61fd2c.jpg" alt=""/>
                <div className="footer__songInfo">
                    <h4>Yeah </h4>
                    <p>user</p>
                </div>
            </div>

            <div className="footer__center">
               <ShuffleIcon className="footer__green"/>
               <SkipPreviousIcon className="footer__icon"/>
               <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
               <SkipNextIcon className="footer__icon"/>
               <RepeatIcon className="footer__green"/>
            </div>
            <div className="footer__right">
                <Grid container spacing = {2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>    
                    </Grid>   
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer

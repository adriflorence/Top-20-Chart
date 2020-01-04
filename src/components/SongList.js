import React from 'react';
import Song from './Song.js';

const SongList = (props) => {
    const songNodes = props.songs.map(function(song, index) {
        return(
            <Song title={song['im:name'].label}
            place={index}/>
        );
    });

    return(
        <div>{songNodes}</div>
    )
}

export default SongList;
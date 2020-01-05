import React from 'react';
import Song from './Song.js';

const SongList = (props) => {
    const songNodes = props.songs.map(function(song, index) {
        return(
            <Song   title={song['im:name'].label}
                    key={index}
                    place={index}
                    artist={song['im:artist'].label}
                    image={song['im:image'][2].label}
                    genre={song.category.attributes.label}
                    link={song.link[0].attributes.href}/>
        );
    });

    return(
        <div>{songNodes}</div>
    )
}

export default SongList;
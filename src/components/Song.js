import React from 'react';

const Song = (props) => {
    function lowercase(text) {
        return text.toLowerCase();
    }

    return(
        <div className="song-box">
            <div className="place"> {props.place + 1} </div>
            <div className="image">
                <img src={props.image} alt="album cover"></img>
                <section className="play-button">
                    <a href={props.link}>
                        <section className="play-button-image"></section>
                    </a>
                </section>
            </div>
            <div className="info">
                <section>
                    <h2> {props.title} </h2>
                </section>
                <section className="artist"> {props.artist} </section>
                <section className="genre"> {lowercase(props.genre)} </section>
            </div>
        </div>
    )
}

export default Song;
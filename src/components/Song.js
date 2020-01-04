import React from 'react';

const Song = (props) => {
    return(
        <div>
            <section> {props.title} </section>
            <section> {props.place} </section>
            <section> singer </section>
        </div>
    )
}

export default Song;
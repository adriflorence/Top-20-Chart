import React, { Component } from 'react';
import SongList from '../components/SongList.js';

class ChartContainer extends Component {
        constructor(props){
            super(props);
            this.state = {
                songs: []
            }
        }

        render(){
            return(
                <React.Fragment>
                    <SongList/>
                </React.Fragment>
            )
        }
}

export default ChartContainer;
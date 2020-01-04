import React, { Component } from 'react';
import SongList from '../components/SongList.js';

class ChartContainer extends Component {
        constructor(props){
            super(props);
            this.state = {
                songs: []
            }
        }

        componentDidMount(){
            fetch('http://localhost:3001')
            .then(response => response.json())
            .then(songs => this.setState({songs}));
        }

        render(){
            return(
                <React.Fragment>
                    <SongList songs={this.state.songs}/>
                </React.Fragment>
            )
        }
}

export default ChartContainer;
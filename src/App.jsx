import React, { Component } from 'react';
import Skill from './components/Skill';

class App extends Component {
    state = {
        name: 'Hello World!',
    };
    render() {
        const { name } = this.state;
        return (
            <div className="resume">
                {name}
                <Skill
                    name="react"
                ></Skill>
                <svg ></svg>
            </div>
        )
    }
}

export default App;

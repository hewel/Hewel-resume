import React, { Component } from 'react';
import Skill from './components/Skill';
import './app.scss';

class App extends Component {
    state = {
        skillNames: ['html', 'css', 'javascript', 'react', 'vue', 'sass', 'pug', 'git', 'webpack', 'node', 'npm'],
    };
    // getLayoutEl = el => {
    //     this.layoutEl = el;
        
    // };
    demo(e) {
        console.log(e.deltaY)
    }
    getSkillCardEls = el => {
        this.skillCardEls = [];
        this.skillCardEls.push(el.cardEl);
        // console.log(el.cardEl)
    };
    componentDidMount() {
        // window.addEventListener('scroll', e => {
        //     console.log(e.target)
        // })
    }
    render() {
        const { skillNames } = this.state;
        return (
            <div className="resume layout" onWheel={this.demo}>
                <div className="box-layout container">
                    <div className="profile-box"></div>
                    <h2 className="skill-box-title">个人技能</h2>
                    <div className="skill-box">
                        {skillNames.map(name => 
                            <Skill name={name} key={name} ref={this.getSkillCardEls}></Skill>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

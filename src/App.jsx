import React, { Component } from 'react';
import NProgress from 'nprogress';
import Skill from './components/Skill';
import Social from './components/Social';
import Chapter from './components/Chapter';

import './app.scss';
import 'nprogress/nprogress.css';
import logo from './assets/image/TiBoard.png'
class App extends Component {
    state = {
        socialNames: ['mail', 'github', 'coding', 'uiCN', 'qq'],
        skillNames: ['html', 'css', 'javascript', 'react', 'vue', 'sass', 'pug', 'git', 'webpack', 'node', 'npm', 'photoshop', 'xd'],
        isSkillCardScrolled: false
    };
    getSkillScrolled = bool => {
        this.setState({ isSkillCardScrolled: bool });
    }
    componentWillMount = () => {
        NProgress.start();
    }
    componentDidMount = () => {
        NProgress.done();
    }
    render() {
        const { socialNames, skillNames, isSkillCardScrolled } = this.state;
        let delay = 0;
        return (
            <div className="resume" >
                <Chapter>
                    <div className="profile-box">
                        <div className="profile-logo">
                            <img src={logo} alt="Hewel" className="logo" />
                        </div>
                        <div className="social-box">
                            {socialNames.map(name => <Social name={name} key={name}></Social>)}
                        </div>
                    </div>
                </Chapter>
                <Chapter onScrolled={this.getSkillScrolled}>
                    <h2 className="skill-box-title">个人技能</h2>
                    <div className="skill-box container">
                        {isSkillCardScrolled && skillNames.map((name, index) =>
                            <Skill
                                name={name}
                                key={name}
                                delay={delay += 200}
                            ></Skill>
                        )}
                    </div>
                </Chapter>
                <Chapter>
                    <h2 className="introduction-title">个人介绍</h2>
                    <div className="introduction-box">
                        <p>我是一名刚从设计师转职而来的小前端，因为对前端对代码的热爱，自学前端知识。</p>
                        <p>虽然我没有丰富的经验，但我有对前端的强烈热爱之心，我好学习新知识，对前端的热度保持高涨不减。</p>
                    </div>
                </Chapter>
            </div>
        )
    }
}

export default App;

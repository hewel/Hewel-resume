import React, { Component } from 'react';
import Skill from './components/Skill';
import debounce from 'lodash/debounce';
import './app.scss';

class App extends Component {
    state = {
        skillNames: ['html', 'css', 'javascript', 'react', 'vue', 'sass', 'pug', 'git', 'webpack', 'node', 'npm'],
        isCardsScrolled: [],
        isCardBoxScrolled: false
    };
    skillCardOffsetTops = [];
    getLayoutOffsetHeight = el => {
        this.layoutOffsetHeight = el.offsetHeight;
    };
    getCardBoxOffsetTop = el => {
        this.cardBoxOffsetTop = el.offsetTop;
    };
    getScrollTop = e => {
        e.persist();
        let scrollTop = e.target.scrollTop + this.layoutOffsetHeight;
        this.setScrolled(scrollTop);
    };
    setScrolled = debounce( value => {
        let tArr = this.skillCardOffsetTops.map(offset => {
            if (value >= offset) {
                return true
            } else {
                return false
            }
        });
        this.setState({ isCardsScrolled: tArr });
        if (value > this.cardBoxOffsetTop) {
            this.setState({ isCardBoxScrolled: true });
        } else {
            this.setState({ isCardBoxScrolled: false });
        }
    }, 100);
    getSkillCardOffsetTop = el => {
        let offsetTop = el.cardEl.offsetTop + el.cardEl.offsetHeight;
        this.skillCardOffsetTops.push(offsetTop);
    };
    componentDidMount() {
        this.setState({block: true})
    }
    render() {
        const { skillNames, isCardsScrolled, isCardBoxScrolled } = this.state;
        const skillBoxClass = isCardBoxScrolled ? `skill-box scrolled` : `skill-box`;
        return (
            <div 
                className="resume layout" 
                onScroll={this.getScrollTop} 
                ref={this.getLayoutOffsetHeight}
            >
                <div className="box-layout container">
                    <div className="profile-box"></div>
                    <h2 className="skill-box-title">个人技能</h2>
                    <div className={skillBoxClass} ref={this.getCardBoxOffsetTop}>
                        {skillNames.map((name, index) =>
                            <Skill 
                                name={name} 
                                key={name}
                                ref={this.getSkillCardOffsetTop} 
                                isScrolled={isCardsScrolled[index]}
                            ></Skill>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

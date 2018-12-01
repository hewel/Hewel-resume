import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';
import upperfirst from 'lodash.upperfirst';
import getIcon from './icon';
import getSkill from './content';
import './index.scss';

class Skill extends Component {
    getLevel(level) {
        const gradeArr = ['登堂入室', '渐入佳境', '融会贯通', '登峰造极', '出神入化'];
        return gradeArr[level - 1] || '不值一提';
    }
    getClassName(level) {
        const colorClasses = ['grade-a', 'grade-b', 'grade-c', 'grade-d', 'grade-e'];
        return colorClasses[level - 1] || '';
    }
    getCardEl = el => {
        this.cardEl = el;
    };
    render() {
        const { name } = this.props;
        const title = upperfirst(name) || 'Empty';
        const skill = getSkill(name);
        const { detail, level } = skill;
        const grade = this.getLevel(level);
        const barClass = this.getClassName(level);
        const iconSrc = getIcon(name);
        
        return (
            <div className="skill-card" ref={this.getCardEl}>
                <ReactSVG
                    className={`skill-icon icon-${name}`} 
                    src={iconSrc}
                />
                <div className="skill-desc">
                    <span className="skill-title">{title}</span>
                    <p className="skill-detail">{detail}</p>
                    <span className="skill-exp">
                        <span className="exp-title">掌握程度:</span>
                        <span className={`exp-bar ${barClass}`}>
                            <span className="progress-rail">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="exp-grade">{grade}</span>
                        </span>
                    </span>
                </div>
            </div>
        )
    }
}

Skill.protoTypes = {
    name: PropTypes.string
};

export default Skill;

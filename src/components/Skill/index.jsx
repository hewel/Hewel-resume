import React, { Component } from 'react';
import PropTypes from 'prop-types';
import upperfirst from 'lodash.upperfirst';
import Icon from '../Icon';

class Skill extends Component {
    render() {
        const {name} = this.props;
        const title = upperfirst(name) || 'Empty';
        return (
            <div className="skill-card">
                <Icon className="skill-icon" iconName={name}></Icon>
                <span className="skill-title">{title}</span>
                <div className="skill-desc">
                    <p className="skill-detail"></p>
                    <span className="skill-exp">
                        <span className="exp-bar"></span>
                        <span className="exp-grade"></span>
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

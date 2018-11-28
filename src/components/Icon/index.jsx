import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import getIcon from './icon';
import './index.scss';
class Icon extends Component {
    render() {
        const { iconName } = this.props;
        const iconSrc = getIcon(iconName);
        return (
            <ReactSVG className={`icon icon-${iconName}`} src={iconSrc}></ReactSVG>
        );
    }
}
Icon.propTypes = {
    iconName: PropTypes.string
}

export default Icon;

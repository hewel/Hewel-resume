import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Social extends Component {
    render() {
        const {name} = this.props;
        const iconClass = `icon icon-${name}`;
        const iconLink = getLink(name);
        const target = name === 'mail' ? '' : '_blank';
        return (
            <a
                className="social"
                title={name}
                href={iconLink} 
                target={target} 
                rel="noopener noreferrer"
            >
                <i className={iconClass}></i>
            </a>
        )
    }
}
Social.protoTypes = {
    name: PropTypes.string
}

export default Social;
const socialLinks = {
    mail: `mailto:hewelzei@outlook.com`,
    github: `https://github.com/hewel`,
    coding: `https://dev.tencent.com/u/hewel`,
    uiCN: `https://i.ui.cn/ucenter/90299.html`,
    qq: `http://wpa.qq.com/msgrd?v=3&uin=1510224708&site=qq&menu=yes`
};
function getLink(name) {
    return socialLinks[name] || '#';
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';

import './index.scss';

class Chapter extends Component {
    state = {
        offsetTop: 0,
        scrollTop: 0
    }
    getOffsetTop = this.props.onScrolled ? el => {
        this.setState({ offsetTop: el.offsetTop - document.documentElement.clientHeight / 2 })
    } : null;
    getScrollTop = this.props.onScrolled ? throttle(() => {
        const scrollTop = document.documentElement.scrollTop;
        this.setState({ scrollTop });
        this.props.onScrolled(this.isScrolled);
    }, 100) : null;
    componentDidMount = () => {
        window.addEventListener('scroll', this.getScrollTop);
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        const { offsetTop, scrollTop } = nextState;
        if (scrollTop > offsetTop) {
            this.isScrolled = true;
        } else {
            this.isScrolled = false;
        }
        return true;
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.getScrollTop);
    }
    render() {
        return (
            <section className="layout" ref={this.getOffsetTop}>
                {this.props.children}
            </section>
        )
    }
}

export default Chapter;
Chapter.protoTypes = {
    onScrolled: PropTypes.func
}

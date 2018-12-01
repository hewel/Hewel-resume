const content = {
    html: {
        level: 4,
        detail: `熟知 HTML 的基本标签，了解 HTML5 等新特性，对 HTML 的语义化有一定的了解，能快速用 HTML 搭建网页基本架构。`,
    },
    css: {
        level: 4,
        detail: `熟记 CSS 的各种属性及功能，可以快速通过 DIV + CSS 对网页进行布局，能使用 CSS3 及 Animate.css、Vivify 等库制作各种动画特效。`
    },
    javascript: {
        level: 3,
        detail: `掌握 ES5 的标准语法，会用面向对象的思维编程，了解 ES6 等新特性， 会使用 Promise 进行异步编程，知道 Async 的基本用法。`
    },
    react: {
        level: 2,
        detail: `能使用 React 构建具有基本功能的网页，了解 React 基本的 api 及组件的生命周期，深入学习过组件的更新渲染，本站便是用 React 搭建而来。`
    },
    vue: {
        level: 2,
        detail: `能使用 Vue 构建具有基本功能的网页,细读过 Vue 官方文档，对 Vue 兴趣浓厚，用 Vue 构建过导航网站。`
    },
    sass: {
        level: 3,
        detail: `熟知 Sass 的基本语法，可以通过 Sass 快速编写网站样式表。`
    },
    pug: {
        level: 2,
        detail: `熟悉 Pug 的基本语法，能用 Pug 作为模版进行 HTML 的编译，也用 Pug 写过 Koa 的 View 层。`
    },
    git: {
        level: 3,
        detail: `熟悉 Git 的基本命令，能用 Git 快速地管理个人项目并进行版本控制。`
    },
    node: {
        level: 2,
        detail: `了解 NodeJs，对 Node 感兴趣，用 Node 写过网页爬虫，也尝试用 Koa 搭建过网站。`
    },
    npm: {
        level: 3,
        detail: `掌握基本的 Npm 命令，能熟练使用 Npm 对前端进行协作开发。`
    },
    webpack: {
        level: 2,
        detail: `了解 Webpack 的基本作用，在使用 Vue-cil、create-react-app 脚手架时接触过 Webpack，能进行简单的配置。`
    }
}
const empty = {
    level: 0,
    detail: ''
}

export default function getSkill(name) {
    return content[name] || empty;
}

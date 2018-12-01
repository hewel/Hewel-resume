import upperfirst from 'lodash.upperfirst';
import iconCss from '../../assets/icon/css.svg';
import iconGit from '../../assets/icon/git.svg';
import iconHtml from '../../assets/icon/HTML5.svg';
import iconJavascript from '../../assets/icon/javascript.svg';
import iconNode from '../../assets/icon/Nodejs.svg';
import iconNpm from '../../assets/icon/npm.svg';
import iconPug from '../../assets/icon/pug.svg';
import iconReact from '../../assets/icon/react.svg';
import iconSass from '../../assets/icon/sass.svg';
import iconVue from '../../assets/icon/vue.svg';
import iconWebpack from '../../assets/icon/Webpack.svg';

const iconObj = {
    iconCss,
    iconGit,
    iconHtml,
    iconJavascript,
    iconNode,
    iconNpm,
    iconPug,
    iconReact,
    iconSass,
    iconVue,
    iconWebpack
};
export default function getIcon(name = String()) {
    let iconName = `icon${upperfirst(name)}`;
    return iconObj[iconName];
}

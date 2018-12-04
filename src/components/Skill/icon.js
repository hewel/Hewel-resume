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
import iconPhotoshop from '../../assets/icon/Photoshop.svg';
import iconXd from '../../assets/icon/Xd.svg';

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
    iconWebpack,
    iconPhotoshop,
    iconXd
};
class Icon {
    constructor(props) {
        this.icons = props;
    }
    getIcon = (name = String()) => {
        let iconName = `icon${upperfirst(name)}`;
        return this.icons[iconName];
    }
}
export default new Icon(iconObj).getIcon;

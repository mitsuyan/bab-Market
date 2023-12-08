import headerText from '../Components/atoms/headerText.vue';
import headerTextSub from '../Components/atoms/headerTextSub.vue';
/* コンポーネントの設定 */
export default {
    title: 'Text',
    component: headerText,
};

/* story記述 */
export const headerTextLevel1 = () => ({
    components: { headerText },
    template: '<headerText level="level1" />'
});

export const headerTextLevel2 = () => ({
    components: { headerText },
    template: '<headerText level="level2" />'
});

export const headerTextLevel3 = () => ({
    components: { headerText },
    template: '<headerText level="level3" />'
});

export const headerTextLevel4 = () => ({
    components: { headerText },
    template: '<headerText level="level4" />'
});

export const headerTextLevel4Selected = () => ({
    components: { headerText },
    template: '<headerText level="level4Selected" />'
});

export const headerTextSubLevel1 = () => ({
    components: { headerTextSub },
    template: '<headerTextSub />',
});

export const headerTextSubLevel2Pink = () => ({
    components: { headerTextSub },
    template: '<headerTextSub level="level2Pink"/>',
});
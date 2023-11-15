import headerText from '../Components/headerText.vue';
import headerTextSub from '../Components/headerTextSub.vue';
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

export const headerTextLevel3Selected = () => ({
    components: { headerText },
    template: '<headerText level="level3Selected" />'
});

export const headerTextSubLevel1 = () => ({
    components: { headerTextSub },
    template: '<headerTextSub />',
});
import listText from '../Components/atoms/listText.vue';
/* コンポーネントの設定 */
export default {
    title: 'Text',
    component: listText,
};

/* story記述 */
export const listTextLevel1 = () => ({
    components: { listText },
    template: '<listText level="level1" />'
});

export const listTextLevel2 = () => ({
    components: { listText },
    template: '<listText level="level2" />'
});

export const listTextLevel3 = () => ({
    components: { listText },
    template: '<listText level="level3" />'
});

export const listTextLevel4 = () => ({
    components: { listText },
    template: '<listText level="level4" />'
});

export const listTextLevel4Bold = () => ({
    components: { listText },
    template: '<listText level="level4Bold" />'
});
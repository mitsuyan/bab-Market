import footerText from '../Components/atoms/footerText.vue';
/* コンポーネントの設定 */
export default {
    title: 'Text',
    component: footerText,
};

/* story記述 */
export const footerTextLevel1 = () => ({
    components: { footerText },
    template: '<footerText level="level1" />'
});

export const footerTextLevel1Selected = () => ({
    components: { footerText },
    template: '<footerText level="level1Selected" />'
});
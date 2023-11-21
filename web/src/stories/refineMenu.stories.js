import refineMenu from '../Components/moleclese/refineMenu.vue';
/* コンポーネントの設定 */
export default {
    title: 'refine',
    component: refineMenu,
};

/* story記述 */
export const refineMenues = () => ({
    components: { refineMenu },
    template: '<refineMenu />'
});

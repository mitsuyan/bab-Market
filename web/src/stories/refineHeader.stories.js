import refineHeader from '../Components/moleclese/refineHeader.vue';
/* コンポーネントの設定 */
export default {
    title: 'refine',
    component: refineHeader,
};

/* story記述 */
export const refineHead = () => ({
    components: { refineHeader },
    template: '<refineHeader />'
});

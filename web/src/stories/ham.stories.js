import ham from '../Components/ham.vue';
/* コンポーネントの設定 */
export default {
    title: 'Text',
    component: ham,
};

/* story記述 */
export const hamberger = () => ({
    components: { ham },
    template: '<ham />'
});

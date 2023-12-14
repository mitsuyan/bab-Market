import refines from '../Components/organisms/toggleRefines.vue';
/* コンポーネントの設定 */
export default {
    title: 'refine',
    component: refines,
};

/* story記述 */

export const refinese = () => ({
    components: { refines },
    template: '<refines />',
});
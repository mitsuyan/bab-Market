import refine from '../Components/moleclese/refineMain.vue';
/* コンポーネントの設定 */
export default {
    title: 'refine',
    component: refine,
};

/* story記述 */
export const minorRefine = () => ({
    components: { refine },
    template: '<refine />',
});

export const majorRefine = () => ({
    components: { refine },
    template: '<refine minorCategoryId=0 />',
});
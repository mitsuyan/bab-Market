import Img from '../Components/atoms/imgComp.vue';
/* コンポーネントの設定 */
export default {
    title: 'Img',
    component: Img,
};
/* story記述 */
export const ImgTag = () => ({
    components: { Img },
    template: '<Img />'
});
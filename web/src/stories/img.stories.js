import Img from '../Components/atoms/img.vue';
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


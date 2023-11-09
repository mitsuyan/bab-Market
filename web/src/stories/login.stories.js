import ButtonRedSemicircleIconLongShadow from '../components/ButtonRedSemicircleIconLongShadow.vue';
/* コンポーネントの設定 */
export default {
    title: 'ButtonVariation',
    component: ButtonRedSemicircleIconLongShadow,
};
/* story記述 */
export const LoginButton = () => ({
    components: { ButtonRedSemicircleIconLongShadow },
    template: '<ButtonRedSemicircleIconLongShadow />'
});


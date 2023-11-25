import refineHeader from '../Components/moleclese/refineHeader.vue';
import detailHeader from '../Component/header/detailHeader.vue';
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

export const detailheader = () => ({
    components: { detailHeader },
    template: '<detailHeader />'
});

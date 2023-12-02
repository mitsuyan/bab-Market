import refineHeader from '../Components/moleclese/refineHeader.vue';
import detailHeader from '../Component/header/detailHeader.vue';
import mypageHeader from '../Component/header/mypageHeader.vue';
/* コンポーネントの設定 */
export default {
    title: 'refine',
    component: refineHeader,
};

/* story記述 */
export const refineMajorHead = () => ({
    components: { refineHeader },
    template: '<refineHeader :receivedValue=1 />'
});

export const refineHead = () => ({
    components: { refineHeader },
    template: '<refineHeader :receivedValue=2 />'
});
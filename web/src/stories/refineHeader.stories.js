import refineHeader from '../Components/moleclese/refineHeader.vue';
import detailHeader from '../Components/moleclese/detailHeader.vue';
import mypageHeader from '../Components/moleclese/mypageHeader.vue';
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
import refineHeader from '../Components/moleclese/refineHeader.vue';
import detailHeader from '../Components/moleclese/detailHeader.vue';
import mypageHeader from '../Components/moleclese/mypageHeader.vue';
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

export const mypageheader = () => ({
    components: { mypageHeader },
    template: '<mypageHeader />'
});
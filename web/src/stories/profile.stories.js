import profileUpdate from '../Pages/profileUpdate.vue';
import profileUpdateHeader from '../Components/moleclese/profileUpdateHeader.vue';

/* コンポーネントの設定 */
export default {
    title: 'profile'
};

/* story記述 */
export const profileupdate = () => ({
    components: { profileUpdate },
    template: '<profileUpdate />'
});

export const profileupdateheader = () => ({
    components: { profileUpdateHeader },
    template: '<profileUpdateHeader />'
});
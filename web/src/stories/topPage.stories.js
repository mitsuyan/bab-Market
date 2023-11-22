import TopPages from '../Pages/TopPages.vue';
export default {
    title: 'Top'
};

export const topPages = () => ({
    components: { TopPages },
    template: '<TopPages />'
});
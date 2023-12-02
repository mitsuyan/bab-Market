import footerNavigation from '../Component/navigation/footerNavigation.vue';
import shohinDetailfooter from '../Component/footer/shohinDetailfooter.vue';
export default {
    title: 'navi'
}

export const footernavigation = () => ({
    components: { footerNavigation },
    template: '<footerNavigation />'
});

export const shohindetailfooter = () => ({
    components: { shohinDetailfooter },
    template: '<shohinDetailfooter />'
});
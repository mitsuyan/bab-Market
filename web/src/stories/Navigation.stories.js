import footerNavigation from '../Component/navigation/footerNavigation.vue';
import headerHome from '../Component/navigation/headerHome.vue';
import tabNavigation from '../Component/navigation/tabNavigation.vue';

export default {
    title: 'Navigation'
}

export const footernavigation = () => ({
    components: { footerNavigation },
    template: '<footerNavigation />'
});

export const hederhome = () => ({
    components: { headerHome },
    template: '<headerHome />'
});

export const tabnavigation = () => ({
    components: { tabNavigation },
    template: '<tabNavigation />'
});
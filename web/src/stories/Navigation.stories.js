import footerNavigation from '../Component/navigation/footerNavigation.vue';
import headerHome from '../Component/navigation/headerHome.vue';
import shohinList from '../Component/shohin/shohinList.vue';
import tabContent from '../Component/navigation/tabContent.vue';

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

export const shohinlist = () => ({
    components: { shohinList },
    template: '<shohinList />'
});

export const Tabcontent = () => ({
    components: { tabContent },
    template: '<tabContent />'
});
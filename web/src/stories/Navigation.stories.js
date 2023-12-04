import footerNavigation from '../Components/moleclese/footerNavigation.vue';
import headerHome from '../components/moleclese/headerHome.vue';
import shohinList from '../Components/moleclese/shohin/shohinList.vue';
import tabContent from '../Components/moleclese/tab/tabContent.vue';
import searchHeader from '../Components/moleclese/search/searchHeader.vue';
import historyText from '../Components/moleclese/search/historyText.vue';
import shohinDetailfooter from '../Components/moleclese/shohinDetailfooter.vue';


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

export const searchheader = () => ({
    components: { searchHeader },
    template: '<searchHeader />'
});

export const Historytext = () => ({
    components: { historyText },
    template: '<historyText />'
});

export const shohindetailfooter = () => ({
    components: { shohinDetailfooter },
    template: '<shohinDetailfooter />'
});
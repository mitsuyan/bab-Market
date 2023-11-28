import LoginHome from '../Pages/LoginHome.vue';
import CreateAcount from '../Pages/CreateAcount.vue';
import TopPages from '../Pages/TopPages.vue';
import shohinDetail from '../Pages/shohinDetail.vue';

export default {
    title: 'Main',
};

export const Loginhome = () => ({
    components: { LoginHome },
    template: '<LoginHome />',
});

export const Createacount = () => ({
    components: { CreateAcount },
    template: '<CreateAcount />',
});

export const topPages = () => ({
    components: { TopPages },
    template: '<TopPages />'
});

export const shohindetail = () => ({
    components: { shohinDetail },
    template: '<shohinDetail />',
});
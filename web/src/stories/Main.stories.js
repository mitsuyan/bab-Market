import LoginHome from '../Pages/LoginHome.vue';
import CreateAcount from '../Pages/CreateAcount.vue';
import TopPages from '../Pages/TopPages.vue';

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

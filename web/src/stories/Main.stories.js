import LoginHome from '../Pages/LoginHome.vue';
import CreateAcount from '../Pages/CreateAcount.vue';

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

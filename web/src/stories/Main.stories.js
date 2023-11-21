import LoginHome from '../LoginHome.vue';
import CreateAcount from '../CreateAcount.vue';

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

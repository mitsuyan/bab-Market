
import LoginHome from '../LoginHome.vue';

export default {
    title: 'LoginHome',
    component: LoginHome,
};

export const Loginhome = () => ({
    components: { LoginHome },
    template: '<LoginHome />',
});

// App.stories.js
import App from '../App.vue';

export default {
    title: 'App',
    component: App,
};

export const Default = () => ({
    components: { App },
    template: '<app />',
});

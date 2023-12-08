<template>
    <div class="footerNavigation">
        <div class="header">
            <headerHome />
        </div>
        <div class="headerTab">
            <tabNavigation @select="selectTab" />
        </div>
    </div>
</template>

<script>
import headerHome from './headerHome.vue';
import tabNavigation from './tab/tabNavigation.vue';

export default {
    components: {
        headerHome,
        tabNavigation
    },
    methods: {
        selectTab(tabId) {
            this.$emit('select', tabId);
        }
    }
};
</script>

<style scoped>
.headerTab{
    position: fixed;
    z-index:10000;
    top:60pt;
}
.header{
    position: fixed;
    z-index:10000;
}
</style>
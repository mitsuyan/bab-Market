<template>
<mainBase>
    <div class="header">
        <headerHome />
    </div>
    <shohinDisplay />
    <div class="footer">
        <footerNavigation />
    </div>
</mainBase>
</template>

<script>
import headerHome from '../Component/navigation/headerHome.vue';
import shohinDisplay from '../Component/shohin/shohinDisplay.vue';
import footerNavigation from '../Component/navigation/footerNavigation.vue';
import mainBase from '../Component/mainBase.vue';

export default {
    components: {
        headerHome,
        shohinDisplay,
        footerNavigation,
        mainBase
    }
}
</script>

<style>
.header{
    position: fixed;
    z-index:10000;
    top: 0;
}
.footer{
    position: fixed;
    z-index:10000;
    bottom: 0;
}
</style>
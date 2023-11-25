<template>
<mainBase :height="mainHeight">
    <div class="header">
        <headerHome />
    </div>
    <div class="headerTab">
        <tabNavigation />
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
import tabNavigation from '../Component/navigation/tabNavigation.vue';

export default {
    components: {
        headerHome,
        shohinDisplay,
        footerNavigation,
        mainBase,
        tabNavigation
    },
    data(){
        return{
            mainHeight:'1210pt'
        }
    }
}
</script>

<style>
.headerTab{
    position: fixed;
    z-index:10000;
    top:42pt;
}
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
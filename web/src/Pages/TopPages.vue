<template>
<mainBase>
    <headerHome />
    <shohinDisplay />
    <footerNavigation />
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

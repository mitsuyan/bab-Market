<template>
    <mainBase :height="mainHeight">
        
    </mainBase>
</template>
<script>
import mainBase from '../Components/mainBase.vue';

export default {
    components: {
        mainBase,
    },
    data(){
        return{
            mainHeight: window.innerHeight + 'px',
        }
    }
}
</script>
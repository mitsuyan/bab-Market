<template>
    <mainBase :height="mainHeight">
        <searchHeader />
    </mainBase>
</template>

<script>
import mainBase from '../Component/mainBase.vue';
import searchHeader from '../Component/search/searchHeader.vue';

export default {
    components: {
        mainBase,
        searchHeader
    },
    data(){
        return{
            mainHeight: '600pt',
        }
    }
}
</script>
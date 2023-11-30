<template>
    <mainBase :height="mainHeight">
        <searchHeader />
    <div class="historyComp">
        <historyText />
    </div>
    </mainBase>
</template>

<script>
import mainBase from '../Component/mainBase.vue';
import searchHeader from '../Component/search/searchHeader.vue';
import historyText from '../Component/search/historyText.vue';

export default {
    components: {
        mainBase,
        searchHeader,
        historyText
    },
    data(){
        return{
            mainHeight: '600pt',
        }
    }
}
</script>

<style scoped>
.historyComp{
    padding: 30px 0 0 17px;
}
</style>
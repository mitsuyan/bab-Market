<template>
    <mainBase :height="mainHeight">
        <searchHeader @updateSessionData="updateSession" />
    <div class="historyComp">
        <historyText />
    </div>
    <div v-for="(sessionItem, index) in sessionData" :key="index">
        {{ sessionItem }}
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
    mounted() {
        // セッションストレージからデータを取得
        this.loadSessionData();
    },
    data(){
        return{
            mainHeight: '600pt',
            sessionData: [],
            sessionItem: null,
        }
    },
    methods: {
        loadSessionData() {
            const storedData = sessionStorage.getItem('history');
            // storedData が存在する場合だけ JSON.parse を呼び出す
            if (storedData) {
                this.sessionData = JSON.parse(storedData);
            }
        },
        updateSession(value){
            this.sessionData.push(value);
        }
    }
}
</script>

<style scoped>
.historyComp{
    padding: 30px 0 0 17px;
}
</style>
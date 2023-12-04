<template>
    <mainBase :height="mainHeight">
        <searchHeader @updateSessionData="updateSession" />
    <div class="historyComp">
        <historyText />
    </div>
    <!-- 検索履歴を表示 -->
    <div v-if="screenDisplay">
        <div v-for="(sessionItem, index) in sessionData.slice().reverse()" :key="index" class="historyList">
            <div class="historyBase">
                <div class="historyText">
                    <formText :level="level5">{{ sessionItem }}</formText>
                </div>
                <div class="iconRight">></div>
            </div>
            <div class="underLine">
                <svg xmlns="http://www.w3.org/2000/svg" width="390" height="1" viewBox="0 0 390 1">
                <line id="線_40" data-name="線 40" x2="390" transform="translate(0 0.5)" fill="none" stroke="#c2c2c2" stroke-width="1"/>
                </svg>
            </div>
        </div>
    </div>
    <!-- 検索結果商品画面表示 -->
    </mainBase>
</template>

<script>
import mainBase from '../Component/mainBase.vue';
import searchHeader from '../Component/search/searchHeader.vue';
import historyText from '../Component/search/historyText.vue';
import formText from '../Components/atoms/formText.vue';

export default {
    components: {
        mainBase,
        searchHeader,
        historyText,
        formText
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
            level5: 'level5',
            screen: true
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
        },
    },
    computed:{
        screenDisplay(){
            return this.screen == true;
        }
    }
}
</script>

<style scoped>
.historyComp{
    padding: 30px 0 0 17px;
}
.historyList{
    padding: 0 0 0 17px;
}
.historyBase {
    padding: 5px 0 5px 112px;
    display: flex;
    gap: 40px;
}
.underLine {
    height: 5px;
    display: flex;
}
.historyText{
    width: 200px;
}
.iconRight{
    font-weight: 900;
    font-size: 18px;
    color: #545454;
}
</style>
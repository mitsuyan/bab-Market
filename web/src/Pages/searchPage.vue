<template>
    <div class="head">
        <searchHeader @updateSessionData="updateSession" @clickButtonAction="actionClick" />
    </div>
        <div class="shohin">
    <!-- 検索結果商品画面表示 -->
        <div v-if="screenDisplay">
            <div>
                <shohinDisplay :searchData="searchData" />
            </div>
        </div>
        <!-- 検索履歴を表示 -->
        <div v-else-if="serchHistory" class="history">
            <historyText />
            <div v-for="(sessionItem, index) in sessionData.slice().reverse()" :key="index" class="historyList">
                <div class="historyBase">
                    <div class="historyText">
                        <a href=""><formText :level="level5">{{ sessionItem }}</formText></a>
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
    </div>
</template>

<script>
import searchHeader from '../Components/moleclese/search/searchHeader.vue';
import historyText from '../Components/moleclese/search/historyText.vue';
import formText from '../Components/atoms/formText.vue';
import shohinDisplay from '../Components/moleclese/shohin/shohinDisplay.vue';

export default {
    components: {
        searchHeader,
        historyText,
        formText,
        shohinDisplay
    },
    mounted() {
        // セッションストレージからデータを取得
        this.loadSessionData();
    },
    data(){
        return{
            sessionData: [],
            sessionItem: null,
            level5: 'level5',
            searchValue: null,
            searchData: ''
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
            this.searchData = value;
            return this.searchValue = this.sessionData.slice(-1)[0];
        },
        actionClick(){
            this.searchValue = null;
        }
    },
    computed:{
        screenDisplay(){
            return this.searchValue != null;
        },
        serchHistory(){
            return this.searchValue == null;
        }
    }
}
</script>

<style scoped>
.head{
    position: fixed;
    z-index:10000;
    width:430px;
}
.shohin{
    position: fixed;
    z-index:10000;
    top:110pt;
    overflow-y: auto; /* コンテンツがはみ出た場合にスクロールバーを表示 */
    scrollbar-width: thin; /* Firefox 対応 */
    -webkit-scrollbar-width: thin; /* Chrome, Safari 対応 */
    scrollbar-color: transparent transparent; /* Firefox 対応 */
    -webkit-scrollbar: thin; /* Chrome, Safari 対応 */
    height: 643px;
}
.shohin::-webkit-scrollbar {
    width: 6px; /* スクロールバーの幅 */
}
.shohin::-webkit-scrollbar-thumb {
    background-color: transparent; /* スクロールバーの中央の色 */
}

.shohin::-webkit-scrollbar-track {
    background-color: transparent; /* スクロールバーのトラックの色 */
}
.historyComp{
    padding: 200px 0 0 17px;
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
.history{
    padding-left: 16px;
}
</style>
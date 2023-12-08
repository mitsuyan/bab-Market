<template>
    <div class="header">
        <headerHome />
    </div>
    <div class="homeTab">
        <div class="tabContainerContainer">
            <ul class="homeTabNav">
                <li @click="select('1', 'level4Selected')" :class="{ 'active': show === '1' }">
                    <headerText :level="level1" :headerText="headerText1" />
                </li>
                <li @click="select('2', 'level4Selected')" :class="{ 'active': show === '2' }">
                    <headerText :level="level2" :headerText="headerText2" />
                </li>
                <li @click="select('3', 'level4Selected')" :class="{ 'active': show === '3' }">
                    <headerText :level="level3" :headerText="headerText3" />
                </li>
            </ul>
        </div>
        <div class="productContainer">
            <div v-if="show === '1'" class="scrollableContent">
                <shohinDisplay :searchData="searchData" @pushAction="tapNavi"/>
            </div>
        </div>
        <div v-if="show === '2'">タブ2のコンテンツ</div>
        <div v-if="show === '3'">タブ3のコンテンツ</div>
    </div>
</template>

<script>
import headerHome from '../headerHome.vue';
import headerText from '../../atoms/headerText.vue';
import shohinDisplay from '../shohin/shohinDisplay.vue';
export default {
        components: {
            headerText,
            shohinDisplay,
            headerHome
        },
        data() {
            return {
                show: "1",
                headerText1: "おすすめ",
                headerText2: "マイリスト",
                headerText3: "おもちゃ",
                level1: 'level4',
                level2: 'level4',
                level3: 'level4',
                searchData: '商品'
            }
        },
        methods: {
            select: function (num, level) {
                this.show = num;
                if(this.show === "1"){
                    this.level1 = level;
                    this.level2 = 'level4';
                    this.level3 = 'level4';
                    this.level4 = 'level4';
                }else if(this.show === "2"){
                    this.level2 = level;
                    this.level1 = 'level4';
                    this.level3 = 'level4';
                    this.level4 = 'level4';
                }else if(this.show === "3"){
                    this.level3 = level;
                    this.level2 = 'level4';
                    this.level1 = 'level4';
                    this.level4 = 'level4';
                }
            },
            tapNavi(){
                this.$emit('tapTop')
            }
        }
    }
    </script>


<style scoped>
.homeTab {
    width: 323pt;
    background-color: #ffffff;
    overflow-x: hidden;
}

.tabContainerContainer {
    overflow-y: auto;
    max-height: 100vh;
}

.productContainer {
    overflow-y: auto;
    max-height: calc(100vh - 36pt);
    /* タブナビゲーションの高さを考慮 */
}

.productContainer {
    overflow-y: auto; /* コンテンツがはみ出た場合にスクロールバーを表示 */
    scrollbar-width: thin; /* Firefox 対応 */
    -webkit-scrollbar-width: thin; /* Chrome, Safari 対応 */
    scrollbar-color: transparent transparent; /* Firefox 対応 */
    -webkit-scrollbar: thin; /* Chrome, Safari 対応 */
    height: 680px;
}

/* コンテンツがはみ出た場合のスクロールバーのスタイル */
.productContainer::-webkit-scrollbar {
    width: 6px; /* スクロールバーの幅 */
}
.productContainer::-webkit-scrollbar-thumb {
    background-color: transparent; /* スクロールバーの中央の色 */
}

.productContainer::-webkit-scrollbar-track {
    background-color: transparent; /* スクロールバーのトラックの色 */
}
.homeTabNav {
    display: flex;
    align-items: center;
    list-style-type: none;
    box-shadow: 0 8pt 15pt #727C8E10;
    width: 323pt;
    height: 36pt;
    margin: 0;
    padding: 0;
}

.homeTabNav li {
    cursor: pointer;
    width: 50%;
    background: #ffffff;
    text-align: center;
}
</style>
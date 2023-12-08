<template>
    <mainBase :height="mainHeight" class="scrollable-container">
        <mypageHeader />
        <myAcount />
        <comentText />
        <shohinDisplay class="shohinList" :searchData="searchData" />
    </mainBase>
</template>

<script>
import mypageHeader from '../Components/moleclese/mypageHeader.vue';
import mainBase from '../Components/mainBase.vue';
import shohinDisplay from '../Components/moleclese/shohin/shohinDisplay.vue';
import myAcount from '../Components/moleclese/myAcount.vue';
import comentText from '../Components/moleclese/comentText.vue';

export default {
    name: 'my-page',
    components: {
        mypageHeader,
        mainBase,
        shohinDisplay,
        myAcount,
        comentText
    },
    data() {
        return {
            mainHeight: '600pt',
            searchData: '商品'
        };
    }
};
</script>

<style>
.shohinList{
    padding-top: 20pt;
}
.scrollable-container {
    overflow-y: auto; /* コンテンツがはみ出た場合にスクロールバーを表示 */
    scrollbar-width: thin; /* Firefox 対応 */
    -webkit-scrollbar-width: thin; /* Chrome, Safari 対応 */
    scrollbar-color: transparent transparent; /* Firefox 対応 */
    -webkit-scrollbar: thin; /* Chrome, Safari 対応 */
}

/* コンテンツがはみ出た場合のスクロールバーのスタイル */
.scrollable-container::-webkit-scrollbar {
    width: 6px; /* スクロールバーの幅 */
}

.scrollable-container::-webkit-scrollbar-thumb {
    background-color: transparent; /* スクロールバーの中央の色 */
}

.scrollable-container::-webkit-scrollbar-track {
    background-color: transparent; /* スクロールバーのトラックの色 */
}
</style>

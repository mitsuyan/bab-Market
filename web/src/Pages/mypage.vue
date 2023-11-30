<template>
    <mainBase :height="mainHeight" class="scrollable-container">
        <mypageHeader />
        <myAcount />
        <comentText />
        <shohinDisplay class="shohinList" />
    </mainBase>
</template>

<script>
import mypageHeader from '../Component/header/mypageHeader.vue';
import mainBase from '../Component/mainBase.vue';
import shohinDisplay from '../Component/shohin/shohinDisplay.vue';
import myAcount from '../Component/mypage/myAcount.vue';
import comentText from '../Component/mypage/comentText.vue';

export default {
    components: {
        mypageHeader,
        mainBase,
        shohinDisplay,
        myAcount,
        comentText
    },
    data() {
        return {
            mainHeight: '580pt',
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

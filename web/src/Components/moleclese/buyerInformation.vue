<template>
    <headerText headerText="購入者情報" level="level2Bold"></headerText>
    <div class="container">
        <div class="containerTitle">
            <menuText v-for="(item, index) in listTitles" :key="index" level="level3Gray" :label="item"></menuText>
        </div>
        <div class="containerInfo">
            <menuText v-for="(item, index) in informationList" :key="index" level="level3Gray" :label="item"></menuText>
        </div>
    </div>
</template>

<script>
import menuText from './../atoms/menuText.vue';
import Img from './../atoms/imgComp.vue';
import headerText from './../atoms/headerText.vue';

export default {
    components: {
        menuText,
        Img,
        headerText,
    },
    data() {
        return {
            listTitles: ["名前", "住所"]
        };
    },
    props: {
        informationList: {
            type: Array,
            default: () => (['黒野和樹', '福岡県福岡市東区箱崎社領2-23-12 ELGRAND箱崎 506号室']),
        }
    },
};
</script>

<style scoped>
.container {
    display: flex;
    width: 373px;
}

.containerTitle {
    display: flex;
    flex-direction: column;
    gap: 17px;
    width: 79px;
}

.containerInfo {
    display: flex;
    flex-direction: column;
    gap: 17px;
    width: 294px;
}
</style>
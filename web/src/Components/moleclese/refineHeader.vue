<template>
    <div class="container" v-if="receivedValue === 1">
        <Img fileName="back.svg" className="next"  />
        <headerText level="level2" :text="title"></headerText>
        <headerTextSub level="level2Pink" :text="'クリア'"></headerTextSub>
    </div>

    <div class="container" v-else-if="receivedValue === 2">
        <Img fileName="cross.svg" className="cross" :style="{textAlign: 'left'}" />
        <headerText level="level2" :text="title" :style="{textAlign: 'center'}"></headerText>
        <div></div>
    </div>

</template>

<script>
import headerText from '../atoms/headerText.vue';
import headerTextSub from '../atoms/headerTextSub.vue';
import Img from '../atoms/img.vue';

export default{
    components:{
        headerText,
        headerTextSub,
        Img,
    },
    data() {
        return{
            title:'ヘッダー',
        };
    },
    props:{
        receivedValue: {
            type: Number,
        },
    }
};
</script>


<style scoped>

.container {
    display: flex;
    justify-content: space-between; /* 要素を均等に配置 */
    align-items: center;
    margin-top: 13px;
    margin-bottom: 13px;
    border-bottom: 1px solid #c2c2c2;
    width:344px;
}

</style>



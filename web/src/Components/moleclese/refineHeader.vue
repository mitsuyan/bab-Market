<template>
    <div class="container">
        <img src="../../assets/back.svg" alt="a">
        <headerText level="level2" :text="title"></headerText>
        <headerTextSub level="level2Pink" :text="'クリア'"></headerTextSub>
    </div>
</template>

<script>
import headerText from '../atoms/headerText.vue';
import headerTextSub from '../atoms/headerTextSub.vue';
export default{
    components:{
        headerText,
        headerTextSub,
    },
    data() {
        return{
            title:'ヘッダー',
        };
    },
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
}

</style>



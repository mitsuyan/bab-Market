<template>
    <div class="container">
        <listText level="level2" text="すべて"></listText>
        <div>
            
            <listText level="level2"></listText>
        </div>
    </div>
</template>

<script>
import listText from '../atoms/listText.vue';
export default{
    components:{
        listText,
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



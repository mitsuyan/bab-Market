<template>
    <div class="container">
        <formText level="textFormLabelGrayBlack" text="すべて"></formText>
        <div>
            <formText level="textFormLabelGrayBlack"></formText>
        </div>
    </div>
</template>

<script>
import formText from '../atoms/formText.vue';
export default{
    components:{
        formText,
    },
    data() {
        return{
            title:'ヘッダー',
        };
    },
};
</script>


<style scoped>


</style>



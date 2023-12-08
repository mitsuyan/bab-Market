<template>

</template>

<script>
import Base from './../atoms/mainBase.vue';
import HeaderText from './../atoms/headerText.vue';
import Img from './../atoms/mainBase.vue';

export default{
components:{
    Base,
    HeaderText,
},
props: {

},
methods: {
handleMenuChange({ minorId, newCheckedState,majorId }) {
    //更新を親コンポーネントに通知する
    this.$emit('change3', { minorId, newCheckedState, majorId });
},
toggleChange({majorId,isOpen}) {
    // イベントを発火する
    this.$emit('isOpen3', { majorId, isOpen });
    console.log('aa');
},
},
};
</script>

<style scoped>

</style>



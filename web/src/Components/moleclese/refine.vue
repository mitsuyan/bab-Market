<template>
        <RefineMain
        :categoryId="categoryId"
        :items="items"
        @change="handleMenuChange"
        @isOpen="toggleChange"
        >
        </RefineMain>
</template>

<script>
import RefineMain from './refineMain.vue';
import TogleButton from './../atoms/togleButton.vue';

export default{
    components:{
        RefineMain,
        TogleButton,
    },
    props: {
        items: {
                majorCategory: [
                { id: 1, name: "月齢" },
                { id: 2, name: "体重" },
                { id: 3, name: "身長" },
                { id: 4, name: "カテゴリ" },
                { id: 5, name: "ブランド" },
                { id: 6, name: "商品の状態" },
                { id: 7, name: "色" },
                { id: 8, name: "配送料の負担" },
                { id: 9, name: "発送オプション" }
                ],
                minorCategory: [
                { majorId: 1, id: 1, name: "生後０カ月", checked: false },
                { majorId: 1, id: 2, name: "生後１カ月", checked: false },
                { majorId: 1, id: 3, name: "生後２カ月", checked: false },
                { majorId: 1, id: 4, name: "生後３カ月", checked: false }
                ],
        },
    },
    methods: {
    handleMenuChange({ minorId, newCheckedState,majorId }) {
        //更新を親コンポーネントに通知する
        this.$emit('change', { minorId, newCheckedState, majorId });
    },
    toggleChange({majorId,isOpen}) {
        // イベントを発火する
        this.$emit('isOpen', { majorId, isOpen });
        console.log("二重チェックrefine");
    },
  },
};
</script>

<style scoped>

</style>



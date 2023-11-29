<template>
    <Base>
        <Header :receivedValue=1></Header>
        <Menu :categoryId="categoryId" @change="handleMenuChange" :items="items"></Menu>
    </Base>
</template>

<script>
import Header from './refineHeader.vue';
import Menu from './refineMenu.vue';
import Base from '../atoms/mainBase.vue';
export default{
    components:{
        Header,
        Menu,
        Base,
    },
    data() {
        return{
            title:'ヘッダー',
        };
    },
    props: {
        categoryId:{
            type:Number,
            default:1,
        },
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
                ]
            },
    },
    methods: {
    handleMenuChange({ minorId, newCheckedState }) {
        console.log(`handleMenuChange called. Minor ID: ${minorId}, New State: ${newCheckedState}`);
      // minorId に対応する要素を探す
      const minorItem = this.items.minorCategory.find(item => item.id === minorId);
      // 要素が見つかれば checked を更新
      if (minorItem) {
        minorItem.checked = newCheckedState;
      }

      // 他に必要な処理があればここで行う

      // 更新を親コンポーネントに通知する（もしくは不要な場合はコメントアウト）
      this.$emit('update:items', this.items);
    },
  },
};
</script>

<style scoped>

</style>



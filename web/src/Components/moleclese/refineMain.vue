<template>
    <Base>
        <Header
        :receivedValue=1
        :title="majorCategoryName"
        :id="categoryId"
        :isOpen="isOpen"
        @isOpen1="toggleChange"
        ></Header>
        <Menu
        :items="items"
        :categoryId="categoryId"
        @isOpen="toggleChange"
        @change1="handleMenuChange"
        ></Menu>
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
    props: {
        categoryId:{
            type:Number,
            default:1,
        },
        items:{
            type:Object,
            default:() => ({majorCategory:
                [{id:1,name:"月齢",isOpen:false,value:null},
                {id:2,name:"体重",isOpen:false,value:null},
                {id:3,name:"身長",isOpen:false,value:null},
                {id:4,name:"カテゴリ",isOpen:false,value:null},
                {id:5,name:"ブランド",isOpen:false,value:null},
                {id:6,name:"商品の状態",isOpen:false,value:null},
                {id:7,name:"色",isOpen:false,value:null},
                {id:8,name:"配送料の負担",isOpen:false,value:null},
                {id:9,name:"発送オプション",isOpen:false,value:null}
            ],
            minorCategory:[
                {majorId:1,id:1,name:"生後０カ月",checked:false},
                {majorId:1,id:2,name:"生後１カ月",checked:false},
                {majorId:1,id:3,name:"生後２カ月",checked:false},
                {majorId:1,id:4,name:"生後３カ月",checked:false},
                {majorId:2,id:1,name:"10g",checked:false},
                {majorId:2,id:2,name:"20g",checked:false},
                {majorId:3,id:1,name:"100cm",checked:false},
                {majorId:3,id:2,name:"120cm",checked:false},
                {majorId:4,id:1,name:"あ",checked:false},
                {majorId:4,id:2,name:"い",checked:false},
                {majorId:5,id:1,name:"高級ブランド",checked:false},
                {majorId:5,id:2,name:"偽ブランド",checked:false},
                {majorId:6,id:1,name:"良い",checked:false},
                {majorId:6,id:2,name:"ダメ",checked:false},
                {majorId:7,id:1,name:"黒",checked:false},
                {majorId:7,id:2,name:"白",checked:false},
                {majorId:8,id:1,name:"配送社が負担",checked:false},
                {majorId:8,id:2,name:"購入者が負担",checked:false},
                {majorId:9,id:1,name:"やまと",checked:false},
                {majorId:9,id:2,name:"くろねこ",checked:false},
            ]}),
        },
        isOpen:{
            type:Boolean,
            default:false,
        }
    },
    computed: {
        majorCategoryName() {
            const majorCategory = this.items.majorCategory.find(item => item.id === this.categoryId);
            return majorCategory ? majorCategory.name : ' ';
        },
        majorCategoryId() {
            const majorCategory = this.items.majorCategory.find(item => item.id === this.categoryId);
            return majorCategory ? majorCategory.id : ' ';
        },
    },
    methods: {
        handleMenuChange({ minorId, newCheckedState,majorId }) {
            // 更新を親コンポーネントに通知する（もしくは不要な場合はコメントアウト）
            this.$emit('change2', { minorId, newCheckedState, majorId });
        },
        toggleChange({majorId,isOpen}) {
            // イベントを発火する
            this.$emit('isOpen2', { majorId, isOpen });
            console.log('isOpen');
        },
  },
};
</script>

<style scoped>

</style>



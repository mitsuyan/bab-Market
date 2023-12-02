<template>
    <div class="mainMenu">
        <Refine
            @isOpen3="toggleChange"
            :categoryId=0
            :items="items"
            :isOpen="isOpen"
        ></Refine>
    </div>
    <transition name="slide">
        <div class="menu">
            <Refine
                v-if="isOpen"
                :categoryId="categoryId"
                @change3="handleMenuChange"
                @isOpen3="toggleChange"
                :items="items"
                :isOpen="isOpen"
            ></Refine>
        </div>
    </transition>
</template>

<script>
import Refine from '../moleclese/refine.vue';

export default{
components:{
    Refine,
},
data() {
    return {
      items:{
                majorCategory:
                [{id:1,name:"月齢",isOpen:false,value:[]},
                {id:2,name:"体重",isOpen:false,value:[]},
                {id:3,name:"身長",isOpen:false,value:[]},
                {id:4,name:"カテゴリ",isOpen:false,value:[]},
                {id:5,name:"ブランド",isOpen:false,value:[]},
                {id:6,name:"商品の状態",isOpen:false,value:[]},
                {id:7,name:"色",isOpen:false,value:[]},
                {id:8,name:"配送料の負担",isOpen:false,value:[]},
                {id:9,name:"発送オプション",isOpen:false,value:[]}
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
            ]},
            categoryId:null,
            isOpen:false,
    };
  },
methods: {
    handleMenuChange({ minorId, newCheckedState,majorId }) {
    // minorId に対応する要素を探す
    const item = this.items.minorCategory.find(item => item.id === minorId && item.majorId === majorId);
        // 要素が見つかれば checked を更新
        if (item) {
            item.checked = newCheckedState;
            if(item.checked){
                this.items.majorCategory[majorId-1].value.push(minorId);
            }else{
                const indexToRemove = this.items.majorCategory[majorId-1].value.indexOf(item.id);
                if (indexToRemove !== -1) {
                    this.items.majorCategory[majorId-1].value.splice(indexToRemove, 1);
                }
            }
        }
    },
    toggleChange({ majorId, isOpen }) {
        const item = this.items.majorCategory.find((item) => item.id === majorId);
        if (item) {
            item.isOpen = isOpen;
            this.isOpen = isOpen;
            this.categoryId = majorId;
            console.log(this.isOpen);
        };
    },
},
};
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {

}
.slide-enter-to, .slide-leave-from {
  
}
.mainMenu{
    position: fixed;
    z-index:0;
    right: 0px;
}
.menu{
    position: fixed;
    right: 0px;
    z-index: 10;
}

</style>



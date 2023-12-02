<template>
    <div class="container" v-if="categoryId === 1 || categoryId === 2 || categoryId === 3 || categoryId === 4" @onClick="" >
        <menuText level="level1" label="すべて" />
        <div v-for="item,index in filteredItems" :key="index" :class="{ 'border-top': index === 0, 'border-bottom': index !== items.length - 1 }">
            <checkInput checkBoxLevel="checkBoxGray" class="containerLevel1" :majorId="item.majorId" :id="item.id" :checked="item.checked" @change="handleCheckboxChange">
                <formText level="textFormLabelGrayBlack"  :labelId="item.id">
                    {{ item.name }}
                </formText>
            </checkInput>
        </div>
    </div>

    <div class="container" v-else-if="categoryId === 5">
        <menuText level="level1" label="すべて" />
        <div v-for="item,index in filteredItems" :key="index" :class="{ 'border-top': index === 0, 'border-bottom': index !== items.length - 1, [menu]: true  }">
            <menuText level="level1" :label=item.name />
            <Img fileName="next.svg" clasName="next" />
        </div>
    </div>  

    <div class="container" v-else-if="categoryId === 0">
        <formText level="textFormLabelGrayLevel2">
            <menuText level="level2" label="除外キーワード" />
            <textForm text="を含まない"></textForm>
        </formText>
        <div v-for="item,index in items.majorCategory" :key="index" >
            <toggleButton :id="item.id" @isToggle="toggleChange">
                <div class="majorCategoryMenu" :id="item.id">
                    <menuText level="level1" :label=item.name />
                    <menuText level="level3False" label="指定しない" v-if="item.value.length === 0" />
                    <div class="minorCategoryItem" v-else>
                        <div v-for="minorCategory,index in item.value">
                            <menuText level="level3" :label="this.items.minorCategory.filter(item => item.id === minorCategory)[item.id-1].name " />
                        </div>
                    </div>
                    
                    <Img fileName="circleNext.svg" className="circleNext" />
                </div>
            </toggleButton>
        </div>
    </div>
</template>

<script>
import formText from '../atoms/formText.vue';
import menuText from '../atoms/menuText.vue';
import checkInput from '../atoms/checkInput.vue';
import Img from '../atoms/img.vue';
import textForm from '../atoms/RectangleNotIncludedRadius.vue';
import toggleButton from '../atoms/togleButton.vue';
export default{
    components:{
        formText,
        menuText,
        checkInput,
        Img,
        textForm,
        toggleButton,
    },
    data() {
        return{
            title:'ヘッダー',
            menu:"minorCategoryMenu",
        };
    },
    props: {
        items:{
            type:Object,
            default:() => ({majorCategory:
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
            ]}),
        },
        categoryId:{
            type:Number,
            default:1,
        },
    },
    methods: {
        handleCheckboxChange(minorId,newCheckedState,majorId) {
            // イベントを発火する
            this.$emit('change1', { minorId, newCheckedState,majorId });
        },
        toggleChange(majorId,isOpen) {
            // イベントを発火する
            this.$emit('isOpen', { majorId, isOpen });
        },
    },
    computed: {
    filteredItems() {
      return this.items.minorCategory.filter(item => item.majorId === this.categoryId);
    },
  },
};
</script>

<style scoped>
.itemList{
    height: 680px;
    overflow-y: auto;
}
.minorCategoryItem{
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.minorCategoryMenu{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 50px;
    width: 315px;
    gap: 173.5px;
}

.majorCategoryMenu{
    display: flex;
    align-items: center;
    justify-content: space-between; /* 要素を均等に配置 */
    min-height: 24px;
    width: 291px;
    margin-top: 35.7px;
}

.border-top {
    border-top: 1px solid #707070;
}

.border-bottom {
    border-bottom: 1px solid #707070;
}
</style>



<template>
    <Base base="yelloBase">
        <div class="tradingBaseContainer">
            <imgComp :fileName="tradingStatusImg" className="clock"></imgComp>   
            <div class="header">     
                <HeaderText level="level1" :headerText="tradingStatusHead"></HeaderText>
            </div>
        </div>
        <div class="headerSub">
            <HeaderTextSub level="level2" :text="tradingStatusHeadSub"></HeaderTextSub>
        </div>
    </Base>
</template>

<script>
import Base from './../atoms/mainBase.vue';
import HeaderText from './../atoms/headerText.vue';
import HeaderTextSub from './../atoms/headerTextSub.vue';
import imgComp from '../atoms/imgComp.vue';

export default{
components:{
    Base,
    HeaderText,
    imgComp,
    HeaderTextSub
},
data() {
        return{
            tradingStatuses:{
                buyer:
                    [
                    {id:1,img:"clock.svg",head:"発送をお待ちください。",headSub:"出品者からの発送通知をお待ちください。"},
                    {id:2,img:"niconico.svg",head:"商品を受け取りましょう。",headSub:"商品が発送されました。"},
                    {id:3,img:"niconico.svg",head:"評価しましょう。",headSub:"出品者と購入した商品の評価をしましょう。商品レビューは後からいつでも更新できます。"},
                    {id:4,img:"niconico.svg",head:"取引が完了しました。",headSub:"この度はもつべびのご利用ありがとうございました。"},
                ],
                seller:
                    [
                    {id:1,img:"clock.svg",head:"商品を発送してください。",headSub:"発送したら、発送通知をしてください。"},
                    {id:2,img:"clock.svg",head:"受け取り通知を待ちましょう。",headSub:"購入者様から受け取り通知が届きます。"},
                    {id:3,img:"niconico.svg",head:"評価しましょう。",headSub:"購入者を評価しましょう。"},
                    {id:4,img:"niconico.svg",head:"取引が完了しました。",headSub:"この度はもつべびのご利用ありがとうございました。"},
                ],
        },
        };
    },
props: {
    trader:{
        type:String,
        default:'seller',
        },
    tradeId:{
        type:Number,
        default:1,
    },
},
computed: {
    tradingStatusHead() {
    const tradingStatus = this.tradingStatuses[this.trader].find((item) => item.id === this.tradeId);
    return tradingStatus ? tradingStatus.head : ' ';
  },
  tradingStatusHeadSub() {
    const tradingStatus = this.tradingStatuses[this.trader].find((item) => item.id === this.tradeId);
    return tradingStatus ? tradingStatus.headSub : ' ';
  },
  tradingStatusImg() {
    const tradingStatus = this.tradingStatuses[this.trader].find((item) => item.id === this.tradeId);
    return tradingStatus ? tradingStatus.img : ' ';
  }
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
    .tradingBaseContainer{
        display: flex;
        align-items: center;
        padding-top: 25px;
        padding-left: 28.14px;
        gap:7.1px;
    }
    .header{
        margin-top: 3px;
    }
    .headerSub{
        padding-left: 60px;
        margin-top: 7px;
    }
</style>



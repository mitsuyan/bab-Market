<template>
    <div v-if="transactionStatusId === 262" class="tradingContainer">
        <tradingBase :tradeId="1"></tradingBase>
        <div>
            <div class="tradingInformation">
                <buttonRedLong :data="tradingButtonText"></buttonRedLong>
                <div class="tradingHeaderTextSub">
                    <headerTextSub level="level1Bold" text="出品者情報"></headerTextSub>
                </div>
                <profileLinkSmall :title="buyerInfo.name" ></profileLinkSmall>
            </div>
            <div class="tradingInformation">
                <div class="tradingHeadevscode-file://vscode-app/c:/Users/owner/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlrTextSub">
                        <headerTextSub level="level1Bold" text="購入情報"></headerTextSub>
                </div>
                <tradingInformation></tradingInformation>
            </div>
        </div>
    </div>

    <div v-else-if="transactionStatusId === 264" class="tradingContainer">
        <tradingBase :tradeId="2"></tradingBase>
        <div>
            <buttonRedLong></buttonRedLong>
            <div class="tradingInformation">
                <div class="tradingHeaderTextSub">
                    <headerTextSub level="level1Bold" text="出品者情報"></headerTextSub>
                </div>
                <profileLinkSmall :title="buyerInfo.name"></profileLinkSmall>
            </div>
            <div class="tradingInformation">
                <div class="tradingHeadevscode-file://vscode-app/c:/Users/owner/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlrTextSub">
                        <headerTextSub level="level1Bold" text="商品情報"></headerTextSub>
                </div>
                <profileLinkSmall></profileLinkSmall>
                <tradingInformation></tradingInformation>
            </div>
        </div>
    </div>

    <div v-else-if="transactionStatusId === 265" class="tradingContainer">
        <tradingBase :tradeId="3"></tradingBase>
        <div>
            <tradingReview></tradingReview>
            <headerTextSub level="level3" text="商品の評価コメントを更新しましょう！"></headerTextSub>
            <selectBox></selectBox>
            <tradingReviewInput></tradingReviewInput>
            <buttonRedLong :propText="propText"></buttonRedLong>
            <div class="tradingInformation">
                <div class="tradingHeaderTextSub">
                    <headerTextSub level="level1Bold" text="出品者情報"></headerTextSub>
                </div>
                <profileLinkSmall></profileLinkSmall>
            </div>
            <div class="tradingInformation">
                <div class="tradingHeadevscode-file://vscode-app/c:/Users/owner/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlrTextSub">
                        <headerTextSub level="level1Bold" text="商品情報"></headerTextSub>
                </div>
                <profileLinkSmall></profileLinkSmall>
            </div>
        </div>
    </div>

    <div v-else-if="transactionStatusId === 266" class="tradingContainer">
        <tradingBase :tradeId="4"></tradingBase>
        <div>
            <tradingReview></tradingReview>
            <headerTextSub level="level3" text="商品の評価コメントを更新しましょう！"></headerTextSub>
            <selectBox></selectBox>
            <tradingReviewInput></tradingReviewInput>
            <buttonRedLong :propText="propText"></buttonRedLong>
            <div class="tradingInformation">
                <div class="tradingHeaderTextSub">
                    <headerTextSub level="level1Bold" text="出品者情報"></headerTextSub>
                </div>
                <profileLinkSmall></profileLinkSmall>
            </div>
            <div class="tradingInformation">
                <div class="tradingHeadevscode-file://vscode-app/c:/Users/owner/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlrTextSub">
                    <headerTextSub level="level1Bold" text="商品情報"></headerTextSub>
                </div>
                <profileLinkSmall></profileLinkSmall>
            </div>
        </div>
    </div>
    
</template>

<script>
import tradingBase from '../moleclese/tradingBase.vue';
import profileLinkSmall from '../moleclese/profileLinkSmall.vue';
import tradingInformation from '../moleclese/tradingInformation.vue';
import headerTextSub from '../atoms/headerTextSub.vue';
import buttonRedLong from '../atoms/ComponentButton/ButtonRedLong.vue';
import tradingReview from '../moleclese/tradingReview.vue';
import selectBox from '../atoms/selectBox.vue';
import tradingReviewInput from '../moleclese/tradingReviewInput.vue';

export default{
components:{
    tradingBase,
    profileLinkSmall,
    tradingInformation,
    headerTextSub,
    buttonRedLong,
    tradingReview,
    selectBox,
    tradingReviewInput
},
data() {
    return {
        buttonText:
                    [
                    {id:262,text:"発送を通知する"},
                    {id:264,text:"商品を受け取りましょう。"},
                    {id:265,text:"評価しましょう。"},
                    {id:266,text:"取引が完了しました。"},
                ],
        propText:"評価を更新する",
    };
  },
methods: {

},
props:{
    tradingId:{
        type:Number,
        default:1,
    },
    buyerInfo: {
        type:Object,
        default:() => ({
        name:"aaa",
        address:"あ"
        })
    },
    evaluationInfo: {
        type:Object,
        default:() => ({
        nickName:"kazu",
        comment:"やばい",
        score:5
        })
    },
    isSeller: {
        type:Boolean,
        default:true
    },
    productInfo: {
        type: Object,
        default:() => ({
            productId:1,
            productName:"a",
            productImagePath:"a"
        })
    },
    sellerInfo:{
        type: Object,
        default:() => ({
        userId:1,
        nickName:"あ",
        profileImagePath:"a"
        })
    },
    transactionInfo:{
        type:Object,
        default:() => ({
            amount:100,
            shippingFeeResponsibility:"a",
            date:"2023/12/1T14:18:01.1832",
            productId:1
        })
    },
    transactionStatusId:{
        type:Number,
        default:262
    }
},
computed: {
    tradingButtonText() {
    const tradingStatus = this.buttonText.find((item) => item.id === this.transactionStatusId);
    return tradingStatus.text ? tradingStatus.text : ' ';
  }
}
};
</script>

<style scoped>

.tradingContainer{
    display: flex;
    flex-direction:column;
    align-items: center;
}

.tradingHeaderTextSub{
    margin-right: auto;

}


</style>



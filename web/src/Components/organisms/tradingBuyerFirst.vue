<template>
    <div v-if="tradingId === 1" class="tradingContainer">
        <tradingBase></tradingBase>
        <div class="tradingBuyerContainer">
            <div class="tradingInformation">
                <div class="tradingHeaderTextSub">
                    <headerTextSub level="level1Bold" text="出品者情報"></headerTextSub>
                </div>
                <profileLinkSmall></profileLinkSmall>
            </div>
            <div class="tradingInformation">
                <div class="tradingHeadevscode-file://vscode-app/c:/Users/owner/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlrTextSub">
                        <headerTextSub level="level1Bold" text="購入者情報"></headerTextSub>
                </div>
                <tradingInformation></tradingInformation>
            </div>
        </div>
    </div>

    <div v-else-if="tradingId === 2" class="tradingContainer">
        <tradingBase :tradeId="2"></tradingBase>
        <div class="tradingBuyerContainer">
            <buttonRedLong propText="商品が到着しました"></buttonRedLong>
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
                <div class="tradingInformation"></div>
                <tradingInformation></tradingInformation>
            </div>
        </div>
    </div>

    <div v-else-if="tradingId === 3" class="tradingContainer">
        <tradingBase trader="seller" :tradeId="3"></tradingBase>
        <div class="tradingBuyerContainer">
            <tradingReview></tradingReview>
            <div class="tradingBuyerReviewCOntainer">
                <headerTextSub level="level3" text="商品の評価コメントを更新しましょう！"></headerTextSub>
                <selectBox></selectBox>
                <tradingReviewInput></tradingReviewInput>
            </div>
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

    <div v-else-if="tradingId === 4" class="tradingContainer">
        <tradingBase trader="seller" :tradeId="4"></tradingBase>
        <div class="tradingBuyerContainer">
            <tradingReview></tradingReview>
            <div class="tradingBuyerReviewCOntainer">
                <headerTextSub level="level3" text="商品の評価コメントを更新しましょう！"></headerTextSub>
                <selectBox></selectBox>
                <tradingReviewInput></tradingReviewInput>
            </div>
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
        propText:"評価を更新する",
    };
  },
methods: {

},
props:{
    tradingId:{
        type:Number,
        default:4,
    },
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

.tradingBuyerContainer{
    margin-top: 40px;
}

.tradingInformation{
    margin-top: 30px;
}

.tradingBuyerReviewCOntainer{
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>



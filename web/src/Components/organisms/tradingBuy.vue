<template>
    <div class="profileContainer">
        <profileImg className="circleMedium" fileName="gorira.png"></profileImg>
        <div>
        <menuText level="level2Black" :label="shohinName"></menuText>
        <menuText level="level2Black" :label="`￥${shohinPrice}`"></menuText>
        </div>
    </div> 
    <div class="tradingBuyContainer">
        <div class="tradingInformationContainer">
            <div v-for="item,index in listTitles" class="containerTitle" :class="{ 'border-top': index === 0, 'border-bottom': index !== listTitles.length }">
                <menuText level="level3Bold" :label="listTitles[index]"></menuText>
                <div class="informationListText">
                    <menuText level="level3" :label="informationList[index]"></menuText>
                </div>
            </div>
        </div>

        <buttonRedLong propText="購入する"></buttonRedLong>
    </div>
</template>

<script>
import profileImg from '../moleclese/profileImg.vue';
import menuText from '../atoms/menuText.vue';
import buttonRedLong from '../atoms/ComponentButton/ButtonRedLong.vue';


export default{
components:{
    profileImg,
    menuText,
    buttonRedLong,
},
    data() {
            return{
                listTitles:["もつポイント残高","支払い方法","支払金額","配送先"]
            };
        },
methods: {

},
props:{
    tradingId:{
        type:Number,
        default:2,
    },
    informationList:{
        type:Array,
        default:() => (['P1,000','もつポイント払い',"P900","中野"]),
    },
    shohinName:{
        type:String,
        default:"ヒップシート",
    },
    shohinPrice:{
        type:Number,
        default:300
    }
}
};
</script>

<style scoped>



.profileContainer{
    display: flex;
    align-items: center;
}

.tradingInformationContainer{
    margin-top: 20px;
    margin-bottom: 30px;
}

.containerTitle{
    display: flex;
    justify-content: space-between;
    width: 380px;
    align-items: center;
    margin-left: 25px;
    margin-right: 25px;
    padding-top:10px;
    padding-bottom:10px;
}

.informationListText{
    padding-top: 0.5px;
}

.border-top {
    border-top: 1px solid #707070;
}

.border-bottom {
    border-bottom: 1px solid #707070;
}

.tradingBuyContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>



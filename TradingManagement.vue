<template>
    <tradingHeader title="取引画面" />
    <tradingBuyer v-if="!isSeller" />
    <tradingSeller :transactionStatusId="transactionStatusId" v-else />
</template>

<script>
import tradingSeller from '../Components/organisms/tradingSeller.vue';
import tradingBuyer from '../Components/organisms/tradingBuyerFirst.vue';
import tradingHeader from '../Components/moleclese/tradingHeader.vue';
import axios from 'axios';

export default {
    created() {
        // コンポーネントが作成されたときに実行されるコード
        this.fetchDataFromApi();
    },
    name: 'CreateAcount',
    components: {
        tradingHeader,
        tradingBuyer,
        tradingSeller
    },
    data() {
        return {
            propText: "評価を更新する",
            buyerInfo: null,
            evaluationInfo: null,
            isSeller: true,
            productInfo:null,
            sellerInfo:null,
            transactionInfo:null,
            transactionStatusId:null
        };
    },
    props:{
        tradingId:{
            type:Number,
            default:4,
        },
    },
    methods: {
        fetchDataFromApi() {
            // sessionStorageからオブジェクトを取得
            const storedObjectString = sessionStorage.getItem('loginUserData');
            //const transactionId = this.$route.query.productId;
            // JSON形式の文字列をJavaScriptオブジェクトにパース
            const storedObject = JSON.parse(storedObjectString);
            axios.get('https://aso-2201402.main.jp/backend/api/transactions/2',{
                params:{},
                headers:{
                    userId: storedObject.userId,
                    sessionId: storedObject.sessionId
                }
            })
            .then(response => {
            // APIからのデータを処理するロジック
            console.log(response.data);
            this.buyerInfo = response.data.buyerInfo;
            this.evaluationInfo = response.data.evaluationInfo;
            this.isSeller = response.data.isSeller;
            this.productInfo = response.data.productInfo;
            this.sellerInfo = response.data.sellerInfo;
            this.transactionInfo = response.data.transactionInfo;
            this.transactionStatusId = response.data.transactionStatusId;
            })
            .catch(error => {
            // エラーハンドリング
            console.error('API通信エラー:', error);
            });
        }
    }
}
</script>
<style></style>


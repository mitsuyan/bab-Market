<template>
    <tradingHeader title="取引画面"></tradingHeader>
    <tradingBuyer></tradingBuyer>
    <tradingSeller></tradingSeller>
</template>

<script>
import tradingSeller from '../Components/organisms/tradingSeller.vue';
import tradingBuyer from '../Components/organisms/tradingBuyerFirst.vue';
import tradingHeader from '../Components/moleclese/tradingHeader.vue';
import axios from 'axios';

export default {
    name: 'CreateAcount',
    components: {
        tradingHeader,
        tradingBuyer,
        tradingSeller
    },
    data() {
        return {

        }
    },
    methods: {
        handleButtonClick() {
            axios.post('https://aso-2201402.main.jp/backend/api/auth/signup', {
                "email": "sample1@email.com",
                "password": "string",
                "nickname": "String"
            }
            )
                .then(response => {
                    console.log(response.data); // レスポンスデータの取得
                })
                .catch(error => {
                    console.error('エラーが発生しました:', error);
                });
        },
    },
}
</script>
<style></style>


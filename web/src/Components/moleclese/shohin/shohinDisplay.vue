<template>
    <div class="productList">
        <div class="product" v-for="data in datas" :key="data.id" @click="goToProductDetail(product.id)">
            <img :src="data.product.path">
            <div class="product-name">{{ data.product.productName }}</div>
            <div class="product-price">{{ formatCurrency(data.product.price) }}</div>
        </div>
    </div>
    </template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            datas: [],
        };
    },
    props: {
        searchData: String
    },
    methods: {
        formatCurrency(price) {
            if (price == null) {
                return '';
            }
            return `¥${price.toLocaleString()}`;
        },
        goToProductDetail(productId) {
            this.$router.push({ path: `/product/${productId}` })
        }
    },
    mounted() {
        // APIエンドポイントのURLを設定
        const apiUrl = '/api/search/';

        // Axiosを使用してAPIにリクエストを送信
        axios.get(apiUrl, {
            params:{
                keyword: this.searchData
            }
        })
            .then(response => {
                // レスポンスデータをコンポーネントのデータにセット
                this.datas = response.data;
                console.log(this.datas);
            })
            .catch(error => {
                console.error('APIリクエストエラー:', error);
            });
    },
};
</script>

<style scoped>
.productList {
    display: flex;
    width: 323pt;
    height: 400px;
    flex-flow: row wrap;
}
.product {
    margin: 5pt;
    width: 97pt;
    height: 142pt;
    box-shadow: 0 8pt 15pt #E7EAF0;
}
img{
    width: 98pt;
    height: 98pt;
}
</style>
<template>
    <div class="productList">
        <div class="product" v-for="product in products" :key="product.id" @click="goToProductDetail(product.id)">
            <img :src="product.imagePath" alt="Product Image">
            <div class="product-name">{{ product.productName }}</div>
            <div class="product-price">{{ formatCurrency(product.price) }}</div>
        </div>
    </div>
    </template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            products: [],
        };
    },
    methods: {
        formatCurrency(price) {
            return `¥${price.toLocaleString()}`;
        },
        goToProductDetail(productId) {
            this.$router.push({ path: `/product/${productId}` })
        }
    },
    mounted() {
        // APIエンドポイントのURLを設定
        const apiUrl = 'https://aso-2201402.main.jp/app/api/search/getProducts.php';

        // Axiosを使用してAPIにリクエストを送信
        axios.get(apiUrl)
            .then(response => {
                // レスポンスデータをコンポーネントのデータにセット
                this.products = response.data;
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
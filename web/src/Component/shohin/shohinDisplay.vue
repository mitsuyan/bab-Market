<template>
    <div class="productList">
        <div class="product" v-for="product in products" :key="product.id" @click="goToProductDetail(product.id)">
            <img :src="product.image" alt="Product Image">
            <div class="product-name">{{ product.name }}</div>
            <div class="product-price">{{ formatCurrency(product.price) }}</div>
        </div>
    </div>
    </template>

<script>
export default {
    data() {
        return {
            products: [
                { id: 1, name: '商品1', price: 1000, image: '/img/logo.png' },
                { id: 2, name: '商品2', price: 1500, image: '/img/logo.png' },
                { id: 3, name: '商品3', price: 2000, image: '/img/logo.png' },
            ]
        };
    },
    methods: {
        formatCurrency(price) {
            return `¥${price.toLocaleString()}`;
        },
        goToProductDetail(productId) {
            this.$router.push({ path: `/product/${productId}` });
        }
    }
};
</script>

<style>
.productList {
    display: flex;
    width: 323pt;
}
.product {
    margin: 5pt;
    width: 104pt;
    height: 142pt;
    box-shadow: 0 8pt 15pt #E7EAF0;
}
img{
    width: 98pt;
    height: 98pt;
}
</style>
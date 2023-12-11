<template>
    <div class="productList">
        <router-link to="/shohindetail" v-for="data in datas" :key="data.id" @click="tapAction" class="link">
            <div class="product">
                <img :src="data.product.productImagePath" loading="lazy" alt="商品画像">
                <div class="product-name">{{ data.product.productName }}</div>
                <div class="product-price">{{ formatCurrency(data.product.price) }}</div>
            </div>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            datas: [],
            shohinLen: 0
        };
    },
    props: {
        searchData: String,
        nowMypage: String
    },
    methods: {
        formatCurrency(price) {
            if (price == null) {
                return '';
            }
            return `¥${price.toLocaleString()}`;
        },
        tapAction() {
            this.$emit('pushAction');
        }
    },
    mounted() {
        if(this.nowMypage != 'mypage'){
        // APIエンドポイントのURLを設定
        const apiUrl = 'https://aso-2201402.main.jp/backend/api/search';
        // Axiosを使用してAPIにリクエストを送信
        axios
            .get(apiUrl, {
                params: {
                    keyword: this.searchData,
                },
            })
            .then((response) => {
                // レスポンスデータをコンポーネントのデータにセット
                this.datas = response.data;
                this.shohinLen = this.datas.length
                this.$emit('Action', this.shohinLen);
                console.log(this.datas);
            })
            .catch((error) => {
                console.error('APIリクエストエラー:', error);
            });
        }
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

img {
    width: 98pt;
    height: 98pt;
}

.link{
    text-decoration: none;
    color: #000000;
}
</style>
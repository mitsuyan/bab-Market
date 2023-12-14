<template>
    <div class="sellBase">
        <div class="sellorMain">
            <img src="../../assets/gorira.png" class="selimg" />
            <div class="sellorSubMain">
                <div class="imageText">
                    <formText :level="textFormLevel4">{{ this.datas.profile.nickname }}</formText>
                </div>
                <div class="rating">
                    <!-- 評価値に応じて星を表示 -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        v-for="index in 5"
                        :key="index"
                        width="30"
                        height="30"
                    >
                    <path
                    :class="{ 'orange-star': index <= 5 }"
                    d="M69,88.116,78.27,94,75.818,82.9,84,75.438l-10.787-.975L69,64,64.786,74.464,54,75.438,62.183,82.9,59.73,94Z"
                    transform="translate(-54 -64)"
                    fill="#727c8e"
                    opacity="0.3"
                    />
                    </svg>

                    <!-- 評価値を取ってくる -->
                    <div class="evaluationValue">
                        <formText :level="textFormLevel5"> {{ Number(this.datas.profile.average_rating) }} </formText>
                    </div>
                </div>
                <div class="buttonWhiteLight">
                    <ButtonWhiteShortBold :width="width" :text="text" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import formText from '../atoms/formText.vue';
import ButtonWhiteShortBold from "../atoms/ComponentButton/ButtonWhiteShortBold.vue";
import axios from 'axios';

export default {
    components: {
        formText,
        ButtonWhiteShortBold
    },
    data() {
        return {
            textFormLevel4: 'textFormLevel4',
            textFormLevel5: 'textFormLevel5',
            width: '200px',
            text: 'プロフィールを編集する',
            datas: { profile:{ } },
        }
    },
    mounted() {
        const userId = '1';
        const apiUrl = `https://aso-2201402.main.jp/backend/api/users/${userId}/mypage`;
        // Axiosを使用してAPIにリクエストを送信
        axios
            .get(apiUrl)
            .then((response) => {
                // レスポンスデータをコンポーネントのデータにセット
                this.datas = response.data;
                console.log(this.datas);
            })
            .catch((error) => {
                console.error('APIリクエストエラー:', error);
            });
    }
};
</script>

<style scoped>
.sellBase {
    padding-left: 12pt;
}

.sellorMain {
    display: flex;
    padding-top: 10pt;
}

.sellorSubMain {
    padding-left: 30pt;
}
.buttonWhiteLight{
    padding-top: 20px;
}
img.selimg {
    width: 95pt;
    height: 95pt;
    overflow: hidden;
    border-radius: 50%;
}

.rating {
    display: flex;
}

.star {
    width: 20px;
    height: 20px;
}
.evaluationValue {
    align-items: center;
    display: flex;
    padding-left: 14px
}
.orange-star {
    fill: #FF6969;
    opacity: 1;
}</style>

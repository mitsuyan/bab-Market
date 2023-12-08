<template>
    <buttonText :level="level2Pink" :propText="text" />
    <div class="sellorImg">
        <img :src="/public/img/logo.png">
        <!-- <img :src="{{ userProfile.imagePath }}"> -->
    </div>
    <div class="sellorName">
        <formText :level=" textFormLevel2 ">mitsukun</formText>
        <formText :level="textFormLevel2">{{ userProfile.nickname }}</formText>
    </div>
    <div class="sellorEvaluation">
        <div class="sellorImg"><svg id="rating" xmlns="http://www.w3.org/2000/svg" width="28.583" height="13.944" viewBox="0 0 28.583 13.944">
        <rect id="長方形_12" data-name="長方形 12" width="28.583" height="13.944" rx="6.972" transform="translate(0 0)" fill="#ff6969"/>
        <path id="パス_12" data-name="パス 12" d="M57.67,69.9l2.268,1.439-.6-2.715,2-1.826L58.7,66.56,57.67,64l-1.031,2.56L54,66.8l2,1.826-.6,2.715Z" transform="translate(-50.33 -61.064)" fill="#fff"/>
        </svg></div>
        <div class="sellorAverage">4.9</div>
        <!-- <div>{{ userMypage.averageRating }}</div> -->
    </div>
</template>

<script>
// import axios from 'axios';
import buttonText from '../../atoms/buttonText.vue';
import formText from '../../atoms/formText.vue';

export default {
    components: {
        buttonText,
        formText
    },
    data() {
        return {
            //大見出し
            level2Pink: 'level2Pink',
            textFormLevel2: 'textFormLevel2',
            text: "出品者",
            userProfile: null, // ユーザのプロフィール情報を保持する変数
            userMypage: null
        };
    },
    mounted() {
        this.fetchUserProfile();
    }, 
    methods: {
    // ユーザのプロフィール情報を取得するメソッド
        fetchUserProfile() {
        // 実際のAPIエンドポイントを指定
        const apiMypage = 'http://api.example.com/v1/api/users/{userId}/mypage';
            const apiProfile = 'http://api.example.com/v1/api/users/profile';
            // axiosを使用してAPIにGETリクエストを送信
            axios.get(apiMypage, {
            // 必要な場合、ヘッダー情報やクエリパラメータを指定
                params: {
                    'userId': 123,
                },
            })
            .then(response => {
            // APIからのレスポンスを処理
            // 例: 必要な情報だけを変数に代入する
                this.userMypage = {
                    averageRating: response.data.averageRating
                };
            })
            .catch(error => {
                // エラー処理
                console.error('API通信エラー:', error);
            });
            axios.get(apiProfile, {
            })
            .then(response => {
                this.userProfile = {
                    nickname: response.data.nickname,
                    imagePath: response.data.imagePath
                };
            })
            .catch(error => {
                console.error('API通信エラー:', error);
            });
        }
    }
};
</script>
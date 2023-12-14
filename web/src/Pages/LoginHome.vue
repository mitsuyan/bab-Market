<!-- 親コンポーネント -->
<template>
    <mainBase :height="mainHeight">
        <div class="mainBase">
            <div class="mbImg">
                <ImgComp className="title" fileName="babyMotsuTitle.png"></ImgComp>
            </div>
            <div class="loginForm">
                <div class="loginText">
                    <LoginText :propEmail="userMail" :propPass="userPass" />
                </div>
                <div class="buttoIcon">
                    <ButtonRedSemicircleIconLongShadow :buttonWidth="buttonWidth" :text="text" @click="handleButtonClick"/>
                </div>
                <div class="createLink">
                    <accountLink />
                </div>
            </div>
        </div>
    </mainBase>
</template>

<script>
import LoginText from '../Components/atoms/ComponentText/LoginText.vue';
import ButtonRedSemicircleIconLongShadow from '../Components/atoms/ComponentButton/ButtonRedSemicircleIconLongShadow.vue';
import ImgComp from '../Components/atoms/imgComp.vue';
import accountLink from '../Components/accountLink.vue';
import mainBase from '../Components/mainBase.vue';
import axios from 'axios';

export default {
    name: 'LoginMain',
    components: {
        LoginText,
        ButtonRedSemicircleIconLongShadow,
        ImgComp,
        accountLink,
        mainBase
    },
    data() {
        return {
            // ボタンの初期幅を変更
            buttonWidth: '330px',
            text: 'ログイン',
            userMail: 'mail',
            userPass: 'pass',
            mainHeight: '699pt'
        };
    },
    methods: {
        handleButtonClick() {
            axios.post('https://aso-2201402.main.jp/backend/api/auth/login',{
                    "email": "sample1@email.com",
                    "password": "string"
                    }
            )
            .then(response => {
                console.log(response.data); // レスポンスデータの取得
                 // loginUserData オブジェクトの作成
                const loginUserData = {
                sessionId: response.data.sessionId,
                userId: response.data.userId,
                };

                // rifineData オブジェクトの作成
                const rifineData = {
                codeMaster: response.data.codeMaster,
                colors: response.data.colors,
                majorCategory: response.data.majorCategory,
                minorCategory: response.data.minorCategory,
                // 他に格納したいデータがあればここに追加
                };

                // sessionStorage にデータを格納
                sessionStorage.setItem("loginUserData", JSON.stringify(loginUserData));
                sessionStorage.setItem("rifineData", JSON.stringify(rifineData));
                console.log(loginUserData);
                this.$router.push("/tradingManagement");
            })
            .catch(error => {
                console.error('エラーが発生しました:', error);
            });
        },
    },
}
</script>

<style scoped>
.mainBase{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.loginInputForm{
    margin: 25pt 37pt;
    box-shadow: 0 8pt 15pt #E7EAF0;
}
.loginProcess{
    margin: 20pt 36pt;
}
.createLink {
    margin-top: 65pt;
}
a {
    margin-left: 116pt;
}
</style>

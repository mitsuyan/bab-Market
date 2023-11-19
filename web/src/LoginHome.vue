<!-- 親コンポーネント -->
<template>
    <div class="mbImg">
        <headerIcon />
    </div>
    <div class="loginForm">
        <div class="loginText">
            <LoginText />
        </div>
        <div class="buttoIcon">
            <!-- buttonWidth プロパティに新しい値を設定 -->
            <ButtonRedSemicircleIconLongShadow :buttonWidth="buttonWidth" :data="text" @click="handleLogin" />
        </div>
        <div class="createLink">
            <accountLink />
        </div>
    </div>
</template>

<script>
import LoginText from './ComponentText/LoginText.vue';
import ButtonRedSemicircleIconLongShadow from './ComponentButton/ButtonRedSemicircleIconLongShadow.vue';
import headerIcon from './Components/headerIcon.vue';
import accountLink from './Components/accountLink.vue';
import apiServices from '../services/apiService.js';
export default {
    name: 'LoginMain',
    components: {
        LoginText,
        ButtonRedSemicircleIconLongShadow,
        headerIcon,
        accountLink
    },
    data() {
        return {
            // ボタンの初期幅を変更
            buttonWidth: '220px',
            text: 'ログイン',
            userMail: 'mail',
            userPass: 'pass'
        };
    },
    methods: {
        async handleLogin() {
            try{
                const response = apiServices.login({
                    userMail: this.userMail,
                    userPass: this.userPass
                });
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>

<style></style>

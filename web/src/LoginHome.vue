<!-- 親コンポーネント -->
<template>
    <div class="mbImg">
        <headerIcon />
    </div>
    <div class="loginForm">
        <div class="loginText">
            <LoginText :propEmail="userMail" :propPass="userPass" />
        </div>
        <div class="buttoIcon">

            <ButtonRedSemicircleIconLongShadow :buttonWidth="buttonWidth" :text="text" />
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
                    email: this.userMail,
                    password: this.userPass
                });
                if (response.status === 200) {
                    // ログイン成功時の処理
                    console.log("ログイン成功");
                } else if (response.status === 401) {
                    // ログイン失敗時の処理
                    console.log("ログイン失敗");
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>

<style></style>

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
            <ButtonRedSemicircleIconLongShadow :buttonWidth="buttonWidth" :data="text" />
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
            text: 'ログイン'
        };
    },
}
</script>

<style></style>

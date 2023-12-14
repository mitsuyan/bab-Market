<template>
    <mainBase :height="mainHeight">
    <div class="mbImg">
        <headerIcon />
    </div>
    <div class="loginForm">
        <div class="createAcountArea">
            <Rectangle33Radius />
        </div>
        <div class="buttoIcon">
            <ButtonRedSemicircleIconLongShadow @click="handleButtonClick" :buttonWidth="buttonWidth" :text="text" />
        </div>
        <div class="formConsentText">
            <formText :level="textFormLabelBluegray">アカウント作成することで、当社の利用規約と<br>プライバシーポリシーに同意します。</formText>
        </div>
    </div>
    </mainBase>
</template>

<script>
import Rectangle33Radius from '../Components/atoms/ComponentText/Rectangle33Radius.vue';
import ButtonRedSemicircleIconLongShadow from '../Components/atoms/ComponentButton/ButtonRedSemicircleIconLongShadow.vue';
import formText from '../Components/atoms/formText.vue';
import mainBase from '../Components/mainBase.vue';
import headerIcon from '../Components/headerIcon.vue';
import axios from 'axios';

export default {
    name: 'CreateAcount',
    components: {
        Rectangle33Radius,
        ButtonRedSemicircleIconLongShadow,
        formText,
        mainBase,
        headerIcon
    },
    data() {
        return {
            buttonWidth: '330px',
            text: 'サインアップ',
            mainHeight: '699pt',
            textFormLabelBluegray: 'textFormLabelBluegray'
        }
    },
    methods: {
        handleButtonClick() {
            axios.post('https://aso-2201402.main.jp/backend/api/auth/signup',{
                    "email": "sample1@email.com",
                    "password": "string",
                    "nickname":"String"
                    }
            )
            .then(response => {
                console.log(response.data); // レスポンスデータの取得
            })
            .catch(error => {
                console.error('エラーが発生しました:', error);
            });
        },
    },
}
</script>
<style>
svg#コンポーネント_128_14 {
    margin-left: 122pt;
}
.loginInputForm{
    margin: 25pt 37pt;
    box-shadow: 0 8pt 15pt #E7EAF0;
}
.loginProcess{
    margin: 20pt 36pt;
}
.formConsentText {
    text-align: center;
}
</style>
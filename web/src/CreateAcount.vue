<template>
    <div class="mbImg">
        <svg id="コンポーネント_128_14" data-name="コンポーネント 128 – 14" xmlns="http://www.w3.org/2000/svg" width="83"
            height="84" viewBox="0 0 83 84">
            <ellipse id="楕円形_22" data-name="楕円形 22" cx="23" cy="22.5" rx="23" ry="22.5" transform="translate(0 31)"
                fill="#ff6969" />
            <ellipse id="楕円形_23" data-name="楕円形 23" cx="28" cy="28.5" rx="28" ry="28.5" transform="translate(27 19)"
                fill="#ff6969" />
            <text id="b" transform="translate(44 67)" fill="#fff" font-size="58"
                font-family="ZenMaruGothic-Bold, Zen Maru Gothic" font-weight="700">
                <tspan x="0" y="0">b</tspan>
            </text>
            <text id="m" transform="translate(4 66)" fill="#fff" font-size="46"
                font-family="ZenMaruGothic-Bold, Zen Maru Gothic" font-weight="700">
                <tspan x="0" y="0">m</tspan>
            </text>
        </svg>
    </div>
    <div class="createAcountArea">
        <Rectangle33Radius />
    </div>
    <div class="buttoIcon">
        <ButtonRedSemicircleIconLongShadow :buttonWidth="buttonWidth" :text="text" />
    </div>
    <div class="formConsentText">
        <formText>アカウント作成することで、当社の利用規約と<br>プライバシーポリシーに同意します。</formText>
    </div>
</template>

<script>
import Rectangle33Radius from './ComponentText/Rectangle33Radius.vue';
import ButtonRedSemicircleIconLongShadow from './ComponentButton/ButtonRedSemicircleIconLongShadow.vue';
import formText from './Components/atoms/formText.vue';

export default {
    name: 'CreateAcount',
    components: {
        Rectangle33Radius,
        ButtonRedSemicircleIconLongShadow,
        formText
    },
    data() {
        return {
            buttonWidth: '220px',
            text: 'サインアップ'
        }
    }
}
</script>
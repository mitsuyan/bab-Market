<template>
    <div class="exp">
    <buttonText :level="level2Pink" :propText="text" />
        <formText :level="textFormLevel2">API実装</formText>
    </div>

</template>

<script>
import formText from '../../atoms/formText.vue';
import buttonText from '../../atoms/buttonText.vue';

export default {
    components: {
        formText,
        buttonText
    },
    data() {
        return {
            //大見出し
            level2Pink: 'level2Pink',
            //詳細の文字
            textFormLevel2: 'textFormLevel2',
            text: "商品の説明"
        }
    }
}
</script>

<style>
.exp{
    width: 267pt;
    height: 120pt;
    padding-left: 32pt;
}
</style>
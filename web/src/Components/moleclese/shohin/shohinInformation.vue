<template>
    <div class="informationBase">
        <buttonText :level="level2Pink" :propText="text" />
        <!-- 月齢 -->
        <div class="age">
            <div class="h1"><formText :level="textFormLabelBluegray">月齢</formText></div>
            <div class="h2"><formText :level="textFormLevel2">API実装</formText></div>
        </div>
        <!-- 状態 -->
        <div class="situation">
            <div class="h1"><formText :level="textFormLabelBluegray">状態</formText></div>
            <div class="h2"><formText :level="textFormLevel2">API実装</formText></div>
        </div>
        <!-- 身長 -->
        <div class="height">
            <div class="h1"><formText :level="textFormLabelBluegray">身長</formText></div>
            <div class="h2"><formText :level="textFormLevel2">API実装</formText></div>
        </div>
        <!-- 体重 -->
        <div class="bodyWeight">
            <div class="h1"><formText :level="textFormLabelBluegray">体重</formText></div>
            <div class="h2"><formText :level="textFormLevel2">API実装</formText></div>
        </div>
        <!-- ブランド -->
        <div class="brand">
            <div class="h1"><formText :level="textFormLabelBluegray">ブランド</formText></div>
            <div class="h2"><formText :level="textFormLevel2">API実装</formText></div>
        </div>
        <!-- カテゴリー -->
        <div class="category">
            <div class="h1"><formText :level="textFormLabelBluegray">カテゴリー</formText></div>
            <div class="h2"><formText :level="textFormLevel2">API実装</formText></div>
        </div>
        <!-- カラー -->
        <div class="color">
            <div class="h1"><formText :level="textFormLabelBluegray">色</formText></div>
            <div class="h2"><formText :level="textFormLevel2">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" :fill="color" /></svg>
                API実装</formText>
            </div>
        </div>
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
            //中見出し
            textFormLabelBluegray: 'textFormLabelBluegray',
            //詳細の文字
            textFormLevel2: 'textFormLevel2',
            text: "商品の情報",
            color: 'green'
        }
    }
}
</script>

<style>
.level2Pink{
    width: 248pt;
}
.informationBase{
    display: flex;
    flex-flow: row wrap;
    padding-left: 32pt;
}
.age,
.situation,
.height,
.bodyWeight,
.brand,
.category,
.color{
    width: 124pt;
    padding-bottom: 20pt;
}
</style>
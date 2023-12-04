<!--  -->
<template>
    <button class="process" :style="{
        'background-color': back_color,
        color: fore_color,
        width: buttonWidth
    }">
        <buttonText :level="level2White" :propText="propText" />
    </button>
</template>

<script>
import buttonText from '../buttonText.vue';
export default {
    components: {
        buttonText
    },
    props: {
        back_color: {
            type: String,
            default: "#FF6969",
        },
        fore_color: {
            type: String,
            default: "#ffffff",
        },
        buttonWidth: {
            type: String,
            default: "292px",
        }
    },
    data() {
        return {
            propText: "ログイン",
            level2White: "level2White"
        }
    }
};
</script>

<style>
.process {
    position: absolute;
    border: none;
    border-radius: 10px;
    font-size: 17px;
    box-shadow: 8pt 8pt 15pt #E7EAF0;
    height: 30pt;
}

.process::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 10px;
    /* 矢印の位置を調整 */
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ffffff;
    /* 白丸の色を設定 */
    display: flex;
    align-items: center;
    justify-content: center;
    content: '>';
    /* 矢印の内容 */
    font-size: 1em;
    font-weight: bold;
    color: #FF6969;
    /* 矢印の色を設定 */
}
</style>

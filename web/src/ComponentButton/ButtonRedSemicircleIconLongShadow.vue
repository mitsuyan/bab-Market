<template>
    <button class="loginProcess" :style="{
        'background-color': back_color,
        color: fore_color,
        padding: buttonPadding,
        width: buttonWidth
    }">
        <buttonText :level="level3White" :propText="data1" />
        <span :style="{ backgroundColor: arrowBackgroundColor }" class="arrow">{{ icon }}</span>
    </button>
</template>

<script>
import buttonText from '../Components/buttonText.vue';
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
            default: "303px",
        },
        arrowBackgroundColor: {
            type: String,
            default: "#ffffff" // 初期値を設定
        },
        icon: {
            type: String,
            default: ">"
        }
    },
    data() {
        return {
            data1: "登録",
            level3White: "level3White"
        }
    }
};
</script>

<style>
.loginProcess {
    position: relative;
    border-radius: 23px;
    font-size: 17px;
    border: none;
    height: 34pt;
    box-shadow: 8pt 8pt 15pt #E7EAF0;
}

.arrow {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: bold;
    color: #FF6969;
}
</style>

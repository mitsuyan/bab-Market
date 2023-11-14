<template>
    <button class="LoginProcess" :style="{
        'background-color': back_color,
        color: fore_color,
        padding: buttonPadding,
        width: buttonWidth
    }">
        {{ text }}
        <span :style="{ backgroundColor: arrowBackgroundColor }" class="Arrow">{{ icon }}</span>
    </button>
</template>

<script>
export default {
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
        text: {
            type: String,
            default: "BUTTON"
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
};
</script>

<style>
.LoginProcess {
    position: relative;
    border-radius: 23px;
    font-size: 17px;
    border: none;
    height: 34pt;
    box-shadow: 8pt 8pt 15pt #E7EAF0;
}

.Arrow {
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

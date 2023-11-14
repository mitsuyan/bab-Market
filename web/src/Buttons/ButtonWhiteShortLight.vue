<template>
    <button class="whiteShortLightframe" :style="{
        'background-color': back_color,
        color: fore_color
    }">
        <div class="whiteShortLightText">{{ text }}</div>
    </button>
</template>

<script>
export default {
    props: {
        back_color: {
            type: String,
            default: "#FFFFFF"
        },
        fore_color: {
            type: String,
            default: "#FF6969"
        },
        text: {
            type: String,
            default: "Button"
        }
    }
};
</script>

<style>
.whiteShortLightframe {
    border-radius: 5px;
    position: absolute;
    text-decoration: none;
    border: 2px solid #FF6969;
    width: 99pt;
    height: 26pt;
}

.whiteShortLightText {
    text-align: center;
    padding: 2pt 0;
    font-size: 13px;
}
</style>
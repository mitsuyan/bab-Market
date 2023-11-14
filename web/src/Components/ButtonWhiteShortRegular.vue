<template>
    <button class="whiteShortRegularframe" :style="{
        'background-color': back_color,
        color: fore_color
    }">
        <div class="whiteShortRegularText">{{ text }}</div>
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
.whiteShortRegularframe {
    border-radius: 5px;
    position: absolute;
    text-decoration: none;
    border: 2px solid #FF6969;
    width: 81pt;
    height: 26pt;
}

.whiteShortRegularText {
    text-align: center;
    padding: 2pt 0;
    font-size: 13px;
}
</style>
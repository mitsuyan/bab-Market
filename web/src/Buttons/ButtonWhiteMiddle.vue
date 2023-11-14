<template>
    <button class="whiteMiddleframe" :style="{
        'background-color': back_color,
        color: fore_color
    }">
        <div class="whiteMiddleFrameText">{{ text }}</div>
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
.whiteMiddleframe {
    border-radius: 5px;
    position: absolute;
    border: none;
    text-decoration: none;
    border: 2px solid #FF6969;
    width: 207pt;
    height: 31pt;
}

.whiteMiddleFrameText {
    text-align: center;
    padding: 6pt 0;
    font-size: 13px;
}
</style>
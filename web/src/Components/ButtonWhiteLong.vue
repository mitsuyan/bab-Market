<template>
    <button class="whiteLongframe" :style="{ 
        'background-color': back_color,
        color: fore_color
        }">
        <div class="RedFrameText">{{ text }}</div>
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
.whiteLongframe {
    border-radius: 5px;
    position: absolute;
    text-decoration: none;
    border: 2px solid #FF6969;
    width: 231pt;
    height: 38pt;
}
.RedFrameText {
    text-align: center;
    padding: 7pt 0;
    font-size: 13px;
}
</style>
<template>
    <a href="" class="Redframe" :style="{ 
        'background-color': back_color,
        color: fore_color
        }">
        <div class="RedFrameText">{{ text }}</div></a>
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
.Redframe {
    border-radius: 5px;
    position: absolute;
    text-decoration: none;
    border: 2px solid #FF6969;
    width: 216pt;
    height: 30pt;
}
.RedFrameText {
    text-align: center;
    padding: 7pt 0;
    font-size: 13px;
}
</style>
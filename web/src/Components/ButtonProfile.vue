<!--  -->
<template>
    <button class="ButtonProfile" :style="{
        'background-color': back_color,
        color: fore_color,
        width: buttonWidth
    }">
    <div class="ButtonImg"><img src=""></div>
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        back_color: {
            type: String,
            default: "#FFFFFF",
        },
        fore_color: {
            type: String,
            default: "#656565",
        },
        buttonWidth: {
            type: String,
            default: "82pt",
        },
        text: {
            text: String,
            default: "BUTTON"
        }
    },
};
</script>

<style>
.ButtonProfile{
    position: absolute;
    border: 0.6pt solid #707070;
    border-radius: 8px;
    font-size: 10px;
    height: 82pt;
}

</style>

<template>
    <button class="middleRegist" :style="{ 
        'background-color': back_color,
        color: fore_color
        }">
    <div class="registText">{{ text }}</div>
    </button>
</template>
<script>
export default {
    props: {
        back_color: {
            type: String,
            default: "#FF6969"
        },
        fore_color: {
            type: String,
            default: "#ffffff"
        },
        text: {
            text: String,
            default: "BUTTON"
        }
    }
};
</script>

<style>
.middleRegist {
    position: absolute;
    border-radius: 7px;
    border: none;
    width: 292px;
    height: 45px;
}

.registText {
    text-align: center;
    font-size: 17px;
    padding: 7pt 0;
}
</style>
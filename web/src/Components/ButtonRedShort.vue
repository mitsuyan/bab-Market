<template>
    <button class="LongRegist" :style="{
        'background-color': back_color,
        color: fore_color
    }">
        <div class="RegistText">{{ text }}</div>
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
.LongRegist {
    position: absolute;
    border-radius: 7px;
    border: none;
    text-decoration: none;
    width: 137pt;
    height: 32pt;
}

.RegistText {
    text-align: center;
    font-size: 17px;
    padding: 7pt 0;
}
</style>
<template>
    <button class="LongLongRegist" :style="{
        'background-color': back_color,
        color: fore_color
    }">
        <div class="RegistLongText">{{ text }}</div>
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
.LongLongRegist {
    position: absolute;
    border-radius: 7px;
    border: none;
    width: 369px;
    height: 45px;
}

.RegistLongText {
    text-align: center;
    font-size: 17px;
    padding: 7pt 0;
}
</style>
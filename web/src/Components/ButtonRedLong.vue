<template>
    <a href="" class="LongRegist" :style="{
        'background-color': back_color,
        color: fore_color
    }">
        <div class="RegistText">{{ text }}</div>
    </a>
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
    text-decoration: none;
    width: 277pt;
    height: 34pt;
}

.RegistText {
    text-align: center;
    font-size: 17px;
    padding: 7pt 0;
}
</style>
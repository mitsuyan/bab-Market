<template>
    <a href="" class="Regist" :style="{ 
        'background-color': back_color,
        color: fore_color
        }">
    <div class="RegistText">{{ text }}</div></a>
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
.Regist {
    position: absolute;
    border-radius: 7px;
    font-size: 17px;
    text-decoration: none;
    /* padding: 10px 40px 10px 40px; */
    width: 219pt;
    height: 44pt;
}

.RegistText {
    text-align: center;
    padding: 14pt 0;
}
</style>
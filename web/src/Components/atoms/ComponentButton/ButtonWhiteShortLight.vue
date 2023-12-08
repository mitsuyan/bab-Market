<template>
    <button class="whiteShortLightframe" :style="{
        'background-color': back_color,
        color: fore_color
    }">
        <div class="whiteShortLightText">
            <buttonText :level="level3Pink" :propText="data" />
        </div>
    </button>
</template>

<script>
import buttonText from '../buttonText.vue';
export default {
    components: {
        buttonText
    },
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
    },
    data() {
        return {
            data: "登録",
            level3Pink: "level3Pink"
        }
    }
};
</script>

<style>
.whiteShortLightframe {
    border-radius: 5px;
    position: absolute;
    text-decoration: none;
    border: 2px solid #FF6969;
    width: 99pt;
    height: 26pt;
}

.whiteShortLightText {
    text-align: center;
    padding: 2pt 0;
    font-size: 13px;
}
</style>
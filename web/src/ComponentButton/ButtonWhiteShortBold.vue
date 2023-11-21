<template>
    <button class="whiteShortBoldframe" :style="{
        'background-color': back_color,
        color: fore_color
    }">
        <div class="whiteShortBoldText">
            <buttonText :level="level3Pink" :propText="data" />
        </div>
    </button>
</template>

<script>
import buttonText from '../Components/atoms/buttonText.vue';
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
.whiteShortBoldframe {
    border-radius: 5px;
    position: absolute;
    text-decoration: none;
    border: 2px solid #FF6969;
    width: 99pt;
    height: 26pt;
}

.whiteShortBoldText {
    text-align: center;
    padding: 2pt 0;
    font-size: 13px;
}
</style>
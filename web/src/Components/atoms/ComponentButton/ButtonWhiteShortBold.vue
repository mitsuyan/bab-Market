<template>
    <button class="whiteShortBoldframe" :style="{
        'background-color': back_color,
        color: fore_color,
        width: width
    }">
        <div class="whiteShortBoldText">
            <buttonText :level="level3Pink" :propText="text" />
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
        width: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
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
    text-decoration: none;
    border: 2px solid #FF6969;  
    height: 26pt;
}

.whiteShortBoldText {
    text-align: center;
    padding: 2pt 0;
    font-size: 13px;
}
</style>
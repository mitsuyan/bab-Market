<template>
    <button class="whiteShortframe" :style="{
        'background-color': back_color,
        color: fore_color
    }">
        <div class="whiteShortFrameText">
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
.whiteShortframe {
    border-radius: 5px;
    position: absolute;
    border: none;
    text-decoration: none;
    border: 2px solid #FF6969;
    width: 140pt;
    height: 39pt;
}

.whiteShortFrameText {
    text-align: center;
    padding: 8pt 0;
    font-size: 13px;
}
</style>
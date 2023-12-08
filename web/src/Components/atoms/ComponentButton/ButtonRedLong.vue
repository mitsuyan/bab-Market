<template>
    <button class="longLongRegist" :style="{
        'background-color': back_color,
        color: fore_color
    }">
    <buttonText :level="level1White" :propText="data"/>
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
            default: "#FF6969"
        },
        fore_color: {
            type: String,
            default: "#ffffff"
        }
    },
    data() {
        return {
            data: "登録",
            level1White: "level1White"
        }
    }
};
</script>

<style>
.longLongRegist {
    position: absolute;
    border-radius: 7px;
    border: none;
    width: 369px;
    height: 45px;
}

</style>
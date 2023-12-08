<template>
    <button class="whiteLongframe" :style="{ 
        'background-color': back_color,
        color: fore_color
        }">
        <div class="redFrameText">
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
.whiteLongframe {
    border-radius: 5px;
    position: absolute;
    text-decoration: none;
    border: 2px solid #FF6969;
    width: 231pt;
    height: 38pt;
}
.redFrameText {
    text-align: center;
    padding: 7pt 0;
    font-size: 13px;
}
</style>
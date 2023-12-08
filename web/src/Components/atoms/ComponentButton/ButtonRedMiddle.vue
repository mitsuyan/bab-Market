<template>
    <button class="middleRegist" :style="{ 
        'background-color': back_color,
        color: fore_color
        }">
    <div class="registText">
        <buttonText :level="level1White" :propText="data" />
    </div>
    </button>
</template>
<script>
import buttonText from "../buttonText.vue";
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
.middleRegist {
    position: absolute;
    border-radius: 7px;
    border: none;
    width: 292px;
    height: 45px;
}

.registText {
    text-align: center;
    font-size: 17px;
    padding: 7pt 0;
}
</style>
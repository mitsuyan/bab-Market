<!--  -->
<template>
    <button class="buttonProfile" :style="{
        'background-color': back_color,
        color: fore_color,
        width: buttonWidth
    }">
    <div class="buttonImg"><img src=""></div>
        <formText :level="textFormLabelGrayLevel1" :text="data1"/>
    </button>
</template>

<script>
import  formText  from "../footerText.vue";
export default {
    components: {
        formText
    },  
    props: {
        back_color: {
            type: String,
            default: "#FFFFFF",
        },
        fore_color: {
            type: String,
            default: "#656565",
        },
        buttonWidth: {
            type: String,
            default: "82pt",
        }
    },
    data() {
        return {
            data1: "登録",
            textFormLabelGrayLevel1: "textFormLabelGrayLevel1"
        }
    }
};
</script>

<style>
.buttonProfile{
    position: absolute;
    border: 0.6pt solid #707070;
    border-radius: 8px;
    font-size: 10px;
    height: 82pt;
}

</style>

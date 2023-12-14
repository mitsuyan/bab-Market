<template>
    <button class="loginProcess" @click="handleClick" :style="{
        'background-color': back_color,
        color: fore_color,
        padding: buttonPadding,
        width: buttonWidth
    }">
        <div class="nullDiv">
        </div>
        <div class="redtext">
            <buttonText :level="level3White" :propText="text" />
        </div>
        <div class="circle">
            <ImgComp fileName="circleVectorPink.svg" className="circleVector"></ImgComp>
        </div>
    </button>
</template>

<script>
import buttonText from '../buttonText.vue';
import ImgComp from '../imgComp.vue';

export default {
    components: {
        buttonText,
        ImgComp,
    },
    props: {
        back_color: {
            type: String,
            default: "#FF6969",
        },
        fore_color: {
            type: String,
            default: "#ffffff",
        },
        buttonWidth: {
            type: String,
            default: "303px",
        },
        arrowBackgroundColor: {
            type: String,
            default: "#ffffff" // 初期値を設定
        },
        icon: {
            type: String,
            default: ">"
        },
        text: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            level3White: "level3White"
        }
    },
    methods: {
        handleClick() {
            this.$emit('buttonClick')
        }
    }
};
</script>

<style scoped>
.loginProcess {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    border-radius: 23px;
    font-size: 17px;
    border: none;
    height: 34pt;
    box-shadow: 8pt 8pt 15pt #E7EAF0;
}



.nullDiv {
    margin-left: 4px;
}

.circle {
    margin-top: 4px;
    margin-right: 4px;
}
</style>
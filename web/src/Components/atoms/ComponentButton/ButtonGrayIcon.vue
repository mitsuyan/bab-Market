<template>
    <button class="loginProcess" @click="handleClick" :style="{
        'background-color': back_color,
        color: fore_color,
        padding: buttonPadding,
        width: buttonWidth
    }">
    <div class="textGray">
        <buttonText :level="level1Gray" :propText="text" />
    </div>
        <span class="grayIcon">
            <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="28.797" height="29.62" viewBox="0 0 28.797 29.62">
            <rect id="長方形_2" data-name="長方形 2" width="28.797" height="29.62" rx="14.399" fill="#727c8e"/>
            <g id="share-arrow" transform="translate(9.744 8.342)">
            <g id="グループ_27" data-name="グループ 27">
            <path id="パス_14" data-name="パス 14" d="M117.438,12.71a.724.724,0,0,0,.722-.722V2.211l3.079,2.742a.724.724,0,1,0,.962-1.082L118.051.179a.726.726,0,0,0-.926-.024.726.726,0,0,0-.313.289l-3.6,3.451a.723.723,0,1,0,1,1.046l2.5-2.405v9.452A.724.724,0,0,0,117.438,12.71Z" transform="translate(-112.993 0)" fill="#fff" stroke="#fff" stroke-width="0.7"/>
            </g></g></svg>
        </span>
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
            default: "#FFFFFF",
        },
        fore_color: {
            type: String,
            default: "#727C8E",
        },
        buttonWidth: {
            type: String,
            default: "165pt",
        },
        text: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            level1Gray: "level1Gray",
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
    /* 要素を横に並べるようにする */
    align-items: center;
    /* 子要素を中央に揃える */
    position: relative;
    border-radius: 23px;
    font-size: 17px;
    border: none;
    height: 34pt;
    box-shadow: 8pt 8pt 15pt #E7EAF0;
    margin: 13pt 19pt;
}
.textGray{
    margin: auto;
}
</style>

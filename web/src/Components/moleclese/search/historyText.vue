<template>
    <formText :level="textFormLabelGrayLevel1">検索履歴</formText>
    <div class="line">
        <svg xmlns="http://www.w3.org/2000/svg" width="390" height="1" viewBox="0 0 390 1">
        <line id="線_40" data-name="線 40" x2="390" transform="translate(0 0.5)" fill="none" stroke="#c2c2c2" stroke-width="1"/>
        </svg>
    </div>
    <div class="history">

    </div>
</template>

<script>
import formText from '../../atoms/formText.vue';

export default {
    components: {
        formText,
    },
    data(){
        return{
            textFormLabelGrayLevel1: "textFormLabelGrayLevel1"
        }
    }
}
</script>

<style>
.line {
    align-items: start;
    display: flex;
}
</style>
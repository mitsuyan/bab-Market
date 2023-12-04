<template>
    <div class="comentTextBase">
        <div class="shohinNumText">
            <!-- {{   }} この部分に出品商品数を表示-->
            <formText :level="textFormLevel3">4</formText>
            <footerText :level="level1" :text="text" />
        </div>
            <formText :level="textFormLevel3">たくさん商品を出品します！</formText>
        <div class="borderLine">
            <svg xmlns="http://www.w3.org/2000/svg" width="410" height="1" viewBox="0 0 420 1">
            <line id="線_40" data-name="線 40" x2="410" transform="translate(0 0.5)" fill="none" stroke="#c2c2c2" stroke-width="1"/>
            </svg>
        </div>
    </div>
</template>

<script>
import formText from "../../Components/atoms/formText.vue";
import footerText from "../../Components/atoms/footerText.vue";
export default {
    components: {
        formText,
        footerText
    },
    data(){
        return {
            text: '商品'
        }
    }
}
</script>
<style>
.shohinNumText{
    display: flex;
}
.level1{
    display: flex;
    align-items: center;
}
.borderLine{
    display: flex;
}
.comentTextBase{
    padding-left: 12pt;
    padding-top: 20pt;
}
</style>
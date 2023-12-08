<template>
<mainBase :base="base" style="position: relative;height: 58pt;top: 20pt;">
    <div class="footerBase">
        <div class="buttonGrayIcon">
            <ButtonGrayIcon :style="{ width: buttonWidth }" :text="grayText" />
        </div>
        <div class="buttonRedIcon">
            <ButtonRedSemicircleIconLongShadow :style="{ width: buttonWidth }" :text="redText" />
        </div>
    </div>
</mainBase>
</template>

<script>
import mainBase from '../mainBase.vue';
import ButtonGrayIcon from '../atoms/ComponentButton/ButtonGrayIcon.vue';
import ButtonRedSemicircleIconLongShadow from '../atoms/ComponentButton/ButtonRedSemicircleIconLongShadow.vue';
export default{
    props:{
        buttonWidth: {
            type: String,
            default: "165px",
        }
    },
    components:{
        mainBase,
        ButtonGrayIcon,
        ButtonRedSemicircleIconLongShadow
    },
    data(){
        return{
            grayText: "共有する",
            redText: "購入手続きへ",
            base: "grayBase",
        }
    }
}
</script>

<style scoped>
.footerBase{
    display: flex;
}
body {
    margin: 0;
}
</style>
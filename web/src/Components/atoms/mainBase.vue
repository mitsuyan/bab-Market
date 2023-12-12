<template>
    <div :class="base">
        <slot></slot>
    </div>
</template>
<script>
export default{
    props: {
        base: {
            type: String,
            default: "mainBase"
        }
    }
};
</script>
<style scoped>
.mainBase{
    display: flex;
    flex-direction: column; /* 列方向に配置 */
    align-items: center; /* 縦方向に中央揃え */
    width: 344px;
    height: 100vh;
    background-color: #FFFFFF;
    box-shadow: -4px 0px 6px #727C8E4E;

}

.grayBase{
    background: linear-gradient(180deg, #F5F6F8AD, #F5F6F8);
    width: 430pt;
    height: 78pt;
}

.outline{
    background-color: #FFFFFF;
    width: 428pt;
    height: 60pt;
    border: 0.5pt solid #707070;
}

.radius11 {
    background-color: #FFFFFF;
    width: 380pt;
    height: 90pt;
    border-radius: 11pt;
}

.transparent{
    opacity:0.2;
    background-color: #727C8E;
    width: 324pt;
    height: 139pt;
    border-radius: 7pt;
}
.yelloBase{
    background-color: #FFF9CE;
    width: 430px;
    height: 132px;
}

.reviewGrayBase{
    width: 374px;
    min-height: 86px;
    background-color: #F1F2F3;
    border-radius: 7px;
}
</style>
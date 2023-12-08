<template>
    <div :class="base"></div>
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
    width: 344pt;
    height: 935pt;
    background-color: #FFFFFF;
    box-shadow: 0 63pt 56pt #727C8E4E;
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
    width: 430pt;
    height: 114pt;
}
</style>
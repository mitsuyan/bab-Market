<template>
    <div :class="base" :style="{ height }"><slot></slot></div>
</template>
<script>
export default{
    props: {
        base: {
            type: String,
            default: "mainBase"
        },
        height: {
            type: String,
            required: true
        }
    }
};
</script>
<style scoped>
.mainBase{
    width: 323pt;
    background-color: #FFFFFF;
    box-shadow: 0 63pt 56pt #727C8E4E;
}

.grayBase{
    background: linear-gradient(180deg, #F5F6F8AD, #F5F6F8);
    width: 430pt;
}

.outline{
    background-color: #FFFFFF;
    width: 428pt;
    border: 0.5pt solid #707070;
}

.radius11 {
    background-color: #FFFFFF;
    width: 380pt;
    border-radius: 11pt;
}

.transparent{
    opacity:0.2;
    background-color: #727C8E;
    width: 324pt;
    border-radius: 7pt;
}
.yelloBase{
    background-color: #FFF9CE;
    width: 430pt;
}
</style>
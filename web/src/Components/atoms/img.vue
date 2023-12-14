<template>
    <img :src="`/image/${fileName}`" :alt="altName" :class="className">
</template>

<script>

export default{
    props: {
        fileName: {
            type: String,
            default: "back.svg",
        },
        altName:{
            type:String,
            default:"default",
        },
        className:{
            type:String,
            default:"back",
        }
    },
};
</script>

<style scoped>
.back{
    width: 10.29px;
}
.next{
    width: 10.29px;
 }

.cross{
    width: 19px;
 }

 .circleNext{
    width: 23.71px;
 }
</style>
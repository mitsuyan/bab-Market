<template>
    <img :src="`/image/${fileName}`" :alt="altName">
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
    },
};
</script>
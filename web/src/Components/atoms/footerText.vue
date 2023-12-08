<template>
    <link rel="stylesheet" href="https://use.typekit.net/oie4jfa.css">
    <p :class="level">{{ text }}</p>
</template>

<script>
export default{
    props: {
        level: {
            type: String,
            default: "level1",
        },
        text:{
            type:String,
            required: true
        }
    }
};
</script>


<style scoped>

.level1Selected{
    font-size:9px;
    font-family:neusa-next-std,'游ゴシック Bold', sans-serif;
    font-style:"Bold";
    font-weight: 700;
    color:#FF6969;
}

.level1{
    font-size:9px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#444444;
}
p{
    margin-block-start: 0;
    margin-block-end: 0;
}

</style>



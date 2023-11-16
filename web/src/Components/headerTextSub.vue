<template>
    <link rel="stylesheet" href="https://use.typekit.net/oie4jfa.css">
    <h2 :class="level">{{ text }}</h2>
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
            default:"defaultText　デフォルトテキスト"
        }
    }
};
</script>


<style scoped>

.level1{
    font-size:15px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-style: normal;
    font-weight: 400;
    color:#444444;
}

.level2{
    font-size:17px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#000000;
}

</style>



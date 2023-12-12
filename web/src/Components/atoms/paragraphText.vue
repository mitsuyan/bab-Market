<template>
    <link rel="stylesheet" href="https://use.typekit.net/oie4jfa.css">
    <p :class="level">
        {{ label }}
    </p>
</template>

<script>
export default{
    props: {
        level: {
            type: String,
            default: "level1",
        },
        label:{
            type:String,
            default: "defaulttext デフォルトテキスト",
        }
    }
};
</script>


<style scoped>

.level2{
    font-size:14px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#515C6F;
}

p{
    margin: 0;
}

</style>



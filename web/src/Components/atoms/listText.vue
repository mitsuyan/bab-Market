<template>
    <link rel="stylesheet" href="https://use.typekit.net/oie4jfa.css">
    <li :class="level">
        {{ label }}
    </li>
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

.level1{
    font-size:18px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#444444;
}

.level2{
    font-size:17px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#656565;
}
.level3{
    font-size:13px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#656565;
}

.level4{
    font-size:12px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#656565;
}

.level4Bold{
    font-size:12px;
    font-family:neusa-next-std,'游ゴシック Bold', sans-serif;
    font-weight: 700;
    font-style: normal;
    color:#656565;
}

</style>



<template>
    <link rel="stylesheet" href="https://use.typekit.net/oie4jfa.css">
    <div :class="level">
        {{ label }}
    </div>
</template>

<script>
export default{
    props: {
        level: {
            type: String,
            default: "level1",
        },
        label:{
            type: [String, Array],
            default: "デフォルトテキスト　defaulttext",
        }
    },
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

.level3{
    font-size:14px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#444444;
}

.level3Gray{
    font-size:14px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#656565;
}

.level3Bold{
    font-size:14px;
    font-family:neusa-next-std,'游ゴシック Bold', sans-serif;
    font-weight: 700;
    font-style: Bold;
    color:#444444;
}

.level3False{
    font-size:14px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#444444;
    opacity: 40%;
}

.level2{
    font-size:13px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#444444;
}

.level2Black{
    font-size:13px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#464646;
}

.level2BlackBold{
    font-size:13px;
    font-family:neusa-next-std,'游ゴシック Bold', sans-serif;
    font-weight: 700;
    font-style: normal;
    color:#000000;
}

</style>
<template>
    <link rel="stylesheet" href="https://use.typekit.net/oie4jfa.css">
    <label :class="level" :for="labelId">
        <slot>defaultText デフォルトのテキスト</slot>
    </label>
</template>

<script>
export default{
    props: {
        level: {
            type: String,
            default: "level1",
        },
        labelId:{
            type: Number,
            default: 1,
        }
    },
};
</script>


<style scoped>

::placeholder {
    color: #848383;
}

.textFormLabelGrayBlack{
    font-size:18px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#444444;
}
.textFormLabelBluegray{
    font-size:12px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#515C6F;
    opacity:0.5;
}

.textFormLabelGrayLevel1{
    font-size:17px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#656565;
}
.textFormLabelGrayLevel2{
    font-size:13px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#656565;
}

.textFormLabelBlackLevel1{
    font-size:16px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#000000;
}
.textFormLabelBlackLevel2{
    font-size:13px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#000000;
}

.textFormLevel1{
    font-size:16px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#515C6F;
}

.textFormLevel2{
    font-size:14px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#515C6F;
}

.textFormLevel3{
    font-size:13px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#515C6F;
}
.textFormLevel4{
    font-size:25px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 900;
    font-style: normal;
    color:#515C6F;
}

.textFormLevel5{
    font-size:22px;
    font-weight: 400;
    color:#464646;
}

.amountForm{
    font-size:17px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: Bold;
    color:#464646;
}
.level5{
    font-size:18px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#444444;
}

</style>
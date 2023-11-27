<template>
    <link rel="stylesheet" href="https://use.typekit.net/oie4jfa.css">
    <label :class="level">
        <slot></slot>
    </label>
</template>

<script>
export default{
    props: {
        level: {
            type: String,
            default: "level1",
        }
    }
};
</script>


<style scoped>

::placeholder {
    color: #848383;
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

.amountForm{
    font-size:17px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: Bold;
    color:#464646;
}

</style>
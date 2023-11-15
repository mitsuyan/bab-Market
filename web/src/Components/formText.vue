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

.textFormName{
    font-size:12px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#515C6F;
    opacity:0.5;
}

.textFormLevel1{
    font-size:16px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#515C6F;
}

.level3White{
    font-size:12px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#FFFFFF;
}

.level1Pink{
    font-size:17px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#FF6969;
}

.level2Pink{
    font-size:15px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#FF6969;
}

.level3Pink{
    font-size:13px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#FF6969;
}

.level1Gray{
    font-size:12px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#727C8E;
}

</style>



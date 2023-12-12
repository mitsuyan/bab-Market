<template>
    <link rel="stylesheet" href="https://use.typekit.net/oie4jfa.css">
    <h2 :class="level">{{ text }}</h2>
</template>

<script>
export default {
    props: {
        level: {
            type: String,
            default: "level1",
        },
        text: {
            type: String,
            default: "defaultText　デフォルトテキスト"
        }
    }
};
</script>


<style scoped>
.level2 {
    font-size: 15px;
    font-family: neusa-next-std, '游ゴシック Medium', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #444444;
    margin: 0;
}


.level2Pink {
    font-size: 15px;
    font-family: neusa-next-std, '游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #FF6969;
}

.level2PinkHeader {
    font-size: 15px;
    font-family: neusa-next-std, '游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #FF6969;
}

.level1 {
    font-size: 17px;
    font-family: neusa-next-std, '游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #000000;
}

.level1Bold {
    font-size: 18px;
    font-family: neusa-next-std, '游ゴシック Bold', sans-serif;
    font-weight: 700;
    font-style: Bold;
    color: #444444;
}

.level3Bold {
    font-size: 16px;
    font-family: neusa-next-std, '游ゴシック Bold', sans-serif;
    font-weight: 700;
    font-style: Bold;
    color: #000000;
}

.level3 {
    font-size: 16px;
    font-family: neusa-next-std, '游ゴシック Medium', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #000000;
    margin: 0;
}
</style>
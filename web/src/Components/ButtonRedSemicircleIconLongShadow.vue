<template>
    <a href="正しいリンク先" class="Process" :style="{
        'background-color': back_color,
        color: fore_color,
        padding: buttonPadding,
        width: buttonWidth
    }">
        購入手続きへ
    </a>
</template>

<script>
export default {
    props: {
        back_color: {
            type: String,
            default: "#FF6969",
        },
        fore_color: {
            type: String,
            default: "#ffffff",
        },
        buttonPadding: {
            type: String,
            default: "10px 70px 10px 40px",
        },
        buttonWidth: {
            type: String,
            default: "165px",
        },
    },
};
</script>

<style>
.Process {
    position: absolute;
    border-radius: 23px;
    font-size: 17px;
    text-decoration: none;
    background-color: #FF6969;
    /* 背景色を設定 */
    color: #ffffff;
    /* 文字色を設定 */
    box-shadow: 8pt 8pt 15pt #E7EAF0;
}

.Process::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 10px;
    /* 矢印の位置を調整 */
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ffffff;
    /* 白丸の色を設定 */
    display: flex;
    align-items: center;
    justify-content: center;
    content: '>';
    /* 矢印の内容 */
    font-size: 1em;
    font-weight: bold;
    color: #FF6969;
    /* 矢印の色を設定 */
}

</style>

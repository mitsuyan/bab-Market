<template>
    <div class="container">
        <button @click="goBack">
            <div class="backImg">
                <img src="../../assets/back.svg" alt="a">
            </div>
        </button>
            <div class="detailSvgMb"><svg xmlns="http://www.w3.org/2000/svg" width="69" height="84" viewBox="0 0 83 84">
            <ellipse id="楕円形_22" data-name="楕円形 22" cx="23" cy="22.5" rx="23" ry="22.5" transform="translate(0 31)" fill="#ff6969"/>
            <ellipse id="楕円形_23" data-name="楕円形 23" cx="28" cy="28.5" rx="28" ry="28.5" transform="translate(27 19)" fill="#ff6969"/>
            <text id="b" transform="translate(44 67)" fill="#fff" font-size="58" font-family="ZenMaruGothic-Bold, Zen Maru Gothic" font-weight="700"><tspan x="0" y="0">b</tspan></text>
            <text id="m" transform="translate(4 66)" fill="#fff" font-size="46" font-family="ZenMaruGothic-Bold, Zen Maru Gothic" font-weight="700"><tspan x="0" y="0">m</tspan></text>
        </svg></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'ヘッダー',
        };
    },
    methods: {
        goBack(){
            this.$router.go(-1);
            console.log(this.$router.history);
        }
    }
};
</script>


<style scoped>
.container {
    display: flex;
    align-items: center;
    width: 322.5pt;
}
.detailSvgMb {
    padding-left: 38%;
}
.backImg{
    padding-left: 2%;
}
button{
    background-color: white;
    border: none;
}
</style>



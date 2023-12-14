<template>
    <div class="backButton">
                <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        shohinLength: Number
    },
    methods:{
        goBack() {
            this.$router.go(-1); // 一つ前の画面に戻る
    },
    beforeRouteLeave(to, from, next) {
  // 遷移先が /LoginHome の場合
  if (sessionStorage.getItem("loginUserData") && to.path === '/LoginHome') {
    // 画面を更新する（リロード）
    location.reload();
  } else {
    // 遷移先が /LoginHome 以外でかつ非会員の場合は通常の遷移処理を続ける
    next();
  }
}
}
}
</script>
<style>
.shohinNumText{
    display: flex;
}
.level1{
    display: flex;
    align-items: center;
}
.borderLine{
    display: flex;
}
.comentTextBase{
    padding-left: 12pt;
    padding-top: 20pt;
}
</style>
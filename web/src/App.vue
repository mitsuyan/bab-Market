<!-- 親コンポーネント -->
<template>
  <div class="LoginForm">
    <div class="LoginText">
      <LoginText />
    </div>
    <div class="ButtoIcon">
      <!-- buttonWidth プロパティに新しい値を設定 -->
      <ButtonRedSemicircleIconLongShadow :buttonWidth="buttonWidth" />
    </div>
    <div><a href="">アカウント作成</a></div>
  </div>
</template>

<script>
import LoginText from './Components/LoginText.vue';
import ButtonRedSemicircleIconLongShadow from './Components/ButtonRedSemicircleIconLongShadow.vue';

export default {
  name: 'LoginMain',
  components: {
    LoginText,
    ButtonRedSemicircleIconLongShadow
  },
  data() {
    return {
      // ボタンの初期幅を変更
      buttonWidth: '330px',
    };
  },
}
</script>

<style>
.LoginForm {
  position: relative;
  /* background-color: #FFF1F1; */
  width: 430pt;
  height: 932pt;
}

.ButtoIcon {
  position: absolute;
  top: 262pt;
  left: 50pt;
  bottom: 624pt;
  box-shadow: 8pt 8pt 15pt #E7EAF0;
}

.LoginText{
  position: absolute;
  left: 50pt;
  top: 120pt;
  bottom: 720pt;
  box-shadow: 10pt 10pt 15pt #E7EAF0;
  border-radius: 10pt;
}
a{
  text-decoration: none;
}
</style>

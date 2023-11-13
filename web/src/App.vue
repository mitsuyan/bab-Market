<!-- 親コンポーネント -->
<template>
  <div class="Mbimg"><svg id="コンポーネント_128_14" data-name="コンポーネント 128 – 14" xmlns="http://www.w3.org/2000/svg" width="83" height="84" viewBox="0 0 83 84">
    <ellipse id="楕円形_22" data-name="楕円形 22" cx="23" cy="22.5" rx="23" ry="22.5" transform="translate(0 31)" fill="#ff6969"/>
    <ellipse id="楕円形_23" data-name="楕円形 23" cx="28" cy="28.5" rx="28" ry="28.5" transform="translate(27 19)" fill="#ff6969"/>
    <text id="b" transform="translate(44 67)" fill="#fff" font-size="58" font-family="ZenMaruGothic-Bold, Zen Maru Gothic" font-weight="700"><tspan x="0" y="0">b</tspan></text>
    <text id="m" transform="translate(4 66)" fill="#fff" font-size="46" font-family="ZenMaruGothic-Bold, Zen Maru Gothic" font-weight="700"><tspan x="0" y="0">m</tspan></text>
  </svg></div>
  <div class="LoginForm">
    <div class="LoginText">
      <LoginText />
    </div>
    <div class="ButtoIcon">
      <!-- buttonWidth プロパティに新しい値を設定 -->
      <ButtonRedSemicircleIconLongShadow :buttonWidth="buttonWidth" :text="text" />
    </div>
    <div class="CreateLink"><a href="">アカウント作成</a></div>
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
      buttonWidth: '220px',
      text: 'ログイン'
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
  left: 20%;
  bottom: 624pt;
}

.LoginText{
  position: absolute;
  left: 20%;
  top: 120pt;
  bottom: 720pt;
  box-shadow: 10pt 10pt 15pt #E7EAF0;
  border-radius: 10pt;
}
a{
  text-decoration: none;
}

.CreateLink {
  position: absolute;
  top: 391pt;
  left: 35%;
  
}

div.Mbimg {
  position: absolute;
  left: 16%;
}
</style>

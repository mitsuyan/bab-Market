<template>
  <body>
    <LoginText />
    <ButtonRedSemicircleIconLongShadow />
  </body>
</template>

<script>
import LoginText from './Components/LoginText.vue';
import ButtonRedSemicircleIconLongShadow from './Components/ButtonRedSemicircleIconLongShadow.vue';

export default {
  name: 'LoginMain',
  components: {
    LoginText,
    ButtonRedSemicircleIconLongShadow
  }
}
</script>

<style>
body{
  background-color: #FFF1F1;
}
</style>

<template>
  <div class="tradingEvaluationContainer">
    <div v-for="index in 5" :key="index" class="containerTitle" @click="toggleStar(index)">
      <Img className="evaluationStar" fileName="star.svg" v-if="amount >= index"></Img>
      <Img className="evaluationStar" fileName="starFalse.svg" v-else></Img>
    </div>
  </div>
</template>
  
<script>
import Img from './../atoms/imgComp.vue';

export default {
  components: {
    Img,
  },
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    toggleStar(index) {
      this.amount = index;
    },
  },
};
</script>
  
<style scoped>
.tradingEvaluationContainer {
  display: flex;
  gap: 9.5px;
}

.containerTitle {
  cursor: pointer;
  /* クリック可能な要素にはカーソルを変更するのが一般的 */
}
</style>
  
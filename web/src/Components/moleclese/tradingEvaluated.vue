<template>
    <div class="tradingEvaluatedContainer">
      <div v-for="index in 5" :key="index" class="containerTitle">
        <imgComp className="evaluationStarLevel2" fileName="star.svg" v-if="amount >= index"></imgComp>
        <imgComp className="evaluationStarLevel2" fileName="starFalse.svg" v-else></imgComp>
      </div>
    </div>
  </template>
  
  <script>
  import imgComp from '../atoms/imgComp.vue';
  
  export default {
    components: {
      imgComp,
    },
    props: {
        amount:{
            type:Number,
            default:4,
        }
    },
  };
  </script>
  
  <style scoped>
  .tradingEvaluatedContainer {
    display: flex;
    gap: 1.75px;
  }
  </style>
  
<template>
    
     <mainBase base="reviewGrayBase">
        <div class="tradingReviewContainer">
          <div class="reviewTitle">
            <menuText level="level2BlackBold" :label="`${name}からの評価`"></menuText>
          </div>
          <div class="rate">
            <tradingEvaluated></tradingEvaluated>
          </div>
        </div>
        <div class="reviewText">
          <paragraphText level="level2" :label="review"></paragraphText>
        </div>
     </mainBase>
  </template>
  
  <script>
  import mainBase from './../atoms/mainBase.vue';
  import menuText from './../atoms/menuText.vue';
  import tradingEvaluated from './../moleclese/tradingEvaluated.vue';
  import paragraphText from './../atoms/paragraphText.vue';
  
  export default {
    components: {
      mainBase,
      menuText,
      tradingEvaluated,
      paragraphText,
    },
    data() {
      return {
        amount: 0,
      };
    },
    props: {
        name:{
            type:String,
            default:"もつべび太郎",
        },
        review:{
          type:String,
          default:"G.O.D"
        }
    },
    methods: {
      toggleStar(index) {
        this.amount = index;
      },
    },
  };
  </script>
  
  <style scoped>
  .tradingReviewContainer {
    display: flex;
    justify-content: center;
  }

  .reviewTitle{
    padding-top: 2px;
  }

  .rate{
    padding-top: 2px;
    margin-left: 141px;
  }

  .reviewText{
    margin-left: 5px;
  }
  </style>
  
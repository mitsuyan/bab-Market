<template>
     <mainBase base="reviewGrayBase">
          <inputText className="review" :defaultText="defaultReview"></InputText>
      </mainBase>
  </template>
  
  <script>
  import mainBase from './../atoms/mainBase.vue';
  import inputText from './../atoms/inputText.vue';

  export default {
    components: {
      mainBase,
      inputText,
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
        },
        defaultReview:{
          type:String,
          default:"取引完了後、評価コメントは変更できません。このコメントは取引完了後に評価一覧で公開されます。"
        },
    },
    methods: {
      toggleStar(index) {
        this.amount = index;
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    width: 100%;
    height:100%;
    justify-content: center;
    align-items: center;
  }
  </style>
  
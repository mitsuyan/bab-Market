<template>
      <textarea ref="resizableTextarea" :class="className" :placeholder="defaultText" :value="text" @input="autoResize"></textarea>
  </template>
  
  <script>  
  export default {
    props: {
      checkBoxLevel: {
        type: String,
        default: "",
      },
      defaultText:{
        type: String,
        default: "",
      },
      className:{
        type: String,
        default: "",
      }
    },
    data(){
        return {
            text: ''
        }
    },
    methods: {
        autoResize() {
        const textarea = this.$refs.resizableTextarea;
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight) + 'px';
        }
    },
  };
  </script>
  
  <style scoped>
  .review{
    background-color: transparent;
    border: none;
    outline: none;
    resize:none;
    box-sizing: border-box;

    width:100%;
    height:70px;
    font-size:14px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#444444;
  }
  </style>
  
<template>
        <input type="checkbox" v-model="isChecked" />
        <div  @click="handleChange" >
            <img src="../../assets/checked.svg" alt="checked">
        </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isChecked: false,
      };
    },
    methods: {
      handleChange() {
        this.isChecked = !this.isChecked;
        console.log('Checkbox value changed:', this.isChecked);
      },
    },
  };
  </script>
  
  <style scoped>
  input[type=checkbox]{
    display: none;
  }
  
  input[type=checkbox] + div{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 19px;
    height: 19px;
    border: 2px solid #969696;
    border-radius: 4px;
    cursor: pointer;
  }
  
  input[type=checkbox]:checked + div{
    border: 2px solid #969696;
  }

  input[type=checkbox] + div > img{
    opacity: 0%;
    width: 10.55px;
    transition: opacity 200ms 0s ease;
  }

  input[type=checkbox]:checked + div > img{
    opacity: 100%;
    width: 10.55px;
  }
  </style>
  
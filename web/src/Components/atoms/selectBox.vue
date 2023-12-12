<template>
    <div class="selectBox">
      <label for="selectInput">{{ label }}</label>
      <select id="selectInput" v-model="selectedValue" @change="handleChange">
        <option v-for="(option, index) in options" :key="index" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </template>

  <script>
  export default {
    props: {
      label: {
        type:String,
        dwfault:"default",
      },
      options:{
        type:Array,
        default:() => ([
        { label: "オプション1", value: "option1" },
        { label: "オプション2", value: "option2" },
        { label: "オプション3", value: "option3" },
      ]),
      } ,
      value: String,
    },
    data() {
      return {
        selectedValue: this.value || (this.options.length > 0 ? this.options[0].value : ''),
      };
    },
    methods: {
      handleChange() {
        this.$emit('input', this.selectedValue);
      },
    },
  };
  </script>
  
  <style scoped>
  select,option{
    border:none;
    border:#707070 1px solid;
  }

  select{
    height: 22px;
    width:129px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(../../assets/selectVector.svg);
    background-position: right 6px center;
    background-repeat: no-repeat;
    background-size: 13px 13px;

  }
  
  </style>
  
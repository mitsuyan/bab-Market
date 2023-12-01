<template>
  <div :class="containerLevel" @click="handleChange" :id="id">
    <input type="checkbox" :checked="checked" />
    <div :class="checkBoxLevel">
      <Img fileName="checked.svg" altName="checked" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Img from '../atoms/img.vue';

export default {
  components: {
    Img,
  },
  props: {
    checkBoxLevel: {
      type: String,
      default: "",
    },
    majorId:{
      type: Number,
    },
    id: {
      type: Number,
    },
    containerLevel: {
      type: String,
      default: "defaultClass",
    },
    checked: {
      type: Boolean,
      default:false,
    },
  },
  methods: {
    handleChange() {
      this.$emit('change', this.id ,!this.checked,this.majorId);
    },
  },
};
</script>

<style scoped>
.containerLevel1 {
  display: flex;
  height: 50px;
  width: 315px;
  align-items: center;
  gap: 29px;
  background-color: white;
  transition: background-color 100ms 0s ease;
}

.containerLevel1:active {
  background-color: #f8f8f8;
  transition: background-color 100ms 0s ease;
}

input[type=checkbox] {
  display: none;
}

input[type=checkbox] + .checkBoxGray {
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

input[type=checkbox]:checked + .checkBoxGray {
  border: 2px solid #969696;
}

input[type=checkbox] + .checkBoxGray > Img {
  opacity: 0%;
  width: 10.55px;
  transition: opacity 200ms 0s ease;
}

input[type=checkbox]:checked + .checkBoxGray > Img {
  opacity: 100%;
  width: 10.55px;
}
</style>

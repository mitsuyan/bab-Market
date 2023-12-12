<template>
  <div @click="toggleMenu" :id="id">
    <slot></slot>
  </div>
</template>
  
<script>
export default {
  props: {
    id: {
      type: Number,
      default: 1,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleMenu() {
      this.$emit('isToggle', this.id, !this.open);
      console.log(this.id, this.open);
    },
  },
};
</script>
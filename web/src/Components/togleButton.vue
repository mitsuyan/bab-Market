<template>
    <div @click="toggleMenu">
        <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      toggleMenu() {
        this.$emit('toggleMenu');
      },
    },
  };
  </script>
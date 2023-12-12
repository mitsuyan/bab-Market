<template>
    <div class="circleColor" :style="{ backgroundColor: circleColor }" @click="testComponent">
    </div>
</template>
  
<script>
export default {
    props: {
        circleColor: {
            type: String,
            default: "#111111",
        }
    },
    methods: {
        testComponent() {
            console.log(this.circleColor);
        }
    }
};
</script>

<style scoped>
.circleColor {
    width: 23.71px;
    height: 23.71px;
    border-radius: 50%;
}
</style>
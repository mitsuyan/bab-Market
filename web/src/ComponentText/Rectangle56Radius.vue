<template>
    <input type="text" class="Radius56" v-model="text">
</template>

<script>
export default {
    props: {
        inText: {
            type: String,
            default: "Text"
        }
    },
    data() {
        return {
            text: this.inText.default
        };
    }
};
</script>

<style scoped>
input.Radius56 {
    border: 1pt solid #AEADAD;
    border-radius: 4pt;
    width: 222pt;
    height: 19pt;
    padding-left: 10pt;
    padding-right: 10pt;
}

input.Radius56:focus {
    outline: none;
}
</style>
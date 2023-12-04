<template>
    <input type="text" class="grayRadius21" v-model="text">
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
input.grayRadius21 {
    background-color: #727C8E;
    border: none;
    border-radius: 7pt;
    width: 147pt;
    height: 25pt;
    padding-left: 13pt;
    padding-right: 13pt;
}

input.grayRadius21:focus {
    outline: none;
}
</style>
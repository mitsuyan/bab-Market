<template>
    <input class="noIncludedRadius" v-model="text">
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => ({ text: "Text" })
        }
    },
    data() {
        return {
            text: this.data.text
        };
    }
};
</script>

<style scoped>
input.noIncludedRadius {
    border: 1pt solid #AEADAD;
    border-radius: 4pt;
    resize: none;
    width: 176pt;
    height: 20pt;
    padding: 10pt 20pt;
}

input.noIncludedRadius:focus {
    outline: 1pt solid #AEADAD;
}
</style>
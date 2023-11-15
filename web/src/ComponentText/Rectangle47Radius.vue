<template>
    <textarea class="Radius47" v-model="text" >{{ text }}</textarea>
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
textarea.Radius47 {
    border: 1pt solid #A2A2A2;
    border-radius: 3pt;
    resize: none;
    width: 268pt;
    height: 130pt;
    padding: 2pt 7pt;
}

textarea.Radius47:focus {
    outline: 1pt solid #A2A2A2;
}
</style>
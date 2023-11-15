<template>
    <input type="text" class="grayRadius18" v-model="text">
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
input.grayRadius18 {
    background-color: #727C8E;
    border: none;
    border-radius: 18pt;
    width: 147pt;
    height: 25pt;
    padding-left: 50pt;
    padding-right: 50pt;
}
input.grayRadius18:focus {
outline: none;
}

</style>
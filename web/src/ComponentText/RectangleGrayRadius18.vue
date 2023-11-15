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

<style>
.grayRadius18 {
    background-color: #727C8E;
    border: none;
    border-radius: 18pt;
    width: 243pt;
    height: 25pt;
}
</style>
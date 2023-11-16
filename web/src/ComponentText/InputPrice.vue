<template>
    <input type="text" class="inputNumber" v-model="text" @input="handleInput">
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => ({ text: "￥000" })
        }
    },
    data() {
        return {
            text: this.data.text
        };
    },
    methods: {
        handleInput(event) {
            // 既に存在する場合は￥を削除してから再度追加
            this.text = `￥${event.target.value.replace('￥', '')}`;
        }
    }
};
</script>

<style scoped>
.inputNumber {
    border: none;
    outline: none;
    border-bottom: 1px solid #727C8E;
    text-align: right;
    width: 282pt;
    height: 36pt;
}

.inputNumber:focus {
    border-bottom-color: #727C8E;
}
</style>

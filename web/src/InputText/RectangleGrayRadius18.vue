<template>
    <input type="text" class="GrayRadius18" :text="text">
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "Text"
        }
    }
};
</script>
<template>
    <input type="text" class="grayRadius18" :text="text">
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
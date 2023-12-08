<template>
<ul class="menuList" :class="list">
    <slot></slot>
</ul>
</template>

<script>
export default{
    props: {
        list: {
            type: String,
            default: "level1",
        }
    }
};
</script>

<style scoped>
/* スタイルは省略 */
.menuList {
    list-style: none;
}

.level1{
    margin-top: 13px;
    margin-bottom: 13px;
    width: 315px;
}

.level2{
    margin-top: 12px;
    margin-bottom: 12px;
    width: 382px;
}
</style>
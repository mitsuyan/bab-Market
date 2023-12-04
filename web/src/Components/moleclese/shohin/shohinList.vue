<template>
    <div class="homeTab">
        <div class="productContainer">
            <div class="scrollableContent">
                <shohinDisplay />
            </div>
        </div>
    </div>
</template>

<script>
import shohinDisplay from './shohinDisplay.vue';
export default {
    components: {
        shohinDisplay
    },
}
</script>


<style scoped>
.homeTab {
    width: 323pt;
    background-color: #ffffff;
    overflow-x: hidden;
}
.productContainer {
    overflow-y: auto;
    max-height: calc(100vh - 36pt);
    /* タブナビゲーションの高さを考慮 */
}
.scrollableContent {
    max-height: 100%;
    overflow-y: auto;
}
</style>
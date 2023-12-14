<template>
    <div class="refineHeadercontainer">
            <img src="../../assets/back.svg" alt="a">
        <div>
            <headerText level="level2" :headerText="title"></headerText>
        </div>
        <div>
        </div>
    </div>
</template>

<script>
import headerText from '../atoms/headerText.vue';
export default {
    components: {
        headerText
    },
    props: {
        id: {
            type: Number,
        },
        title: {
            type: String,
        }
    },
    methods: {
    }
};
</script>


<style scoped>
.refineHeadercontainer {
    display: flex;
    width: 90%;
    justify-content: space-between;
    /* 要素を均等に配置 */
    align-items: center;
    margin-top: 13px;
    margin-bottom: 13px;
    border-bottom: 1px solid #c2c2c2;
}
</style>
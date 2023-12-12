<template>
    <div class="refineHeadercontainer">
        <toggleButton :id="id" :open="isOpen" @isToggle="toggleChange">
            <img src="../../assets/back.svg" alt="a">
        </toggleButton>
        <div>
            <headerText level="level2" :headerText="title"></headerText>
        </div>
        <div>
            <headerTextSub level="level2PinkHeader" :text="'クリア'"></headerTextSub>
        </div>
    </div>
</template>

<script>
import headerText from '../atoms/headerText.vue';
import headerTextSub from '../atoms/headerTextSub.vue';
import toggleButton from '../atoms/togleButton.vue';
export default {
    components: {
        headerText,
        headerTextSub,
        toggleButton
    },
    props: {
        id: {
            type: Number,
        },
        title: {
            type: String,
        },
        isOpen: {
            type: Boolean,
        }
    },
    methods: {
        toggleChange(majorId, isOpen) {
            this.$emit('isOpen1', { majorId, isOpen });
            console.log(majorId);
        }
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
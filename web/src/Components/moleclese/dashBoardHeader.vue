<template>
    <div class="container">
        <toggleButton :id="id" @isToggle="toggleChange" :open="isOpen">
            <Img fileName="back.svg" className="back"  />
        </toggleButton>
        <headerText level="level2" :headerText="title"></headerText>
        <div></div>
    </div>

</template>

<script>
import headerText from '../atoms/headerText.vue';
import headerTextSub from '../atoms/headerTextSub.vue';
import Img from '../atoms/img.vue';
import toggleButton from '../atoms/togleButton.vue'

export default{
    components:{
        headerText,
        headerTextSub,
        Img,
        toggleButton,
    },
    props:{
        receivedValue: {
            type: Number,
        },
        title:{
            type: String,
            default: 'ヘッダー',
        },
        id:{
            type: Number,
        },
        isOpen:{
            type: Boolean,
            default:false,
        },
    },
    methods:{
        toggleChange(majorId,isOpen) {
            // イベントを発火する
            this.$emit('isOpen1', { majorId, isOpen });
        },
    }
};
</script>


<style scoped>

.container {
    display: flex;
    justify-content: space-between; /* 要素を均等に配置 */
    align-items: center;
    margin-top: 13px;
    margin-bottom: 13px;
    border-bottom: 1px solid #c2c2c2;
    width:344px;
}

.container > :first-child {
    margin-left: 10px;
}

.container > :last-child {
    margin-right: 10px;
}

</style>



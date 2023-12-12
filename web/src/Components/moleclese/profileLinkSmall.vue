<template>
    <div class="container">
        <div class="profileImg">
            <profileImg className="circleSmall" imgName="gorira.png" ></profileImg>
        </div>
        <div class="headerText">
            <headerText level="level2" :headerText="title"></headerText>
        </div>
        <div class="next">
            <Img fileName="next.svg" className="next"/>
        </div>
    </div>

</template>

<script>
import headerText from '../atoms/headerText.vue';
import profileImg from '../moleclese/profileImg.vue';
import Img from '../atoms/imgComp.vue';

export default{
    components:{
        headerText,
        profileImg,
        Img,
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
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #c2c2c2;
    border-top: 1px solid #c2c2c2;
    width:380px;
}

.profileImg{
    margin-left: 2px;
}

.headerText{
    margin-left: 25px;
}

.next{
    margin-left: auto;
    margin-right: 2px;
}

</style>



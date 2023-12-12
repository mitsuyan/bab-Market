<template>
    <div :class="className">
        <imgComp :className="className" :fileName="`../img/${imgName}`"></imgComp>
    </div>
</template>

<script>
import imgComp from '../atoms/imgComp.vue';

export default{
    components:{
        imgComp,
    },
    props: {
        imgName:{
            type:String,
            default:'gorira.png'
        },
        className:{
            type:String,
        }

    },

};
</script>

<style scoped>
    .circleSmall{
        width:60px;
        height:60px;
        border-radius: 50%;
    }
    .circleMedium{
        width:72px;
        height:72px;
        border-radius: 50%;
    }
</style>



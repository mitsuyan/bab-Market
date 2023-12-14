<template>
    <div class="imgCom">
        <img :src="`/dist/image/${fileName}`" :alt="altName" :class="className">
        <div><formText :level="level6">{{ text }}</formText></div>
    </div>
</template>

<script>
import formText from './formText.vue';
export default{
    data(){
        return{
            level6: 'level6'
        }
    },
    components: {
        formText
    },
    props: {
        fileName: {
            type: String,
            default: "back.svg",
        },
        altName:{
            type:String,
            default:"default",
        },
        className:{
            type:String,
            default:"back",
        },
        text:String,
    },
};
</script>

<style scoped>

.back{
    width: 10.29px;
}
.next{
    width: 10.29px;
}

.cross{
width: 19px;
}

.circleNext{
width: 23.71px;
}

.clock{
width: 24.75px;
}

.niconico{
width: 24.75px;
}

.circleSmall{
object-fit: cover;
width: 60px;
height: 60px;
border-radius: 50%;
}

.circleMedium{
object-fit: cover;
width: 60px;
height: 60px;
border-radius: 50%;
}

.evaluationStar{
height:30px;
}

.evaluationStarLevel2{
height:15px;
}
.title{
height:84px;
}

.circleVector{
height:29.8px;
}
.imgCom{
    display: flex;
    justify-content: end;
    padding-right: 20px;
}
.circleLarge {
    object-fit: cover;
    width: 95px;
    height: 95px;
    border-radius: 50%;
}
</style>
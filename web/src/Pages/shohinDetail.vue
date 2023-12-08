<template>
    <mainBase :base="mainBase">
        <detailHeader />
        <div class="center-container">
            <img src="/img/logo.png" class="shohinDetailImg">
        </div>
            <shohinName />
            <ShohinInformation />
            <shohinExplanation />
            <ShohinSellorTest />
            <shohinDetailfooter />
    </mainBase>
</template>
<script>
import detailHeader from '../Components/moleclese/detailHeader.vue';
import shohinName from '../Components/moleclese/shohin/shohinName.vue';
import shohinExplanation from '../Components/moleclese/shohin/shohinExplanation.vue';
import ShohinInformation from '../Components/moleclese/shohin/shohinInformation.vue';
import ShohinSellorTest from '../Components/moleclese/shohin/shohinSellorTest.vue';
import mainBase from '../Components/mainBase.vue';
import shohinDetailfooter from '../Components/moleclese/shohinDetailfooter.vue';

export default {
    name: 'shohinDetail',
    components: {
        shohinExplanation,
        ShohinInformation,
        ShohinSellorTest,
        mainBase,
        shohinDetailfooter,
        detailHeader,
        shohinName
    },
    data(){
        return{
            mainBase: 'mainBase',
            hei: '1210pt'
        }
    }
}
</script>

<style scoped>
.center-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
img.shohinDetailImg{
    align-items: center;
    width: 218pt;
    height: 218pt;
}
</style>
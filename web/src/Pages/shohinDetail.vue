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
import detailHeader from '../Component/header/detailHeader.vue';
import shohinName from '../Component/shohin/shohinName.vue';
import shohinExplanation from '../Component/shohin/shohinExplanation.vue';
import ShohinInformation from '../Component/shohin/shohinInformation.vue';
import ShohinSellorTest from '../Component/shohin/shohinSellorTest.vue';
import mainBase from '../Component/mainBase.vue';
import shohinDetailfooter from '../Component/footer/shohinDetailfooter.vue';

export default {
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
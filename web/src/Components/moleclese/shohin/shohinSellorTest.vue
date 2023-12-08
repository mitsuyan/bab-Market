<template>
    <div class="sellBase">
        <buttonText :level="level2Pink" :propText="text" />
        <div class="sellorMain">
            <img src="/img/logo.png" class="selimg" />
            <div class="sellorSubMain">
                <div class="imageText">mitsukun</div>
                <div class="sellorEvaluation">
                    <div class="sellorImg">
                        <div class="sellorAverage">4.9</div>
                        <svg id="rating" xmlns="http://www.w3.org/2000/svg" width="28.583" height="13.944"
                            viewBox="0 0 28.583 13.944">
                            <rect id="長方形_12" data-name="長方形 12" width="28.583" height="13.944" rx="6.972"
                                transform="translate(0 0)" fill="#ff6969" />
                            <path id="パス_12" data-name="パス 12"
                                d="M57.67,69.9l2.268,1.439-.6-2.715,2-1.826L58.7,66.56,57.67,64l-1.031,2.56L54,66.8l2,1.826-.6,2.715Z"
                                transform="translate(-50.33 -61.064)" fill="#fff" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import buttonText from '../../atoms/buttonText.vue';

export default {
    components: {
        buttonText,
    },
    data() {
        return {
            //大見出し
            level2Pink: 'level2Pink',
            textFormLevel2: 'textFormLevel2',
            text: "出品者",
        }
    }  
};
</script>

<style scoped>
.sellBase{
    padding-left: 32pt;
}
.sellorAverage {
    font-size: 6pt;
    position: absolute;
    padding-left: 12px;
    padding-top: 1px;
    margin: 0;
    font-weight: 900;
    color: #ffffff;
}
.sellorMain {
    display: flex;
    padding-top: 10pt;
}
.sellorSubMain {
    padding-left: 30pt;
}
.sellorImg {
    display: flex;
    position: relative;
}

img.selimg {
    width: 45pt;
    height: 45pt;
    overflow: hidden;
    border-radius: 50%;
}
.imageText {
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
}
</style>
<template>
    <div class="shohinNameBase">
        <!-- Goodボタン -->
        <div class="shohinGood" @click="toggleLike">
            <svg v-if="liked" xmlns="http://www.w3.org/2000/svg" width="19.25" height="16.079" viewBox="0 0 19.25 16.079">
            <path id="Icon_-_Heart" data-name="Icon - Heart" d="M2540.273-1077.512c-2.658-1.011-4.71.689-6.4,2.505a14.5,14.5,0,0,0-2.239-2.066,4.673,4.673,0,0,0-3.044-.667c-2,.132-3.26,1.853-3.992,3.577-.93,2.192.134,4.335,1.539,6.042a53.177,53.177,0,0,0,5.625,5.573,3.243,3.243,0,0,0,3.155.639c1.262-.442,2.309-1.762,3.249-2.662,2-1.915,4.766-4.171,5.275-7.049C2543.809-1073.719,2542.337-1076.727,2540.273-1077.512Zm1.777,6.21c-.665,1.974-2.41,3.5-3.853,4.924q-1.13,1.117-2.3,2.192c-.938.862-2.02,1.7-3.239.739-1.46-1.31-2.881-2.663-4.246-4.071-1.277-1.318-2.945-2.96-2.916-4.94.021-1.574,1.432-3.836,3.092-4.012,2.162-.228,3.51,1.38,4.832,2.856a.642.642,0,0,0,.9,0c1.37-1.531,2.954-3.363,5.237-2.8a3.461,3.461,0,0,1,1.92,1.824A3.7,3.7,0,0,1,2542.05-1071.3Z" transform="translate(-2524.246 1077.814)" fill="#464646"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20.072" height="15.669" viewBox="0 0 20.072 15.669">
            <path id="Icon_-_Heart_Solid" data-name="Icon - Heart Solid" d="M7.875,14.977l-.056-.042a1.057,1.057,0,0,1-.127-.092A46.074,46.074,0,0,1,1.65,9.189C.249,7.5-.556,5.47.448,3.425,1.36,1.562,2.759.075,5.069.046,7.221.02,8.659,1.165,10.028,2.523,11.753.846,13.754-.565,16.444.225A5.759,5.759,0,0,1,20.037,5.94c-.4,2.793-3.2,4.964-5.251,6.8-1.4,1.258-3.034,2.926-4.892,2.926A3.464,3.464,0,0,1,7.875,14.977Z" transform="translate(0 0)" fill="#ff6969"/>
            </svg>
        </div>
        <div class="shohinName">
            <formText :level="textFormLevel1">商品名をここに記入</formText>
            <formText :level="textFormLevel1">￥00000</formText>
        </div>
    </div>
</template>

<script>
import formText from '../../atoms/formText.vue';

export default {
    components: {
        formText
    },
    data() {
        return {
            liked: false,
            disliked: false,
            textFormLevel1: 'textFormLevel1'
        };
    },
    methods: {
        toggleLike() {
            // Good ボタンの状態を切り替える
            this.liked = !this.liked;
            // Not Good ボタンが押されていればその状態もリセット
            if (this.disliked) {
                this.disliked = false;
            }
        }
    },
};
</script>

<style>
.shohinGood{
    width: 17pt;
    height: 15pt;
}
.shohinNameBase{
    display: flex;
}
.shohinGood{
    margin: 4pt 40pt;
}
.shohinName{
    display: flex;
    flex-flow: column;
    text-align: center;
}
</style>
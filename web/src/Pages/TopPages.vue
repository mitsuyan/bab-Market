<template>
    <mainBase :height="mainHeight">
        <div v-if="tapDetail">
        <tabContent>
            <template v-slot:1>
                <!-- 1番目のタブのコンテンツ -->
                    <tabNavigation @tapTop="tapJudg"/>
            </template>
            <template v-slot:2>
                <!-- 2番目のタブのコンテンツ -->
                <div>
                    <searchPage />
                </div>
            </template>
            <template v-slot:3>
                <!-- 3番目のタブのコンテンツ -->
                <div>Content for Tab 3</div>
            </template>
            <template v-slot:4>
                <!-- 4番目のタブのコンテンツ -->
                <div>
                    <myPage />
                </div>
            </template>
        </tabContent>
        </div>
        <div v-else>
            <router-view></router-view>
        </div>
    </mainBase>
</template>

<script>
import tabNavigation from '../Components/moleclese/tab/tabNavigation.vue';
import mainBase from '../Components/mainBase.vue';
import tabContent from '../Components/moleclese/tab/tabContent.vue';
import myPage from './myPage.vue';
import searchPage from './searchPage.vue';

export default {
    components: {
        tabNavigation,
        mainBase,
        tabContent,
        myPage,
        searchPage,
    },
    data() {
        return {
            tabJudg: true,
            mainHeight: window.innerHeight + 'px', // 画面の高さを取得して設定
        };
    },
    mounted() {
        // ウィンドウのリサイズ時に高さを更新
        window.addEventListener('resize', this.updateHeight);
    },
    methods: {
        updateHeight() {
            this.mainHeight = window.innerHeight + 'px';
        },
        tapJudg(){
            return this.tabJudg = false;
        }
    },
    computed: {
        tapDetail(){
            return this.tabJudg == true;
        }
    }
};
</script>


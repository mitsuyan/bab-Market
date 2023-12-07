<template>
    <mainBase :height="mainHeight">
        <tabContent :show="show">
            <template v-slot:1>
                <!-- 1番目のタブのコンテンツ -->
                <div>
                    <footerNavigation />
                </div>
            </template>
            <template v-slot:2>
                <!-- 2番目のタブのコンテンツ -->
                <div>Content for Tab 2</div>
            </template>
            <template v-slot:3>
                <!-- 3番目のタブのコンテンツ -->
                <div>Content for Tab 3</div>
            </template>
            <template v-slot:4>
                <!-- 4番目のタブのコンテンツ -->
                <div>
                    <mypage />
                </div>
            </template>
        </tabContent>
    </mainBase>
</template>

<script>
import headerHome from '../Components/moleclese/headerHome.vue';
import footerNavigation from '../Components/moleclese/footerNavigation.vue';
import mainBase from '../Components/mainBase.vue';
import tabContent from '../Components/moleclese/tab/tabContent.vue';
import mypage from './myPage.vue';

export default {
    name: 'MyPage',
    components: {
        headerHome,
        footerNavigation,
        mainBase,
        tabContent,
        mypage
    },
    data() {
        return {
            mainHeight: '430pt',
            show: '1'
        };
    },
    methods: {
        selectTab(tabId) {
            this.show = tabId;
        }
    }
};
</script>


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
import headerHome from '../Component/navigation/headerHome.vue';
import footerNavigation from '../Component/navigation/footerNavigation.vue';
import mainBase from '../Component/mainBase.vue';
import tabContent from '../Component/navigation/tabContent.vue';
import mypage from './mypage.vue';

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


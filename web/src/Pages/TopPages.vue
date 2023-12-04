<template>
    <mainBase :height="mainHeight">
        <tabContent>
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
                    <myPage />
                </div>
            </template>
        </tabContent>
    </mainBase>
</template>

<script>
import footerNavigation from '../Components/moleclese/footerNavigation.vue';
import mainBase from '../Components/mainBase.vue';
import tabContent from '../Components/moleclese/tab/tabContent.vue';
import myPage from './myPage.vue';

export default {
    components: {
        footerNavigation,
        mainBase,
        tabContent,
        myPage
    },
    data() {
        return {
            mainHeight: '430pt',
        };
    }
};
</script>


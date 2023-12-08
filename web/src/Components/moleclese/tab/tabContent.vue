<!-- フッターボタン -->
<template>
    <div class="tabContent">
        <div v-if="show === '1'">
            <slot name="1"></slot>
        </div>
        <div v-else-if="show === '2'">
            <slot name="2"></slot>
        </div>
        <div v-else-if="show === '3'">
            <slot name="3"></slot>
        </div>
        <div v-else-if="show === '4'">
            <slot name="4"></slot>
        </div>
        <div class="tabGroup">
            <ul class="tabnav">
                <li v-for="tab in tabs" :key="tab.id" @click="select(tab.id)" :class="{ 'active': show === tab.id }">
                    <component :is="tab.component" :level="tab.level" :fill="tab.fill" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import tabSearchNav from './tabSearchNav.vue';
import tabBuyNav from './tabBuyNav.vue';
import tabHomeNav from './tabHomeNav.vue';
import tabMypageNav from './tabMypageNav.vue';

export default {
    components: {
        tabSearchNav,
        tabHomeNav,
        tabBuyNav,
        tabMypageNav
    },
    data() {
        return {
            tabs: [
                { id: '1', component: 'tabHomeNav', level: 'level1', fill: '#515c6f' },
                { id: '2', component: 'tabSearchNav', level: 'level1', fill: '#515c6f' },
                { id: '3', component: 'tabBuyNav', level: 'level1', fill: '#515c6f' },
                { id: '4', component: 'tabMypageNav', level: 'level1', fill: '#515c6f' }
            ],
            show:"1"
        };
    },
    methods: {
        select(tabId) {
            this.show = tabId;
            this.tabs.forEach((tab) => {
                if (tab.id === tabId) {
                    tab.fill = '#FF6969';
                    tab.level = 'level1Selected';
                } else {
                    tab.fill = '#515c6f';
                    tab.level = 'level1';
                }
                return true;
            });
        }
    }
};
</script>

<style scoped>
.tabGroup {
    position: fixed;
    z-index: 10000;
    bottom: 1px;
}

.tabnav {
    display: flex;
    list-style-type: none;
    width: 323pt;
    height: 45pt;
}

.tabnav li {
    cursor: pointer;
    width: 50%;
    background: #ffffff;
}

.tabnav li.active {
    color: #FF6969;
}

ul {
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
}
</style>

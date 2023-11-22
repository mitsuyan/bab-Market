<template>
    <!-- <div class="tabContent">
        <div v-if="show === '1'" class="tabcontentList">タブ1の内容</div>
        <div v-else-if="show === '2'" class="tabcontentList">タブ2の内容</div>
        <div v-else-if="show === '3'" class="tabcontentList">タブ3の内容</div>
        <div v-else-if="show === '4'" class="tabcontentList">タブ4の内容</div>
    </div> -->
        <div class="tabGroup">
            <ul class="tabnav">
                <li @click="select('1', '#FF6969', 'level1Selected')" :class="{ 'active': show === '1', 'level1Selected': show === '1' }">
                    <tabHomeNav :level="level1" :fill="fill1" />
                </li>
                <li @click="select('2', '#FF6969', 'level1Selected')" :class="{ 'active': show === '2' }">
                    <tabSearchNav :level="level2" :fill="fill2" />
                </li>
                <li @click="select('3', '#FF6969', 'level1Selected')" :class="{ 'active': show === '3', 'level1Selected': show === '3' }">
                    <tabBuyNav :level="level3" :fill="fill3" />
                </li>
                <li @click="select('4', '#FF6969', 'level1Selected')" :class="{ 'active': show === '4' }">
                    <tabMypageNav :level="level4" :fill="fill4" />
                </li>
            </ul>
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
                show: "1",
                fill1: "#515c6f",
                level1: 'level1',
                fill2: "#515c6f",
                level2: 'level1',
                fill3: "#515c6f",
                level3: 'level1',
                fill4: "#515c6f",
                level4: 'level1'
            }
        },
        methods: {
            select: function (num, fill, level) {
                this.show = num;
                if(this.show === "1"){
                    this.fill1 = fill;
                    this.level1 = level;
                    this.fill2 = "#515c6f";
                    this.level2 = 'level1';
                    this.fill3 = "#515c6f";
                    this.level3 = 'level1';
                    this.fill4 = "#515c6f";
                    this.level4 = 'level1';
                }else if(this.show === "2"){
                    this.fill2 = fill;
                    this.level2 = level;
                    this.fill1 = "#515c6f";
                    this.level1 = 'level1';
                    this.fill3 = "#515c6f";
                    this.level3 = 'level1';
                    this.fill4 = "#515c6f";
                    this.level4 = 'level1';
                }else if(this.show === "3"){
                    this.fill3 = fill;
                    this.level3 = level;
                    this.fill2 = "#515c6f";
                    this.level2 = 'level1';
                    this.fill1 = "#515c6f";
                    this.level1 = 'level1';
                    this.fill4 = "#515c6f";
                    this.level4 = 'level1';
                }else if(this.show === "4"){
                    this.fill4 = fill;
                    this.level4 = level;
                    this.fill2 = "#515c6f";
                    this.level2 = 'level1';
                    this.fill3 = "#515c6f";
                    this.level3 = 'level1';
                    this.fill1 = "#515c6f";
                    this.level1 = 'level1';
                }
            }
        }
    }
    </script>

    <style>
    .tabGroup{
        width: 323pt;
    }
    .tabnav {
        display: flex;
        align-items: center;
        list-style-type: none;
        border: 0.5pt solid #707070;
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

    .svg,
    .text {
        text-align: center;
    }
    </style>

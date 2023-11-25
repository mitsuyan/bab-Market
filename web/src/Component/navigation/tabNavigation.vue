<template>
    <div class="homeTab">
        <ul class="homeTabNav">
            <li @click="select('1', 'level4Selected')" :class="{ 'active': show === '1' }">
                <headerText :level="level1" :headerText="headerText1" />
            </li>
            <li @click="select('2', 'level4Selected')" :class="{ 'active': show === '2' }">
                <headerText :level="level2" :headerText="headerText2" />
            </li>
            <li @click="select('3', 'level4Selected')" :class="{ 'active': show === '3' }">
                <headerText :level="level3" :headerText="headerText3" />
            </li>
        </ul>
    </div>
</template>

<script>
import headerText from '../../Components/atoms/headerText.vue';
export default {
        components: {
            headerText
        },
        data() {
            return {
                show: "1",
                headerText1: "おすすめ",
                headerText2: "マイリスト",
                headerText3: "おもちゃ",
                level1: 'level4',
                level2: 'level4',
                level3: 'level4'
            }
        },
        methods: {
            select: function (num, level) {
                this.show = num;
                if(this.show === "1"){
                    this.level1 = level;
                    this.level2 = 'level4';
                    this.level3 = 'level4';
                    this.level4 = 'level4';
                }else if(this.show === "2"){
                    this.level2 = level;
                    this.level1 = 'level4';
                    this.level3 = 'level4';
                    this.level4 = 'level4';
                }else if(this.show === "3"){
                    this.level3 = level;
                    this.level2 = 'level4';
                    this.level1 = 'level4';
                    this.level4 = 'level4';
                }
            }
        }
    }
    </script>

<style>
.homeTab{
        width: 323pt;
        background-color: #ffffff;
    }
    .homeTabNav {
        display: flex;
        align-items: center;
        list-style-type: none;
        box-shadow: 0 8pt 15pt #727C8E10;
        width: 323pt;
        height: 36pt;
    }

    .homeTabNav li {
        cursor: pointer;
        width: 50%;
        background: #ffffff;
        text-align: center;
    }

    ul {
        padding-inline-start: 0;
        margin-block-start: 0;
        margin-block-end: 0;
    }
</style>
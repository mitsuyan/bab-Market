<template>
    <div class="homeTab">
        <ul class="homeTabNav">
            <li @click="select('1', 'level1Selected')" :class="{ 'active': show === '1' }">
                <headerText :level="level1" :headerText="headerText1" />
            </li>
            <li @click="select('2', 'level1Selected')" :class="{ 'active': show === '2' }">
                <headerText :level="level2" :headerText="headerText2" />
            </li>
            <li @click="select('3', 'level1Selected')" :class="{ 'active': show === '3' }">
                <headerText :level="level3" :headerText="headerText3" />
            </li>
        </ul>
    </div>
</template>

<script>
import headerText from '../Components/atoms/headerText.vue';
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
                level1: 'level1',
                level2: 'level1',
                level3: 'level1'
            }
        },
        methods: {
            select: function (num, level) {
                this.show = num;
                if(this.show === "1"){
                    this.level1 = level;
                    this.level2 = 'level1';
                    this.level3 = 'level1';
                    this.level4 = 'level1';
                }else if(this.show === "2"){
                    this.level2 = level;
                    this.level1 = 'level1';
                    this.level3 = 'level1';
                    this.level4 = 'level1';
                }else if(this.show === "3"){
                    this.level3 = level;
                    this.level2 = 'level1';
                    this.level1 = 'level1';
                    this.level4 = 'level1';
                }
            }
        }
    }
    </script>
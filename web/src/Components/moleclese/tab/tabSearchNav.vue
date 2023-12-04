<template>
    <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
        <path id="Search" d="M24.7,23.275l-4.5-4.5A9.1,9.1,0,1,0,18.774,20.2l4.5,4.5A1.011,1.011,0,1,0,24.7,23.275ZM13.1,20.171A7.075,7.075,0,1,1,20.171,13.1,7.075,7.075,0,0,1,13.1,20.171Z" transform="translate(-4 -4)" :fill="fill"/>
    </svg></div>
    <div class="text"><footerText :level="level" :text="data" /></div>
</template>

<script>
import footerText from '../../atoms/footerText.vue';

export default {
    components: {
        footerText
    },
    data() {
        return {
            data: "さがす"
        }
    },
    props: {
        fill: String,
        level: String
    }
};
</script>

<style>
.svg {
    text-align: center;
    padding-top: 10pt;
}

.text {
    justify-content: center;
    display: flex;
}
</style>
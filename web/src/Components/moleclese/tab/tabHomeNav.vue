<template>
    <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" width="21.669" height="21.18" viewBox="0 0 21.669 21.18">
        <g id="Home" transform="translate(0.15 0.134)">
        <path id="Home-2" data-name="Home" d="M94.619,86.015l-9.953-8.723a.732.732,0,0,0-.965,0l-9.953,8.723a.732.732,0,0,0,.965,1.1l.771-.675V97.325a.732.732,0,0,0,.732.732H92.152a.732.732,0,0,0,.732-.732V86.44l.771.675a.732.732,0,0,0,.965-1.1ZM82.494,96.593V90.565h3.38v6.029h-3.38Zm8.926-11.43v11.43H87.338v-6.76a.732.732,0,0,0-.732-.732H81.762a.732.732,0,0,0-.732.732v6.76H76.948V85.163s0,0,0-.005l7.236-6.343,7.236,6.343S91.42,85.161,91.42,85.163Z" transform="translate(-73.499 -77.11)" :fill="fill" :stroke="fill" stroke-width="0.2"/>
        </g>
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
            data: "ホーム"
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
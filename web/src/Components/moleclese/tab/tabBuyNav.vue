<template>
    <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" width="17.116" height="19.654" viewBox="0 0 17.116 19.654">
        <g id="グループ_123" data-name="グループ 123" transform="translate(-289.025 -880.692)">
        <g id="グループ_121" data-name="グループ 121" transform="translate(289.025 880.692)">
        <g id="グループ_87" data-name="グループ 87" transform="translate(0)">
        <path id="パス_42" data-name="パス 42" d="M50.1,5.424,50.086,5.4a.928.928,0,0,0-.069-.12L47.282.552A1.109,1.109,0,0,0,46.325,0h-9.41a1.109,1.109,0,0,0-.958.553L33.178,5.374a.577.577,0,0,0-.056.135.973.973,0,0,0-.061.339V18.3a1.356,1.356,0,0,0,1.354,1.354H48.823A1.356,1.356,0,0,0,50.178,18.3V5.8c0-.017,0-.033,0-.05A.573.573,0,0,0,50.1,5.424ZM42.216,1.152H46.3l2.151,3.719H42.216Zm-5.274,0h4.122V4.871H34.8ZM49.026,18.3a.2.2,0,0,1-.2.2H34.416a.2.2,0,0,1-.2-.2V6.023H49.026Z" transform="translate(-33.062)" :fill="fill"/>
        </g></g>
        <g id="グループ_122" data-name="グループ 122" transform="translate(294.839 890.889)">
        <g id="グループ_89" data-name="グループ 89">
        <path id="パス_43" data-name="パス 43" d="M189.871,265.8a.576.576,0,0,0-.815,0l-2.572,2.572-.989-.989a.576.576,0,0,0-.815.815l1.4,1.4a.576.576,0,0,0,.815,0l2.979-2.979A.576.576,0,0,0,189.871,265.8Z" transform="translate(-184.512 -265.632)" :fill="fill"/>
        </g></g></g></svg>
    </div>
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
            data: "出品"
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
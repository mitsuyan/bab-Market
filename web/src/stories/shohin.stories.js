import shohinDisplay from '../Component/shohin/shohinDisplay.vue';
import shohinInformation from '../Component/shohin/shohinInformation.vue';
import shohinExplanation from '../Component/shohin/shohinExplanation.vue';
import shohinSellorTest from '../Component/shohin/shohinSellorTest.vue';
import shohinName from '../Component/shohin/shohinName.vue';
export default {
    title: 'shohin'
};

export const Shohindisplay = () => ({
    components: { shohinDisplay },
    template: '<shohinDisplay />'
});

export const Shohininformation = () => ({
    components: { shohinInformation },
    template: '<shohinInformation />'
});

export const Shohinexplanation = () => ({
    components: { shohinExplanation },
    template: '<shohinExplanation />'
});

export const Shohinsellortest = () => ({
    components: { shohinSellorTest },
    template: '<shohinSellorTest />'
});

export const Shohinname = () => ({
    components: { shohinName },
    template: '<shohinName />'
});
import shohinDisplay from '../Components/moleclese/shohin/shohinDisplay.vue';
import shohinInformation from '../Components/moleclese/shohin/shohinInformation.vue';
import shohinExplanation from '../Components/moleclese/shohin/shohinExplanation.vue';
import shohinSellorTest from '../Components/moleclese/shohin/shohinSellorTest.vue';
import shohinName from '../Components/moleclese/shohin/shohinName.vue';
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
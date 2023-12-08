import mainBase from '../Components/mainBase.vue';

export default {
    title: "baseVariation",
    component: mainBase
};

export const mainBaseComp = () => ({
    components: { mainBase },
    template: '<mainBase base="mainBase" />'
})

export const grayBaseComp = () => ({
    components: { mainBase },
    template: '<mainBase base="grayBase" />'
})

export const outlineComp = () => ({
    components: { mainBase },
    template: '<mainBase base="outline" />'
})

export const radius11Comp = () => ({
    components: { mainBase },
    template: '<mainBase base="radius11" />'
})

export const transparentComp = () => ({
    components: { mainBase },
    template: '<mainBase base="transparent" />'
})

export const yelloBaseComp = () => ({
    components: { mainBase },
    template: '<mainBase base="yelloBase" />'
})
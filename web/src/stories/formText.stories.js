import formText from '../Components/atoms/formText.vue';
/* コンポーネントの設定 */
export default {
    title: 'Text',
    component: formText,
};

/* story記述 */
export const textFormLabelBluegray = () => ({
    components: { formText },
    template: '<formText level="textFormLabelBluegray" />'
});

export const textFormLabelGrayLevel1 = () => ({
    components: { formText },
    template: '<formText level="textFormLabelGrayLevel1" />'
});

export const textFormLabelGrayLevel2 = () => ({
    components: { formText },
    template: '<formText level="textFormLabelGrayLevel2" />'
});

export const textFormLabelBlackLevel1 = () => ({
    components: { formText },
    template: '<formText level="textFormLabelBlackLevel1" />'
});

export const textFormLabelBlackLevel2 = () => ({
    components: { formText },
    template: '<formText level="textFormLabelGrayLevel2" />'
});

export const textFormLevel1 = () => ({
    components: { formText },
    template: '<formText level="textFormLevel1" />'
});

export const textFormLevel2 = () => ({
    components: { formText },
    template: '<formText level="textFormLevel2" />'
});

export const textFormLevel3 = () => ({
    components: { formText },
    template: '<formText level="textFormLevel3" />'
});

export const amountForm = () => ({
    components: { formText },
    template: '<formText level="amountForm" />'
});

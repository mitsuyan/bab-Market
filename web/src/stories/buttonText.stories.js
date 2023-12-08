import buttonText from '../Components/atoms/buttonText.vue';
/* コンポーネントの設定 */
export default {
    title: 'Text',
    component: buttonText,
};

/* story記述 */
export const buttonTextLevel1White = () => ({
    components: { buttonText },
    template: '<buttonText level="level1White" />'
});

export const buttonTextLevel2white = () => ({
    components: { buttonText },
    template: '<buttonText level="level2White" />'
});

export const buttonTextLevel3white = () => ({
    components: { buttonText },
    template: '<buttonText level="level3White" />'
});

export const buttonTextLevel1Pink = () => ({
    components: { buttonText },
    template: '<buttonText level="level1Pink" />'
});

export const buttonTextLevel2Pink = () => ({
    components: { buttonText },
    template: '<buttonText level="level2Pink" />',
});

export const buttonTextSubLevel3Pink = () => ({
    components: { buttonText },
    template: '<buttonText level="level3Pink" />',
});

export const buttonTextLevel1Gray = () => ({
    components: { buttonText },
    template: '<buttonText level="level1Gray" />'
});
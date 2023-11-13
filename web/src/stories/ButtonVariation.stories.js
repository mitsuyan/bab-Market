/* Storyにコンポーネント追加 */
import ButtonRedSemicircleIconLongShadow from '../components/ButtonRedSemicircleIconLongShadow.vue';
import ButtonRedIconShadow from '../components/ButtonRedIconShadow.vue';
import ButtonRedPicture from '../Components/ButtonRedPicture.vue';
import ButtonRedMiddle from '../Components/ButtonRedMiddle.vue';
import ButtonRedLong from '../Components/ButtonRedLong.vue';
import ButtonRedShort from '../Components/ButtonRedShort.vue';
import ButtonWhiteLong from '../Components/ButtonWhiteLong.vue';
import ButtonWhiteMiddle from '../Components/ButtonWhiteMiddle.vue';

/* コンポーネントの設定 */
export default {
    title: 'ButtonVariation',
    component: ButtonRedSemicircleIconLongShadow,
    component: ButtonRedIconShadow,
    component: ButtonRedPicture,
    component: ButtonRedMiddle,
    component: ButtonRedLong,
    component: ButtonRedShort,
    component: ButtonWhiteLong,
    component: ButtonWhiteMiddle
};

/* story記述 */
export const LoginButton = () => ({
    components: { ButtonRedSemicircleIconLongShadow },
    template: '<ButtonRedSemicircleIconLongShadow />'
});

export const Buttonrediconshadow = () => ({
    components: { ButtonRedIconShadow },
    template: '<ButtonRedIconShadow />'
});

export const Buttonredpicture = () => ({
    components: { ButtonRedPicture },
    template: '<ButtonRedPicture />'
});

export const Buttonredmiddle = () => ({
    components: { ButtonRedMiddle },
    template: '<ButtonRedMiddle />'
});

export const Buttonredlong = () => ({
    components: { ButtonRedLong },
    template: '<ButtonRedLong />'
});

export const Buttonredshort = () => ({
    components: { ButtonRedShort },
    template: '<ButtonRedShort />'
});

export const Buttonwhitelong = () => ({
    components: { ButtonWhiteLong },
    template: '<ButtonWhiteLong />'
});

export const Buttonwhitemiddle = () => ({
    components: { ButtonWhiteMiddle },
    template: '<ButtonWhiteMiddle />'
});
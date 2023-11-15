/* Storyにコンポーネント追加 */
import ButtonRedSemicircleIconLongShadow from '../ComponentButton/ButtonRedSemicircleIconLongShadow.vue';
import ButtonRedIconShadow from '../ComponentButton/ButtonRedIconShadow.vue';
import ButtonRedPicture from '../ComponentButton/ButtonRedPicture.vue';
import ButtonRedMiddle from '../ComponentButton/ButtonRedMiddle.vue';
import ButtonRedLong from '../ComponentButton/ButtonRedLong.vue';
import ButtonRedShort from '../ComponentButton/ButtonRedShort.vue';
import ButtonWhiteLong from '../ComponentButton/ButtonWhiteLong.vue';
import ButtonWhiteMiddle from '../ComponentButton/ButtonWhiteMiddle.vue';
import ButtonWhiteShort from '../ComponentButton/ButtonWhiteShort.vue';
import ButtonWhiteShortBold from '../ComponentButton/ButtonWhiteShortBold.vue';
import ButtonWhiteShortRegular from '../ComponentButton/ButtonWhiteShortRegular.vue';
import ButtonWhiteShortLight from "../ComponentButton/ButtonWhiteShortLight.vue";
import ButtonProfile from "../ComponentButton/ButtonProfile.vue";

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
    component: ButtonWhiteMiddle,
    component: ButtonWhiteShort,
    component: ButtonWhiteShortBold,
    component: ButtonWhiteShortRegular,
    component: ButtonWhiteShortLight,
    component: ButtonProfile
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

export const Buttonwhiteshort = () => ({
    components: { ButtonWhiteShort },
    template: '<ButtonWhiteShort />'
});

export const Buttonwhiteshortbold = () => ({
    components: { ButtonWhiteShortBold },
    template: '<ButtonWhiteShortBold />'
});

export const Buttonwhiteshortregular = () => ({
    components: { ButtonWhiteShortRegular },
    template: '<ButtonWhiteShortRegular />'
});

export const Buttonwhiteshortlight = () => ({
    components: { ButtonWhiteShortLight },
    template: '<ButtonWhiteShortLight />'
});

export const Buttonprofile = () => ({
    components: { ButtonProfile },
    template: '<ButtonProfile />'
});
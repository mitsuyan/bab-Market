/* Storyにコンポーネント追加 */
import ButtonRedSemicircleIconLongShadow from '../Components/atoms/ComponentButton/ButtonRedSemicircleIconLongShadow.vue';
import ButtonRedIconShadow from '../Components/atoms/ComponentButton/ButtonRedIconShadow.vue';
import ButtonRedPicture from '../Components/atoms/ComponentButton/ButtonRedPicture.vue';
import ButtonRedMiddle from '../Components/atoms/ComponentButton/ButtonRedMiddle.vue';
import ButtonRedLong from '../Components/atoms/ComponentButton/ButtonRedLong.vue';
import ButtonRedShort from '../Components/atoms/ComponentButton/ButtonRedShort.vue';
import ButtonWhiteLong from '../Components/atoms/ComponentButton/ButtonWhiteLong.vue';
import ButtonWhiteMiddle from '../Components/atoms/ComponentButton/ButtonWhiteMiddle.vue';
import ButtonWhiteShort from '../Components/atoms/ComponentButton/ButtonWhiteShort.vue';
import ButtonWhiteShortBold from '../Components/atoms/ComponentButton/ButtonWhiteShortBold.vue';
import ButtonWhiteShortRegular from '../Components/atoms/ComponentButton/ButtonWhiteShortRegular.vue';
import ButtonWhiteShortLight from "../Components/atoms/ComponentButton/ButtonWhiteShortLight.vue";
import ButtonProfile from "../Components/atoms/ComponentButton/ButtonProfile.vue";
import ButtonGrayIcon from "../Components/atoms/ComponentButton/ButtonGrayIcon.vue";

/* コンポーネントの設定 */
export default {
    title: 'ButtonVariation',
    component: ButtonRedSemicircleIconLongShadow
};

export const Buttongrayicon = () => ({
    components: { ButtonGrayIcon },
    template: '<ButtonGrayIcon />'
});
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
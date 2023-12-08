import LoginHome from '../Pages/LoginHome.vue';
import CreateAcount from '../Pages/CreateAcount.vue';
import TopPages from '../Pages/TopPages.vue';
import shohinDetail from '../Pages/shohinDetail.vue';
import myPage from '../Pages/myPage.vue';
import searchPage from '../Pages/searchPage.vue';

export default {
    title: 'Main',
};

export const Loginhome = () => ({
    components: { LoginHome },
    template: '<LoginHome />',
});

export const Createacount = () => ({
    components: { CreateAcount },
    template: '<CreateAcount />',
});

export const topPages = () => ({
    components: { TopPages },
    template: '<TopPages />'
});

export const Mypage = () => ({
    components: { myPage },
    template: '<myPage />',
});

export const shohindetail = () => ({
    components: { shohinDetail },
    template: '<shohinDetail />',
});

export const Searchpage = () => ({
    components: { searchPage },
    template: '<searchPage />',
});
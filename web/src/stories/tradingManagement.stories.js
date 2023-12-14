import tradingManagement from '../Pages/TradingManagement.vue';
/* コンポーネントの設定 */
export default {
    title: 'Main',
    component: tradingManagement,
};

/* story記述 */
export const tradingManagements = () => ({
    components: { tradingManagement },
    template: '<tradingManagement />'
});


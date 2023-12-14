<template>
  <toggleButton :id="0" :open="items.mainCategory.isOpen" @isToggle="toggleChange">
    <ImgMainRefineToggle fileName="refine.svg" :text="text"></ImgMainRefineToggle>
  </toggleButton>
  <MainBase class="toggleBase">
    <div class="mainMenu">
      <Refine v-if="items.mainCategory.isOpen" @isOpen3="toggleChange" :categoryId=0 :items="items"
        :isOpen="items.mainCategory.isOpen"></Refine>
    </div>
    <transition name="slide">
      <div class="menu">
        <Refine v-if="isOpen" :categoryId="categoryId" @change3="handleMenuChange" @isOpen3="toggleChange" :items="items"
        :isOpen="isOpen"></Refine>
      </div>
    </transition>
    
  </MainBase>
</template>

<script>
import Refine from '../moleclese/refineComp.vue';
import ImgMainRefineToggle from '../atoms/imgComp.vue';
import toggleButton from '../atoms/togleButton.vue';
import MainBase from '../mainBase.vue';

export default {
  components: {
    Refine,
    ImgMainRefineToggle,
    toggleButton,
    MainBase
  },
  data() {
    return {
      items: {
        mainCategory:
          { id: 0, name: "メイン", isOpen: false },
        majorCategory:
          [{ id: 1, name: "月齢", isOpen: false, value: [] },
          { id: 2, name: "体重", isOpen: false, value: [] },
          { id: 3, name: "身長", isOpen: false, value: [] },
          { id: 4, name: "カテゴリ", isOpen: false, value: [] },
          { id: 5, name: "ブランド", isOpen: false, value: [] },
          { id: 6, name: "商品の状態", isOpen: false, value: [] },
          { id: 7, name: "色", isOpen: false, value: [] },
          { id: 8, name: "配送料の負担", isOpen: false, value: [] },
          { id: 9, name: "発送オプション", isOpen: false, value: [] }
          ],
        minorCategory: [
          { majorId: 1, id: 1, name: "生後０カ月", checked: false },
          { majorId: 1, id: 2, name: "生後１カ月", checked: false },
          { majorId: 1, id: 3, name: "生後２カ月", checked: false },
          { majorId: 1, id: 4, name: "生後３カ月", checked: false },
          { majorId: 2, id: 1, name: "10g", checked: false },
          { majorId: 2, id: 2, name: "20g", checked: false },
          { majorId: 3, id: 1, name: "100cm", checked: false },
          { majorId: 3, id: 2, name: "120cm", checked: false },
          { majorId: 4, id: 1, name: "ベビー服(～100cm)", checked: false },
          { majorId: 4, id: 2, name: "キッズ服(～160cm)", checked: false },
          { majorId: 5, id: 1, name: "高級ブランド", checked: false },
          { majorId: 5, id: 2, name: "偽ブランド", checked: false },
          { majorId: 6, id: 1, name: "良い", checked: false },
          { majorId: 6, id: 2, name: "ダメ", checked: false },
          { majorId: 7, id: 1, name: "グリーン系", checked: false, colorCode: "#36BC06" },
          { majorId: 7, id: 2, name: "ブルー系", checked: false, colorCode: "#77CBFF" },
          { majorId: 8, id: 1, name: "配送社が負担", checked: false },
          { majorId: 8, id: 2, name: "購入者が負担", checked: false },
          { majorId: 9, id: 1, name: "やまと", checked: false },
          { majorId: 9, id: 2, name: "くろねこ", checked: false },
        ],
        subCategory: [
          { minorId: 1, id: 1, name: "生後０カ月", checked: false },
          { minorId: 1, id: 2, name: "生後１カ月", checked: false },
          { minorId: 1, id: 3, name: "生後２カ月", checked: false },
          { minorId: 1, id: 4, name: "生後３カ月", checked: false },
          { minorId: 2, id: 1, name: "10g", checked: false },
          { minorId: 2, id: 2, name: "20g", checked: false },
          { minorId: 3, id: 1, name: "100cm", checked: false },
          { minorId: 3, id: 2, name: "120cm", checked: false },
          { minorId: 4, id: 1, name: "あ", checked: false },
        ],
      },
      categoryId: null,
      isOpen: false,
      subCategoryIsOpen: false,
      text:'絞り込み'
    }
  },
  methods: {
    handleMenuChange({ minorId, newCheckedState, majorId }) {
      // minorId に対応する要素を探す
      const item = this.items.minorCategory.find(item => item.id === minorId && item.majorId === majorId);
      // 要素が見つかれば checked を更新
      if (item) {
        item.checked = newCheckedState;
        if (item.checked) {
          this.items.majorCategory[majorId - 1].value.push(minorId);
        } else {
          const indexToRemove = this.items.majorCategory[majorId - 1].value.indexOf(item.id);
          if (indexToRemove !== -1) {
            this.items.majorCategory[majorId - 1].value.splice(indexToRemove, 1);
          }
        }
      }
    },
    toggleChange({ majorId, isOpen }) {
      const item = this.items.majorCategory.find((item) => item.id === majorId);
      if (item) {
        item.isOpen = isOpen;
        this.isOpen = isOpen;
        this.categoryId = majorId;
        console.log(this.isOpen);
      } else {
        this.items.mainCategory.isOpen = !this.items.mainCategory.isOpen;
        console.log(this.items.mainCategory.isOpen);
      }
    },
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {}

.slide-enter-to,
.slide-leave-from {}

.mainMenu {
  position: fixed;
  z-index: 10000;
  bottom: 0px;
  background-color: rgba(20, 20, 20, 0.1);
  width: 431px;
}

.menu {
  position: fixed;
  z-index: 10000;
  bottom: 0px;
  width: 431px;
}

.toggleBase{
  background-color: rgba(00, 00, 00, 0.5);
}
</style>
<template>
  <div class="container">
    <menuText level="level1" label="すべて" />
    <div v-for="item, index in filteredCategories" :key="index"
      :class="{ 'border-top': index === 0, 'border-bottom': index !== items.length - 1 }">
      <checkInput :value="value" checkBoxLevel="checkBoxGray" @change="handleCheckboxChange">
        <formText level="textFormLabelGrayBlack" :labelId="item.id">
          {{ item.name }}
        </formText>
      </checkInput>
    </div>
  </div>
</template>

<script>
import formText from '../atoms/formText.vue';
import menuText from '../atoms/menuText.vue';
import checkInput from '../atoms/inputCheckbox.vue';
import Img from '../atoms/imgComp.vue';
import textForm from '../atoms/RectangleNotIncludedRadius.vue';
import toggleButton from '../atoms/togleButton.vue';
export default {
  components: {
    formText,
    menuText,
    checkInput,
    Img,
    textForm,
    toggleButton,
  },
  data() {
    return {
      title: 'ヘッダー',
      menu: "minorCategoryMenu",
    };
  },
  props: {
    categories: {
      type: Object,
      default: () => ({
        "userId": 1,
        "sessionId": "ov2gga741a5ca024j8eeh82vu6",
        "codeMaster": [
          {
            "code_id": 140,
            "table": "age",
            "name": "生後0ヶ月"
          },
          {
            "code_id": 141,
            "table": "age",
            "name": "生後1ヶ月"
          },
          {
            "code_id": 142,
            "table": "age",
            "name": "生後2ヶ月"
          },
          {
            "code_id": 143,
            "table": "age",
            "name": "生後3ヶ月"
          },
          {
            "code_id": 144,
            "table": "age",
            "name": "生後4ヶ月"
          },
          {
            "code_id": 145,
            "table": "age",
            "name": "生後5ヶ月"
          },
          {
            "code_id": 146,
            "table": "age",
            "name": "生後6ヶ月"
          },
          {
            "code_id": 147,
            "table": "age",
            "name": "生後7ヶ月"
          },
          {
            "code_id": 148,
            "table": "age",
            "name": "生後8ヶ月"
          },
          {
            "code_id": 149,
            "table": "age",
            "name": "生後9ヶ月"
          },
          {
            "code_id": 150,
            "table": "age",
            "name": "生後10ヶ月"
          },
          {
            "code_id": 151,
            "table": "age",
            "name": "生後1年"
          },
          {
            "code_id": 152,
            "table": "age",
            "name": "生後2年"
          },
          {
            "code_id": 153,
            "table": "age",
            "name": "生後3年"
          },
          {
            "code_id": 154,
            "table": "age",
            "name": "生後4年"
          },
          {
            "code_id": 155,
            "table": "age",
            "name": "生後5年"
          },
          {
            "code_id": 156,
            "table": "age",
            "name": "生後6年"
          },
          {
            "code_id": 157,
            "table": "age",
            "name": "生後7年"
          },
          {
            "code_id": 158,
            "table": "weight",
            "name": "3kg"
          },
          {
            "code_id": 159,
            "table": "weight",
            "name": "6kg"
          },
          {
            "code_id": 160,
            "table": "weight",
            "name": "9kg"
          },
        ],
        "major_category": [
          {
            "major_category_id": 1,
            "major_category": "ベビー服（~100cm）"
          },
          {
            "major_category_id": 2,
            "major_category": "キッズ服(~160cm)"
          },
          {
            "major_category_id": 3,
            "major_category": "おむつ・トイレ"
          },
          {
            "major_category_id": 4,
            "major_category": "移動用品"
          },
          {
            "major_category_id": 5,
            "major_category": "寝具・ベビー家具"
          },
          {
            "major_category_id": 6,
            "major_category": "おもちゃ"
          },
          {
            "major_category_id": 7,
            "major_category": "行事・記念品"
          }
        ],
        "minor_category": [
          {
            "minor_category_id": 1,
            "major_category_id": 1,
            "minor_category": "トップス"
          },
          {
            "minor_category_id": 2,
            "major_category_id": 1,
            "minor_category": "アウター"
          },
          {
            "minor_category_id": 3,
            "major_category_id": 1,
            "minor_category": "パンツ"
          },
          {
            "minor_category_id": 4,
            "major_category_id": 1,
            "minor_category": "スカート"
          },
          {
            "minor_category_id": 5,
            "major_category_id": 1,
            "minor_category": "ワンピース"
          },
          {
            "minor_category_id": 6,
            "major_category_id": 1,
            "minor_category": "ベビードレス"
          },
          {
            "minor_category_id": 7,
            "major_category_id": 1,
            "minor_category": "おくるみ"
          },
          {
            "minor_category_id": 8,
            "major_category_id": 1,
            "minor_category": "下着・肌着"
          },
          {
            "minor_category_id": 9,
            "major_category_id": 1,
            "minor_category": "パジャマ"
          },
          {
            "minor_category_id": 10,
            "major_category_id": 1,
            "minor_category": "ロンバース"
          },
          {
            "minor_category_id": 11,
            "major_category_id": 1,
            "minor_category": "その他"
          },
          {
            "minor_category_id": 12,
            "major_category_id": 2,
            "minor_category": "コート"
          },
          {
            "minor_category_id": 13,
            "major_category_id": 2,
            "minor_category": "ジャケット・上着"
          },
          {
            "minor_category_id": 14,
            "major_category_id": 2,
            "minor_category": "トップス"
          },
          {
            "minor_category_id": 15,
            "major_category_id": 2,
            "minor_category": "スカート"
          },
          {
            "minor_category_id": 16,
            "major_category_id": 2,
            "minor_category": "パンツ"
          },
          {
            "minor_category_id": 17,
            "major_category_id": 2,
            "minor_category": "ワンピース"
          },
          {
            "minor_category_id": 18,
            "major_category_id": 2,
            "minor_category": "セットアップ"
          },
          {
            "minor_category_id": 19,
            "major_category_id": 2,
            "minor_category": "パジャマ"
          },
          {
            "minor_category_id": 20,
            "major_category_id": 2,
            "minor_category": "フォーマル・ドレス"
          },
          {
            "minor_category_id": 21,
            "major_category_id": 2,
            "minor_category": "和服"
          },
          {
            "minor_category_id": 22,
            "major_category_id": 2,
            "minor_category": "下着"
          },
          {
            "minor_category_id": 23,
            "major_category_id": 2,
            "minor_category": "その他"
          },
          {
            "minor_category_id": 24,
            "major_category_id": 3,
            "minor_category": "おむつ用品"
          },
          {
            "minor_category_id": 25,
            "major_category_id": 3,
            "minor_category": "おまる"
          },
        ],
        "colors": [
          {
            "color_id": 1,
            "color": "グリーン系",
            "color_code": "#36BC06"
          },
          {
            "color_id": 2,
            "color": "ブルー系",
            "color_code": "#77CBFF"
          },
        ]
      })
    },
    categoryId: {
      type: String,
      default: "age",
    },
  },
  methods: {
    handleCheckboxChange(minorId, newCheckedState, majorId) {
      // イベントを発火する
      this.$emit('change1', { minorId, newCheckedState, majorId });
    },
    toggleChange(majorId, isOpen) {
      // イベントを発火する
      this.$emit('isOpen', { majorId, isOpen });
    },
  },
  computed: {
    filteredCategories() {
      console.log('categories:', this.categories);
      console.log('categoryId:', this.categories.codeMaster);
      console.log(this.categories.codeMaster.filter(item => item.table === this.categoryId));
      return this.categories.codeMaster.filter(item => item.table === this.categoryId);

    },
  },
};
</script>

<style scoped>
.itemList {
  height: 680px;
  overflow-y: auto;
}

.minorCategoryItem {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.minorCategoryMenu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  width: 315px;
  gap: 173.5px;
}

.majorCategoryMenu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* 要素を均等に配置 */
  min-height: 24px;
  width: 291px;
  margin-top: 35.7px;
}

.border-top {
  border-top: 1px solid #707070;
}

.border-bottom {
  border-bottom: 1px solid #707070;
}</style>
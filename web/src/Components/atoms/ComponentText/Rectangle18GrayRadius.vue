<template>
    <div class="input-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 21 21" class="search-icon">
            <path id="Search" d="M24.7,23.275l-4.5-4.5A9.1,9.1,0,1,0,18.774,20.2l4.5,4.5A1.011,1.011,0,1,0,24.7,23.275ZM13.1,20.171A7.075,7.075,0,1,1,20.171,13.1,7.075,7.075,0,0,1,13.1,20.171Z"
            transform="translate(-4 -4)" fill="#515c6f" />
        </svg>
        <input type="text" class="grayRadius18" v-on:keydown.enter="addInputText" @click="buttonClicked" v-model="inputText" />
    </div>
</template>

<script>
export default {
    data(){
        return{
            inputText: null,
        }
    },
    methods:{
        addInputText(){
            this.$emit('inText',this.inputText);
        },
        buttonClicked(){
            this.$emit('click');
        }
    }
};
</script>

<style scoped>
.input-container {
    position: relative;
}

.search-icon {
    position: absolute;
    left: 20px;
    /* 調整が必要に応じて左側の余白を設定 */
    top: 50%;
    transform: translateY(-50%);
}

input.grayRadius18 {
    background-color: rgba(114, 124, 142, 0.1);
    /* 背景の不透明度を設定 */
    border: none;
    border-radius: 18pt;
    width: 145pt;
    height: 25pt;
    padding-left: 40pt;
    padding-right: 50pt;
}

input.grayRadius18:focus {
    outline: none;
    color: #515C6F;
    /* フォーカス時のテキスト色を設定 */
    background-color: rgba(114, 124, 142, 0.1);
    /* フォーカス時の背景色を設定 */
}</style>
